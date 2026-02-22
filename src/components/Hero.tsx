export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-badge">Open Source · VST3 · MIT License</div>
        <h1 className="hero-title">
          Guitar Pro Dateien direkt in deiner DAW
        </h1>
        <p className="hero-description">
          Der <strong>GP5 VST Editor</strong> ist ein JUCE-basiertes VST3 Instrument, das
          Guitar Pro Dateien (.gp3, .gp4, .gp5, .gp7, .gp8) und Power Tab Dateien (.ptb) direkt in deiner DAW lädt und
          als interaktive Tablatur anzeigt – mit realistischem MIDI Output für Gitarren-Sampler.
          Zusätzlich bietet er <strong>Audio-to-Tab Transkription</strong> über ein neuronales Netzwerk
          (BasicPitch) und umfassende Editierfunktionen.
        </p>
        <div className="hero-actions">
          <a href="#download" className="btn btn-primary">
            ⬇ Download v1.2.0
          </a>
          <a
            href="https://github.com/andreasknopke/GP5-Plugin"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-value">6</span>
            <span className="stat-label">GP Formate</span>
          </div>
          <div className="stat">
            <span className="stat-value">12</span>
            <span className="stat-label">Releases</span>
          </div>
          <div className="stat">
            <span className="stat-value">2600+</span>
            <span className="stat-label">Chord Fingerings</span>
          </div>
          <div className="stat">
            <span className="stat-value">MIT</span>
            <span className="stat-label">Lizenz</span>
          </div>
        </div>
      </div>
    </section>
  )
}