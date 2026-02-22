export default function Download() {
  return (
    <section className="download" id="download">
      <div className="container">
        <h2 className="section-title">Download</h2>
        <p className="section-subtitle">Kostenlos und Open Source – wähle deine Installationsmethode</p>

        <div className="download-grid">
          <div className="download-card download-card-primary">
            <div className="download-card-badge">Empfohlen</div>
            <h3 className="download-card-title">⬇ Windows Installer</h3>
            <p className="download-card-desc">
              Lade den fertigen Installer herunter. Er kopiert das VST3 Plugin automatisch
              in den richtigen Ordner.
            </p>
            <ul className="download-card-list">
              <li>✓ Automatische Installation</li>
              <li>✓ Kein Build nötig</li>
              <li>✓ Sofort einsatzbereit</li>
            </ul>
            <a
              href="https://github.com/andreasknopke/GP5-Plugin/releases/latest"
              className="btn btn-primary btn-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Neueste Version herunterladen
            </a>
            <p className="download-card-version">
              Aktuelle Version: <strong>v1.1.0</strong> (Beta)
            </p>
            <div className="download-card-notice">
              <strong>⚠️ Hinweis:</strong> Der Installer ist nicht mit einem Code-Signing-Zertifikat signiert.
              Windows SmartScreen zeigt daher beim Start eine Warnung an. Klicke auf
              {" "}<em>„Weitere Informationen"</em> → <em>„Trotzdem ausführen"</em>, um die Installation fortzusetzen.
              Das Plugin ist Open Source – du kannst den gesamten Quellcode auf GitHub einsehen.
            </div>
          </div>

          <div className="download-card">
            <h3 className="download-card-title">🛠️ Source Code</h3>
            <p className="download-card-desc">
              Für Entwickler, die das Plugin selbst bauen oder erweitern möchten.
              Erfordert JUCE 7.x, CMake 3.22+ und einen C++17 Compiler.
            </p>
            <div className="code-block">
              <code>
                git clone https://github.com/andreasknopke/GP5-Plugin.git<br />
                cd GP5-Plugin<br />
                mkdir build && cd build<br />
                cmake ..<br />
                cmake --build . --config Release
              </code>
            </div>
            <a
              href="https://github.com/andreasknopke/GP5-Plugin"
              className="btn btn-secondary btn-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository auf GitHub
            </a>
          </div>
        </div>

        <div className="download-requirements">
          <h4>Systemanforderungen</h4>
          <div className="requirements-grid">
            <div className="requirement">
              <strong>Betriebssystem</strong>
              <span>Windows 10+ (64-bit)</span>
            </div>
            <div className="requirement">
              <strong>DAW</strong>
              <span>Jede DAW mit VST3 Support</span>
            </div>
            <div className="requirement">
              <strong>Empfohlen</strong>
              <span>Cubase (einfache Sidechain-Konfiguration)</span>
            </div>
            <div className="requirement">
              <strong>Lizenz</strong>
              <span>MIT – kostenlos und Open Source</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}