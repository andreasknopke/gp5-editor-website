const playerFeatures = [
  {
    icon: "📂",
    title: "Mehrere Dateiformate",
    description: "Unterstützt GP3, GP4, GP5, GP7, GP8 und Power Tab (.ptb) Dateien – lade Guitar Pro und Power Tab Dateien direkt ins Plugin.",
  },
  {
    icon: "🔀",
    title: "PTB zu GP5 Konverter",
    description: "Lade Power Tab Dateien (.ptb) und exportiere sie als Guitar Pro 5 Format – mit voller Unterstützung für Bends, Slides, Harmonics und mehr.",
  },
  {
    icon: "🎵",
    title: "Interaktive Tablatur",
    description: "Professionelle Tablatur-Anzeige mit Chord Names, Noten, Effects und Rhythm Notation mit korrekten Beam-Gruppen.",
  },
  {
    icon: "🎚️",
    title: "Multi-Track Support",
    description: "Wechsle zwischen Tracks mit individuellen Einstellungen: MIDI-Kanal, Volume, Pan, Mute und Solo.",
  },
  {
    icon: "🔍",
    title: "Zoom & Click-to-Seek",
    description: "Passe die Anzeigegröße an und klicke auf die Tablatur, um direkt zu einer Position zu springen.",
  },
  {
    icon: "🖐️",
    title: "Live Finger Display",
    description: "Visuelle Fingering-Vorschläge basierend auf einer Datenbank mit 2600+ Chord-Fingerings und ergonomischem Kostenmodell.",
  },
  {
    icon: "🔄",
    title: "DAW Synchronisation",
    description: "Automatisches Scrolling und Positionssync während der Wiedergabe – integriert sich nahtlos in deinen Workflow.",
  },
]

const editorFeatures = [
  {
    icon: "🧠",
    title: "Audio-to-Tab Transkription",
    description: "Nimm Gitarre über Sidechain auf – BasicPitch (neuronales Netzwerk) transkribiert polyphon Audio zu Tablatur.",
  },
  {
    icon: "🎹",
    title: "Live MIDI Input",
    description: "Echtzeit-Anzeige von gespielten Noten auf der Tablatur mit automatischer Chord-Erkennung.",
  },
  {
    icon: "✏️",
    title: "Vollständiges Editing",
    description: "Klicke auf Noten zum Ändern von String/Fret-Positionen. Lösche Pausen, ändere Dauern – alles persistent.",
  },
  {
    icon: "💾",
    title: "GP5 Export",
    description: "Exportiere deine Aufnahmen als Guitar Pro 5 Dateien mit Metadaten – kompatibel mit Guitar Pro und Soundslice.",
  },
]

const midiFeatures = [
  {
    icon: "🎸",
    title: "Pitch Bend Interpolation",
    description: "Echtzeit-Pitch-Bend für authentisches Gitarrenspiel: Normal Bend, Bend+Release, Pre-Bend und Release.",
  },
  {
    icon: "🎼",
    title: "Expressive MIDI Messages",
    description: "CC68 (Legato/Hammer-On), CC65 (Portamento/Slide), CC1 (Vibrato) – für realistische Artikulation.",
  },
]

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">Features</h2>
        <p className="section-subtitle">Alles was du brauchst, um Guitar Pro Dateien in deiner DAW zu nutzen</p>

        <h3 className="features-category">🎵 Player Mode</h3>
        <div className="features-grid">
          {playerFeatures.map((feature) => (
            <div key={feature.title} className="feature-card">
              <span className="feature-icon">{feature.icon}</span>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <h3 className="features-category">✏️ Editor & Recording Mode</h3>
        <div className="features-grid">
          {editorFeatures.map((feature) => (
            <div key={feature.title} className="feature-card">
              <span className="feature-icon">{feature.icon}</span>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <h3 className="features-category">🎹 MIDI Output</h3>
        <div className="features-grid features-grid-half">
          {midiFeatures.map((feature) => (
            <div key={feature.title} className="feature-card">
              <span className="feature-icon">{feature.icon}</span>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}