import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const BRANCH_LABELS: Record<string, string> = {
  handwerk: "Handwerk & Bau",
  handel: "Handel & E-Commerce",
  gesundheit: "Gesundheitswesen",
  logistik: "Logistik & Transport",
  immobilien: "Immobilien",
  bildung: "Bildung",
  marketing: "Marketing & Social Media",
  andere: "Andere Branche",
};

const GROESSE_LABELS: Record<string, string> = {
  solo: "1 Person (Solo)",
  klein: "2–10 Mitarbeiter",
  mittel: "11–50 Mitarbeiter",
  gross: "51+ Mitarbeiter",
};

const INTERESSE_LABELS: Record<string, string> = {
  chatbot: "KI-Chatbot für die Website",
  automation: "Prozessautomatisierung",
  software: "Individuelle Software / CRM",
  strategie: "KI-Strategie & Beratung",
  integration: "System-Integration",
  alles: "Alles / Noch nicht sicher",
};

const DRINGLICHKEIT_LABELS: Record<string, string> = {
  sofort: "Sofort (verliert täglich Zeit/Geld)",
  bald: "In 1–3 Monaten",
  erkunden: "Erst erkunden",
};

export async function POST(req: NextRequest) {
  const data = await req.json();

  const {
    vorname, nachname, email, unternehmen, telefon,
    branche, groesse, probleme, interesse, dringlichkeit,
  } = data;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const problemeListe = (probleme as string[]).map((p: string) => `• ${p}`).join("\n");
  const interesseListe = (interesse as string[]).map((id: string) => `• ${INTERESSE_LABELS[id] ?? id}`).join("\n");

  const notificationHtml = `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8" /><style>
  body { font-family: Arial, sans-serif; background: #050505; color: #EAEAEA; margin: 0; padding: 0; }
  .wrapper { max-width: 600px; margin: 0 auto; padding: 40px 24px; }
  .badge { display: inline-block; background: #CCFF00; color: #050505; font-size: 10px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; padding: 4px 10px; margin-bottom: 24px; }
  h1 { font-size: 28px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.03em; margin: 0 0 8px; color: #EAEAEA; }
  .sub { font-size: 13px; color: #666; margin-bottom: 32px; }
  .section { border: 1px solid #1A1A1A; padding: 20px 24px; margin-bottom: 16px; }
  .label { font-size: 10px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.15em; color: #666; margin-bottom: 4px; }
  .value { font-size: 15px; color: #EAEAEA; font-weight: 600; }
  .list { font-size: 13px; color: #EAEAEA; line-height: 1.8; }
  .highlight { color: #CCFF00; }
  .cta { display: inline-block; background: #CCFF00; color: #050505; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; padding: 14px 28px; text-decoration: none; margin-top: 24px; }
  .footer { margin-top: 40px; font-size: 11px; color: #444; font-family: monospace; text-transform: uppercase; letter-spacing: 0.1em; }
</style></head>
<body>
<div class="wrapper">
  <div class="badge">Neue Lead-Anfrage</div>
  <h1>${vorname} ${nachname}</h1>
  <p class="sub">${unternehmen}${telefon ? ` · ${telefon}` : ""}</p>

  <div class="section">
    <div class="label">Kontakt</div>
    <div class="value"><a href="mailto:${email}" style="color:#CCFF00;text-decoration:none;">${email}</a></div>
    ${telefon ? `<div class="value" style="margin-top:4px;">${telefon}</div>` : ""}
  </div>

  <div class="section">
    <div class="label">Branche</div>
    <div class="value">${BRANCH_LABELS[branche] ?? branche}</div>
  </div>

  <div class="section">
    <div class="label">Unternehmensgröße</div>
    <div class="value">${GROESSE_LABELS[groesse] ?? groesse}</div>
  </div>

  <div class="section">
    <div class="label">Größte Zeitfresser</div>
    <div class="list highlight">${(probleme as string[]).join(" · ")}</div>
  </div>

  <div class="section">
    <div class="label">Gesuchte Lösung</div>
    <div class="list">${(interesse as string[]).map((id: string) => INTERESSE_LABELS[id] ?? id).join(" · ")}</div>
  </div>

  <div class="section">
    <div class="label">Dringlichkeit</div>
    <div class="value">${DRINGLICHKEIT_LABELS[dringlichkeit] ?? dringlichkeit}</div>
  </div>

  <a href="mailto:${email}?subject=Ihre Potenzialanalyse – Leoquent %26 Addequat" class="cta">
    Jetzt antworten →
  </a>

  <div class="footer">leoquent &amp; addequat · Automatische Benachrichtigung</div>
</div>
</body>
</html>`;

  const confirmationHtml = `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8" /><style>
  body { font-family: Arial, sans-serif; background: #050505; color: #EAEAEA; margin: 0; padding: 0; }
  .wrapper { max-width: 600px; margin: 0 auto; padding: 40px 24px; }
  .badge { display: inline-block; background: #CCFF00; color: #050505; font-size: 10px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; padding: 4px 10px; margin-bottom: 24px; }
  h1 { font-size: 28px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.03em; margin: 0 0 8px; color: #EAEAEA; }
  p { font-size: 14px; color: #aaa; line-height: 1.7; }
  .steps { border: 1px solid #1A1A1A; padding: 24px; margin: 24px 0; }
  .step { display: flex; gap: 16px; margin-bottom: 16px; }
  .step:last-child { margin-bottom: 0; }
  .num { font-family: monospace; color: #CCFF00; font-size: 18px; font-weight: 700; min-width: 28px; }
  .step-text .title { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #EAEAEA; margin-bottom: 2px; }
  .step-text .desc { font-size: 12px; color: #666; }
  .cta { display: inline-block; background: #CCFF00; color: #050505; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; padding: 14px 28px; text-decoration: none; margin-top: 8px; }
  .footer { margin-top: 40px; font-size: 11px; color: #333; font-family: monospace; text-transform: uppercase; letter-spacing: 0.1em; }
</style></head>
<body>
<div class="wrapper">
  <div class="badge">Analyse reserviert</div>
  <h1>${vorname},<br />wir melden uns.</h1>
  <p>Vielen Dank für Ihre Anfrage. Wir haben Ihre Angaben erhalten und werden Ihre individuelle Potenzialanalyse vorbereiten. Der nächste Schritt liegt bei Ihnen:</p>

  <div class="steps">
    <div class="step">
      <span class="num">01</span>
      <div class="step-text">
        <div class="title">Termin buchen</div>
        <div class="desc">Wählen Sie einen freien 30-Minuten-Slot über den Button unten.</div>
      </div>
    </div>
    <div class="step">
      <span class="num">02</span>
      <div class="step-text">
        <div class="title">Kostenloser Analyse-Call</div>
        <div class="desc">Wir zeigen Ihnen ehrlich, wo Ihre größten Potenziale liegen.</div>
      </div>
    </div>
    <div class="step">
      <span class="num">03</span>
      <div class="step-text">
        <div class="title">Ihre Roadmap</div>
        <div class="desc">Sie erhalten einen konkreten Aktionsplan – unverbindlich und kostenlos.</div>
      </div>
    </div>
  </div>

  <a href="https://calendly.com/ofxffm/30min" class="cta">Jetzt Termin buchen →</a>

  <div class="footer">
    leoquent &amp; addequat · KI-Systeme, die Ihre Arbeit machen.<br />
    DSGVO-konform · Hosting in Deutschland · Keine Weitergabe an Dritte
  </div>
</div>
</body>
</html>`;

  try {
    await Promise.all([
      // Notification to the team
      transporter.sendMail({
        from: `"L&A Lead-System" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_NOTIFY_TO ?? process.env.GMAIL_USER,
        subject: `🔔 Neue Anfrage – ${vorname} ${nachname} | ${unternehmen}`,
        html: notificationHtml,
        text: [
          `NEUE LEAD-ANFRAGE`,
          `Name: ${vorname} ${nachname}`,
          `E-Mail: ${email}`,
          `Telefon: ${telefon || "–"}`,
          `Unternehmen: ${unternehmen}`,
          `Branche: ${BRANCH_LABELS[branche] ?? branche}`,
          `Größe: ${GROESSE_LABELS[groesse] ?? groesse}`,
          `Schmerzen: ${problemeListe}`,
          `Interesse: ${interesseListe}`,
          `Dringlichkeit: ${DRINGLICHKEIT_LABELS[dringlichkeit] ?? dringlichkeit}`,
        ].join("\n"),
      }),
      // Confirmation to the lead
      transporter.sendMail({
        from: `"Leoquent & Addequat" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: `Ihre Potenzialanalyse ist reserviert – Leoquent & Addequat`,
        html: confirmationHtml,
        text: `Hallo ${vorname},\n\nvielen Dank für Ihre Anfrage. Buchen Sie jetzt Ihren Termin:\nhttps://calendly.com/ofxffm/30min\n\nLeoquent & Addequat`,
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 500 });
  }
}
