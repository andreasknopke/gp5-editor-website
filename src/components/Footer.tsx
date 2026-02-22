export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-main">
          <div className="footer-brand">
            <span className="logo-icon">🎸</span>
            <span className="logo-text">GP5 Plugin</span>
            <p className="footer-tagline">
              Guitar Pro VST3 Editor – Open Source, kostenlos, von Musikern für Musiker.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#download">Download</a></li>
                <li><a href="#installation">Installation</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#community">Community</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Projekt</h4>
              <ul>
                <li><a href="https://github.com/andreasknopke/GP5-Plugin" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
                <li><a href="https://github.com/andreasknopke/GP5-Plugin/releases" target="_blank" rel="noopener noreferrer">Releases</a></li>
                <li><a href="https://github.com/andreasknopke/GP5-Plugin/discussions" target="_blank" rel="noopener noreferrer">Discussions</a></li>
                <li><a href="https://github.com/andreasknopke/GP5-Plugin/issues" target="_blank" rel="noopener noreferrer">Issues</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Technologie</h4>
              <ul>
                <li><a href="https://juce.com/" target="_blank" rel="noopener noreferrer">JUCE Framework</a></li>
                <li><a href="https://github.com/spotify/basic-pitch" target="_blank" rel="noopener noreferrer">BasicPitch (Spotify)</a></li>
                <li><a href="https://onnxruntime.ai/" target="_blank" rel="noopener noreferrer">ONNX Runtime</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} AR-Sounds · GP5 Plugin · MIT License</p>
        </div>
      </div>
    </footer>
  )
}