"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const CALENDAR_URL = "https://calendly.com/ofxffm/30min";

type FormData = {
  branche: string;
  groesse: string;
  probleme: string[];
  interesse: string[];
  dringlichkeit: string;
  vorname: string;
  nachname: string;
  email: string;
  unternehmen: string;
  telefon: string;
};

const EMPTY_FORM: FormData = {
  branche: "", groesse: "", probleme: [], interesse: [],
  dringlichkeit: "", vorname: "", nachname: "",
  email: "", unternehmen: "", telefon: "",
};

const BRANCHES = [
  { id: "handwerk", label: "Handwerk & Bau" },
  { id: "handel", label: "Handel & E-Commerce" },
  { id: "gesundheit", label: "Gesundheitswesen" },
  { id: "logistik", label: "Logistik & Transport" },
  { id: "immobilien", label: "Immobilien" },
  { id: "bildung", label: "Bildung" },
  { id: "marketing", label: "Marketing & Social" },
  { id: "andere", label: "Andere Branche" },
];

const GROESSEN = [
  { id: "solo", label: "1 Person", sub: "Nur ich" },
  { id: "klein", label: "2–10 MA", sub: "Kleines Team" },
  { id: "mittel", label: "11–50 MA", sub: "Mittelgroß" },
  { id: "gross", label: "51+ MA", sub: "Etabliert" },
];

const PROBLEME = [
  "Endlose Zettelwirtschaft",
  "Fehleranfällige Routinearbeit",
  "Manuelle Datenpflege",
  "Starre Systemvorgaben",
  "Administrative Dauerlast",
  "Sonntage am Schreibtisch",
  "Isolierte Insellösungen",
  "Softwaresklaverei",
];

const INTERESSEN = [
  { id: "chatbot", label: "KI-Chatbot für die Website" },
  { id: "automation", label: "Prozessautomatisierung" },
  { id: "software", label: "Individuelle Software / CRM" },
  { id: "strategie", label: "KI-Strategie & Beratung" },
  { id: "integration", label: "System-Integration" },
  { id: "alles", label: "Alles / Noch nicht sicher" },
];

const DRINGLICHKEIT = [
  { id: "sofort", label: "Sofort", sub: "Ich verliere täglich Zeit und Geld." },
  { id: "bald", label: "In 1–3 Monaten", sub: "Ich plane aktiv und bin bereit." },
  { id: "erkunden", label: "Erst erkunden", sub: "Ich möchte verstehen, was möglich ist." },
];

const TOTAL_STEPS = 6;

type Props = {
  isOpen: boolean;
  onClose: () => void;
  initialEmail?: string;
};

export default function AnalyseFunnel({ isOpen, onClose, initialEmail = "" }: Props) {
  const [step, setStep] = useState(1);
  const [visible, setVisible] = useState(true);
  const [forward, setForward] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [formData, setFormData] = useState<FormData>({ ...EMPTY_FORM, email: initialEmail });

  // Sync initial email when prop changes
  useEffect(() => {
    setFormData((prev) => ({ ...prev, email: initialEmail }));
  }, [initialEmail]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Reset state after overlay closes (wait for exit animation)
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setStep(1);
        setFormData({ ...EMPTY_FORM, email: initialEmail });
        setSubmitted(false);
        setSendError(false);
        setVisible(true);
      }, 500);
      return () => clearTimeout(t);
    }
  }, [isOpen, initialEmail]);

  // ESC to close
  const handleClose = useCallback(() => {
    if (!sending) onClose();
  }, [sending, onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleClose]);

  const canProceed = (): boolean => {
    switch (step) {
      case 1: return !!formData.branche;
      case 2: return !!formData.groesse;
      case 3: return formData.probleme.length > 0;
      case 4: return formData.interesse.length > 0;
      case 5: return !!formData.dringlichkeit;
      case 6: return !!(formData.vorname && formData.nachname && formData.email && formData.unternehmen);
      default: return false;
    }
  };

  const transition = (cb: () => void, fwd: boolean) => {
    setForward(fwd);
    setVisible(false);
    setTimeout(() => { cb(); setVisible(true); }, 220);
  };

  const goNext = async () => {
    if (!canProceed()) return;
    if (step === TOTAL_STEPS) {
      setSending(true);
      setSendError(false);
      try {
        const res = await fetch("/api/analyse", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (!res.ok) throw new Error();
        transition(() => setSubmitted(true), true);
      } catch {
        setSendError(true);
      } finally {
        setSending(false);
      }
    } else {
      transition(() => setStep((s) => s + 1), true);
    }
  };

  const goBack = () => {
    if (step > 1) transition(() => setStep((s) => s - 1), false);
  };

  const toggleMulti = (field: "probleme" | "interesse", value: string) => {
    setFormData((prev) => {
      const arr = prev[field] as string[];
      if (arr.includes(value)) return { ...prev, [field]: arr.filter((v) => v !== value) };
      if (field === "probleme" && arr.length >= 3) return prev;
      return { ...prev, [field]: [...arr, value] };
    });
  };

  const progress = submitted ? 100 : (step / TOTAL_STEPS) * 100;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 z-[199] bg-black/60 backdrop-blur-sm transition-opacity duration-500"
        style={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none" }}
      />

      {/* Panel — slides up from bottom */}
      <div
        className="fixed inset-x-0 bottom-0 z-[200] bg-vanta flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transform: isOpen ? "translateY(0)" : "translateY(100%)",
          height: "92svh",
          borderRadius: "16px 16px 0 0",
        }}
      >
        {/* Progress bar */}
        <div className="h-px bg-gridline shrink-0">
          <div
            className="h-full bg-lime transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 md:px-8 shrink-0 border-b border-gridline">
          {submitted ? (
            <span className="font-mono text-[10px] uppercase tracking-widest text-lime">
              Analyse reserviert
            </span>
          ) : (
            <span className="font-mono text-[10px] uppercase tracking-widest text-mute">
              Schritt <span className="text-lime">{step}</span> / {TOTAL_STEPS}
            </span>
          )}
          <button
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center border border-gridline text-mute hover:border-white hover:text-white transition-colors font-mono text-lg leading-none"
            aria-label="Schließen"
          >
            ×
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto overscroll-contain">
          <div className="max-w-3xl mx-auto px-6 py-8 md:px-8 md:py-10">
            {/* Step content */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : `translateY(${forward ? "16px" : "-16px"})`,
                transition: "opacity 0.22s ease, transform 0.22s ease",
              }}
            >
              {submitted ? (
                <SuccessView formData={formData} onClose={onClose} />
              ) : (
                <>
                  {step === 1 && (
                    <StepShell tag="[01 / Branche]" headline="Aus welcher Branche kommen Sie?" sub="Wir passen die Analyse auf Ihre Branche an.">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {BRANCHES.map((b) => (
                          <OptionCard key={b.id} selected={formData.branche === b.id} onClick={() => setFormData((p) => ({ ...p, branche: b.id }))}>
                            <span className="font-mono text-[11px] uppercase tracking-wider leading-snug">{b.label}</span>
                          </OptionCard>
                        ))}
                      </div>
                    </StepShell>
                  )}

                  {step === 2 && (
                    <StepShell tag="[02 / Unternehmen]" headline="Wie groß ist Ihr Unternehmen?" sub="Für die richtige Lösung in Ihrer Liga.">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {GROESSEN.map((g) => (
                          <OptionCard key={g.id} selected={formData.groesse === g.id} onClick={() => setFormData((p) => ({ ...p, groesse: g.id }))}>
                            <span className="block font-bold uppercase text-sm mb-1">{g.label}</span>
                            <span className={`block font-mono text-[10px] uppercase tracking-widest ${formData.groesse === g.id ? "text-vanta/60" : "text-mute"}`}>{g.sub}</span>
                          </OptionCard>
                        ))}
                      </div>
                    </StepShell>
                  )}

                  {step === 3 && (
                    <StepShell tag="[03 / Schmerzen]" headline="Was kostet Sie täglich Zeit?" sub={`Bis zu 3 auswählen. (${formData.probleme.length}/3)`}>
                      <div className="grid grid-cols-2 gap-3">
                        {PROBLEME.map((p) => {
                          const selected = formData.probleme.includes(p);
                          const maxed = formData.probleme.length >= 3 && !selected;
                          return (
                            <OptionCard key={p} selected={selected} onClick={() => toggleMulti("probleme", p)} disabled={maxed}>
                              <div className="flex items-center justify-between gap-2">
                                <span className="font-mono text-[11px] uppercase tracking-wider leading-snug">{p}</span>
                                {selected && <span className="shrink-0 w-4 h-4 bg-vanta flex items-center justify-center text-lime text-[10px]">✓</span>}
                              </div>
                            </OptionCard>
                          );
                        })}
                      </div>
                    </StepShell>
                  )}

                  {step === 4 && (
                    <StepShell tag="[04 / Interesse]" headline="Was suchen Sie konkret?" sub="Mehrfachauswahl möglich.">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {INTERESSEN.map((i) => {
                          const selected = formData.interesse.includes(i.id);
                          return (
                            <OptionCard key={i.id} selected={selected} onClick={() => toggleMulti("interesse", i.id)}>
                              <div className="flex items-center justify-between gap-2">
                                <span className="font-mono text-[11px] uppercase tracking-wider">{i.label}</span>
                                {selected && <span className="shrink-0 w-4 h-4 bg-vanta flex items-center justify-center text-lime text-[10px]">✓</span>}
                              </div>
                            </OptionCard>
                          );
                        })}
                      </div>
                    </StepShell>
                  )}

                  {step === 5 && (
                    <StepShell tag="[05 / Dringlichkeit]" headline="Wie dringend ist das Thema?" sub="Ehrliche Antwort hilft uns, besser vorzubereiten.">
                      <div className="flex flex-col gap-3">
                        {DRINGLICHKEIT.map((d) => (
                          <OptionCard key={d.id} selected={formData.dringlichkeit === d.id} onClick={() => setFormData((p) => ({ ...p, dringlichkeit: d.id }))}>
                            <div className="flex items-start gap-4">
                              <div className={`shrink-0 mt-0.5 w-4 h-4 border flex items-center justify-center ${formData.dringlichkeit === d.id ? "border-vanta bg-vanta" : "border-gridline"}`}>
                                {formData.dringlichkeit === d.id && <span className="text-lime text-[10px] leading-none">✓</span>}
                              </div>
                              <div>
                                <span className="block font-bold uppercase text-sm mb-1">{d.label}</span>
                                <span className={`block font-mono text-[10px] uppercase tracking-widest ${formData.dringlichkeit === d.id ? "text-vanta/60" : "text-mute"}`}>{d.sub}</span>
                              </div>
                            </div>
                          </OptionCard>
                        ))}
                      </div>
                    </StepShell>
                  )}

                  {step === 6 && (
                    <StepShell tag="[06 / Kontakt]" headline="Letzte Station." sub="Damit wir Ihre Potenzialanalyse persönlich vorbereiten können.">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                        <Field label="Vorname *">
                          <input type="text" value={formData.vorname} onChange={(e) => setFormData((p) => ({ ...p, vorname: e.target.value }))} placeholder="Max" className={inputClass} />
                        </Field>
                        <Field label="Nachname *">
                          <input type="text" value={formData.nachname} onChange={(e) => setFormData((p) => ({ ...p, nachname: e.target.value }))} placeholder="Mustermann" className={inputClass} />
                        </Field>
                        <Field label="E-Mail *">
                          <input type="email" value={formData.email} onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))} placeholder="ihre@email.com" className={inputClass} />
                        </Field>
                        <Field label="Unternehmen *">
                          <input type="text" value={formData.unternehmen} onChange={(e) => setFormData((p) => ({ ...p, unternehmen: e.target.value }))} placeholder="Muster GmbH" className={inputClass} />
                        </Field>
                        <div className="sm:col-span-2">
                          <Field label="Telefon (optional)">
                            <input type="tel" value={formData.telefon} onChange={(e) => setFormData((p) => ({ ...p, telefon: e.target.value }))} placeholder="+49 170 123 4567" className={inputClass} />
                          </Field>
                        </div>
                      </div>
                      <p className="mt-4 font-mono text-[9px] text-mute/50 uppercase tracking-widest">
                        * Pflichtfelder · DSGVO-konform · Keine Weitergabe an Dritte
                      </p>
                    </StepShell>
                  )}

                  {/* Navigation */}
                  <div className="flex flex-col gap-3 mt-10">
                    {sendError && (
                      <p className="font-mono text-[10px] uppercase tracking-widest text-red-400 text-right">
                        Fehler beim Senden. Bitte erneut versuchen.
                      </p>
                    )}
                    <div className={`flex items-center ${step > 1 ? "justify-between" : "justify-end"}`}>
                      {step > 1 && (
                        <button onClick={goBack} disabled={sending} className="font-mono text-[10px] uppercase tracking-widest text-mute hover:text-white transition-colors disabled:opacity-30">
                          ← Zurück
                        </button>
                      )}
                      <button
                        onClick={goNext}
                        disabled={!canProceed() || sending}
                        className={`font-mono text-xs uppercase tracking-widest px-8 py-4 border transition-all duration-300 ${
                          canProceed() && !sending
                            ? "bg-lime text-vanta border-lime btn-glitch cursor-pointer"
                            : "border-gridline text-mute cursor-not-allowed opacity-30"
                        }`}
                      >
                        {sending ? "Wird gesendet …" : step === TOTAL_STEPS ? "Analyse starten →" : "Weiter →"}
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ---- Primitives ----

const inputClass =
  "bg-transparent border-b border-gridline py-3 px-1 text-white focus:outline-none focus:border-lime transition-colors placeholder:text-mute/40 text-sm w-full font-sans rounded-none";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-[10px] uppercase tracking-widest text-mute">{label}</label>
      {children}
    </div>
  );
}

function StepShell({ tag, headline, sub, children }: { tag: string; headline: string; sub?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-7 md:gap-9">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-widest mb-4">
          <span className="brutalist-marker text-vanta">{tag}</span>
        </p>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-3">
          {headline}
        </h2>
        {sub && <p className="font-mono text-[10px] uppercase tracking-widest text-mute">{sub}</p>}
      </div>
      {children}
    </div>
  );
}

function OptionCard({ selected, onClick, children, disabled = false }: { selected: boolean; onClick: () => void; children: React.ReactNode; disabled?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`p-4 md:p-5 border text-left transition-all duration-300 ${
        selected
          ? "bg-lime border-lime text-vanta"
          : disabled
          ? "border-gridline/30 text-mute/40 cursor-not-allowed"
          : "border-gridline text-white hover:border-lime/50 hover:bg-lime/5 cursor-pointer"
      }`}
    >
      {children}
    </button>
  );
}

// ---- Success ----

function SuccessView({ formData, onClose }: { formData: FormData; onClose: () => void }) {
  const brancheLabel = BRANCHES.find((b) => b.id === formData.branche)?.label ?? "Ihrem Unternehmen";
  const topProblem = formData.probleme[0] ?? "manuelle Prozesse";

  return (
    <div className="flex flex-col gap-8 md:gap-10">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-widest mb-4">
          <span className="brutalist-marker text-vanta">[System: Analyse bereit]</span>
        </p>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
          {formData.vorname}, Ihre<br />
          <span className="text-lime">Potenzialanalyse</span><br />
          ist reserviert.
        </h2>
      </div>

      <div className="border-l-2 border-lime pl-5 py-1">
        <p className="text-sm md:text-base text-white/75 leading-relaxed">
          Wir haben Ihre Angaben für <span className="text-white font-medium">{brancheLabel}</span> analysiert.
          Das Thema <span className="text-lime font-medium">„{topProblem}"</span> ist ein klassischer Effizienzhebel,
          den wir mit KI direkt angehen können.
        </p>
      </div>

      <div className="border border-gridline divide-y divide-gridline">
        <p className="font-mono text-[10px] uppercase tracking-widest text-mute px-6 pt-5 pb-4">Was jetzt passiert</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gridline">
          {[
            { num: "01", title: "Termin buchen", desc: "Wählen Sie unten einen freien Slot für Ihr 30-Minuten-Gespräch." },
            { num: "02", title: "Analyse-Call", desc: "Wir zeigen Ihnen ehrlich, wo Ihre größten Potenziale liegen." },
            { num: "03", title: "Ihre Roadmap", desc: "Konkreter Aktionsplan – kostenlos und unverbindlich." },
          ].map((item) => (
            <div key={item.num} className="flex flex-col gap-2 p-6">
              <span className="font-mono text-lime text-2xl font-bold">{item.num}</span>
              <span className="font-black uppercase text-sm text-white">{item.title}</span>
              <span className="text-xs text-mute leading-relaxed">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glitch inline-flex items-center justify-center gap-3 bg-lime text-vanta font-mono font-bold uppercase py-5 px-10 text-sm border border-lime"
        >
          Jetzt Termin buchen →
        </a>
        <button
          onClick={onClose}
          className="inline-flex items-center justify-center border border-gridline text-mute font-mono uppercase py-5 px-8 text-[10px] tracking-widest hover:border-white hover:text-white transition-colors"
        >
          Zurück zur Website
        </button>
      </div>

      <p className="font-mono text-[9px] text-mute/40 uppercase tracking-widest">
        Ihre Daten werden DSGVO-konform verarbeitet · Kein Spam · Keine Weitergabe an Dritte
      </p>
    </div>
  );
}
