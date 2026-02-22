const playerSteps = [
  {
    step: 1,
    title: "Plugin installieren",
    description: "Lade den Installer von der GitHub Releases Seite herunter und führe ihn aus. Die .vst3 Datei wird automatisch installiert.",
  },
  {
    step: 2,
    title: "DAW neu starten",
    description: 'Starte deine DAW neu und suche "GP5" im VST3 Plugin-Browser. Lade das Plugin als Instrument auf eine Spur.',
  },
  {
    step: 3,
    title: "MIDI Output routen",
    description: "Verbinde den MIDI-Output des Plugins mit einem Gitarren-Sampler (z.B. HALion, Kontakt, Ample Guitar).",
  },
  {
    step: 4,
    title: "Guitar Pro Datei laden",
    description: 'Klicke auf "Load GuitarPro File" im Plugin und wähle eine .gp3/.gp4/.gp5/.gp7/.gp8 oder .ptb Datei aus.',
  },
  {
    step: 5,
    title: "Spielen & Navigieren",
    description: "Wähle den gewünschten Track, aktiviere Auto-Scroll und drücke Play in deiner DAW. Klicke auf die Tablatur zum Navigieren.",
  },
]

const recordingSteps = [
  {
    step: 1,
    title: "Sidechain einrichten",
    description: "Erstelle eine Audio-Spur mit deiner Gitarre und route sie als Sidechain-Input zum GP5 Plugin.",
  },
  {
    step: 2,
    title: "Aufnahme starten",
    description: "Aktiviere den Recording-Modus im Plugin, arme die Spur und drücke Record + Play in der DAW.",
  },
  {
    step: 3,
    title: "Gitarre spielen",
    description: "Spiele dein Instrument – BasicPitch transkribiert das Audio automatisch in Tablatur mit polyphone Pitch-Erkennung.",
  },
  {
    step: 4,
    title: "Editieren & Exportieren",
    description: "Bearbeite die Transkription: ändere Noten-Positionen, lösche Pausen, passe Fret-Präferenzen an. Dann exportiere als GP5.",
  },
]

export default function Installation() {
  return (
    <section className="installation" id="installation">
      <div className="container">
        <h2 className="section-title">Installation & Nutzung</h2>
        <p className="section-subtitle">In wenigen Minuten einsatzbereit</p>

        <h3 className="install-mode-title">🎵 Player Mode – Guitar Pro Dateien laden</h3>
        <div className="steps">
          {playerSteps.map((s) => (
            <div key={s.step} className="step">
              <div className="step-number">{s.step}</div>
              <div className="step-content">
                <h4 className="step-title">{s.title}</h4>
                <p className="step-description">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="install-mode-title">🎙️ Recording Mode – Audio-to-Tab</h3>
        <div className="steps">
          {recordingSteps.map((s) => (
            <div key={s.step} className="step">
              <div className="step-number">{s.step}</div>
              <div className="step-content">
                <h4 className="step-title">{s.title}</h4>
                <p className="step-description">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="sampler-tip">
          <h4>💡 Tipp: Sampler Konfiguration</h4>
          <p>
            Für beste Ergebnisse mit Pitch Bends: Setze den <strong>Pitch Bend Range auf ±2 Halbtöne</strong> in
            deinem Sampler. Aktiviere <strong>Legato/Mono-Modus</strong> für realistische Hammer-Ons und
            konfiguriere <strong>Portamento</strong> für Slide-Effekte.
          </p>
        </div>
      </div>
    </section>
  )
}