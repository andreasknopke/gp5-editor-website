import { useState } from "react"

const faqs = [
  {
    q: "Welche DAWs werden unterstützt?",
    a: "Alle DAWs mit VST3 Support funktionieren. Cubase wird besonders empfohlen, da die Sidechain-Konfiguration für Audio-to-Tab dort am einfachsten ist. Reaper, Studio One, FL Studio und andere VST3-kompatible DAWs funktionieren ebenfalls.",
  },
  {
    q: "Welche Dateiformate kann das Plugin laden?",
    a: "Das Plugin unterstützt GP3, GP4, GP5, GP7, GP8 und Power Tab (.ptb) Dateien. GP7/GP8 Dateien (.gp) werden über den eingebetteten GPIF XML-Container geparst. Power Tab Dateien können geladen und als GP5 exportiert werden.",
  },
  {
    q: "Funktioniert das Plugin auf macOS oder Linux?",
    a: "Aktuell gibt es einen fertigen Installer nur für Windows. Da das Plugin auf JUCE basiert, ist ein Build für macOS (Xcode 12+) und Linux (GCC 9+) prinzipiell möglich. Du kannst den Source Code klonen und selbst kompilieren.",
  },
  {
    q: "Wie genau ist die Audio-to-Tab Transkription?",
    a: "Das Plugin nutzt BasicPitch, ein polyphones Pitch-Detection Netzwerk von Spotify. Es erkennt mehrere gleichzeitige Noten, filtert intelligente Bends (ignoriert Intonation-Artefakte) und erkennt Vibrato aus dem Audio-Signal.",
  },
  {
    q: "Kann ich die transkribierten Noten bearbeiten?",
    a: "Ja! Klicke auf jede Note, um alternative String/Fret-Kombinationen auszuwählen. Lösche oder ändere Pausen per Rechtsklick. Alle Änderungen bleiben erhalten – auch beim Schließen und Öffnen des Plugin-Fensters und beim GP5-Export.",
  },
  {
    q: "Welcher Sampler eignet sich am besten?",
    a: "Jeder Gitarren-Sampler mit VST3/MIDI-Input funktioniert: HALion, Kontakt, Ample Guitar, etc. Wichtig: Stelle den Pitch Bend Range auf ±2 Halbtöne und aktiviere Legato-Modus für Hammer-Ons/Pull-Offs.",
  },
  {
    q: "Ist das Plugin kostenlos?",
    a: "Ja, das GP5 Plugin ist vollständig kostenlos und Open Source unter der MIT Lizenz. Du kannst es frei verwenden, modifizieren und weiterverteilen.",
  },
  {
    q: "Wie kann ich zum Projekt beitragen?",
    a: "Contributions sind willkommen! Erstelle einen Pull Request oder öffne ein Issue auf GitHub für Vorschläge und Bug Reports. Du kannst auch im Community-Forum unten Ideen diskutieren.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="faq" id="faq">
      <div className="container">
        <h2 className="section-title">Häufige Fragen</h2>
        <p className="section-subtitle">Antworten auf die wichtigsten Fragen zum GP5 Plugin</p>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? "faq-item-open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.q}</span>
                <span className="faq-toggle">{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}