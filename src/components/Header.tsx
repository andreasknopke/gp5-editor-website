import { useState } from "react"
import Navigation from "./Navigation"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="logo">
          <span className="logo-icon">🎸</span>
          <span className="logo-text">GP5 Plugin</span>
        </a>
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Navigation isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </header>
  )
}