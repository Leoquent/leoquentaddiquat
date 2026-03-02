# Leoquent & Addiquat: Landingpage Restrukturierung (Cross-Agent Todo)

Diese Todo-Liste spiegelt den aktuellen `implementation_plan.md` wider und ist im Root-Verzeichnis abgelegt, damit auch externe Agenten (Cursor, GitHub Copilot etc.) darauf zugreifen können.

- [x] **1. HeroSection Update (Mission & Vision)**
  - [x] Ersetze den "Manifest"-Text in der linken Sidebar der `HeroSection.tsx` durch "Mission" & "Vision".
  - [x] Füge den Text für die Mission ein: "Unsere Mission ist es, Ihnen die Zeit für das Wesentliche zurückzugeben. Durch die Verbindung..."
  - [x] Füge den Text für die Vision ein: "Wir etablieren den neuen Standard für das intelligente Betriebssystem..."
  - [x] Anker-ID `#start` oder `#mission` prüfen.

- [x] **2. Neues Component: Das Manifest (`Manifesto.tsx`)**
  - [x] Erstelle neue Datei für das "Elevator Pitch"-Manifest ("Die AGENTur für den Mittelstand").
  - [x] Füge einen SVG-Platzhalter ein: "Einzelnes, sanft pulsierendes Hexagon".
  - [x] Anker-ID `#manifest` hinzufügen.

- [x] **3. Neues Component: Die autonomen Agenten (`AutonomousAgents.tsx`)**
  - [x] Erstelle neues Sticky-Stack Component ("Scrolling Archive").
  - [x] Skizziere 3 Beispiel-Agenten (Angebots-Agent, Dokumenten-Agent, Termin-Agent) als Scrolling-Cards.
  - [x] Füge einen SVG-Platzhalter ein: "Ineinandergreifende, sich aufbauende Waben".
  - [x] Anker-ID `#agenten` hinzufügen.

- [x] **4. Neues Component: Die Symbiose / Über uns (`SymbiosisTeam.tsx`)**
  - [x] Erstelle neues Team-Component für Leonid & Admir (Architect of Intent vs. Guardian of Execution).
  - [x] Füge einen SVG-Platzhalter ein: "Zwei Hexagone, die sich in der Mitte treffen".
  - [x] Anker-ID `#symbiose` hinzufügen.

- [x] **5. Page Struktur updaten (`page.tsx`)**
  - [x] Importiere die neuen Komponenten (`Manifesto`, `AutonomousAgents`, `SymbiosisTeam`).
  - [x] Setze alles im Haupt-Layout in die richtige Reihenfolge.

- [x] **6. Navigation & Header updaten (`Header.tsx`)**
  - [x] Aktualisiere die Navigation-Links im Menü.
  - [x] Überprüfe das Smooth-Scrolling für alle Anchor-Links.

- [x] **7. Finale Überprüfung & Feinschliff**
  - [x] Responsive Layout auf mobilen Geräten prüfen.
  - [x] Farbschema überprüfen (Acid Lime Green `#CDFF00`, Schwarz, Weiß).
