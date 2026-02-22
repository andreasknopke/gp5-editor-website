export default function Community() {
  return (
    <section className="community" id="community">
      <div className="container">
        <h2 className="section-title">Community & Forum</h2>
        <p className="section-subtitle">Tausche dich mit anderen Nutzern aus, stelle Fragen und teile deine Erfahrungen</p>

        <div className="community-grid">
          <a
            href="https://github.com/andreasknopke/GP5-Plugin/discussions"
            className="community-card community-card-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="community-icon">💬</span>
            <h3>Diskussionen / Forum</h3>
            <p>
              Unser Hauptforum auf GitHub Discussions. Stelle Fragen, teile Tipps,
              schlage Features vor oder zeige was du mit dem Plugin gemacht hast.
            </p>
            <span className="community-link">Zum Forum →</span>
          </a>

          <a
            href="https://github.com/andreasknopke/GP5-Plugin/issues"
            className="community-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="community-icon">🐛</span>
            <h3>Bug Reports</h3>
            <p>
              Hast du einen Fehler gefunden? Erstelle ein Issue auf GitHub mit einer
              Beschreibung und wir kümmern uns darum.
            </p>
            <span className="community-link">Issue erstellen →</span>
          </a>

          <a
            href="https://github.com/andreasknopke/GP5-Plugin/pulls"
            className="community-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="community-icon">🔧</span>
            <h3>Beitragen</h3>
            <p>
              Du möchtest zum Code beitragen? Forke das Repository und erstelle
              einen Pull Request. Contributions sind immer willkommen!
            </p>
            <span className="community-link">Pull Requests →</span>
          </a>

          <a
            href="https://github.com/andreasknopke/GP5-Plugin/releases"
            className="community-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="community-icon">📋</span>
            <h3>Changelog</h3>
            <p>
              Alle Versionen und Änderungen im Überblick. Schau nach, was in den
              neuesten Releases hinzugekommen ist.
            </p>
            <span className="community-link">Releases ansehen →</span>
          </a>
        </div>

        <div className="community-cta">
          <h3>🎸 Zeig was du gemacht hast!</h3>
          <p>
            Hast du eine coole Aufnahme mit dem GP5 Plugin gemacht oder einen interessanten Workflow entdeckt?
            Teile es in den <a href="https://github.com/andreasknopke/GP5-Plugin/discussions" target="_blank" rel="noopener noreferrer">Discussions</a> – die Community freut sich!
          </p>
        </div>
      </div>
    </section>
  )
}
