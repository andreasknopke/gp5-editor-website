import { useState, useEffect, useCallback } from "react"

const slides = [
  {
    src: "/screenshots/player.png",
    alt: "GP5 Plugin – Player Mode mit geladener Tablatur",
    title: "Player Mode",
    description: "Lade Guitar Pro Dateien und spiele sie mit interaktiver Tablatur-Anzeige, Chord Names und Multi-Track Support.",
  },
  {
    src: "/screenshots/editor.png",
    alt: "GP5 Plugin – Note Editing mit Fret/String Auswahl",
    title: "Note Editing",
    description: "Klicke auf Noten, um alternative String/Fret-Positionen auszuwählen. Änderungen bleiben persistent.",
  },
  {
    src: "/screenshots/export.png",
    alt: "GP5 Plugin – Export Recording als GP5 Datei",
    title: "GP5 Export",
    description: "Exportiere deine Aufnahmen als Guitar Pro 5 Dateien mit Song-Titel, Track-Namen und Instrument-Auswahl.",
  },
]

export default function Screenshots() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, next])

  const handleManualNav = (action: () => void) => {
    setIsAutoPlaying(false)
    action()
  }

  return (
    <section className="screenshots" id="screenshots">
      <div className="container">
        <h2 className="section-title">So sieht's aus</h2>
        <p className="section-subtitle">Player Mode, Note Editing und GP5 Export – alles direkt in deiner DAW</p>

        <div className="slideshow">
          <button
            className="slide-btn slide-btn-prev"
            onClick={() => handleManualNav(prev)}
            aria-label="Vorheriges Bild"
          >
            ‹
          </button>

          <div className="slide-container">
            <div className="slide-image-wrapper">
              <img
                src={slides[current].src}
                alt={slides[current].alt}
                className="slide-image"
              />
            </div>
            <div className="slide-info">
              <h3 className="slide-title">{slides[current].title}</h3>
              <p className="slide-description">{slides[current].description}</p>
            </div>
          </div>

          <button
            className="slide-btn slide-btn-next"
            onClick={() => handleManualNav(next)}
            aria-label="Nächstes Bild"
          >
            ›
          </button>
        </div>

        <div className="slide-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`slide-dot ${i === current ? "slide-dot-active" : ""}`}
              onClick={() => handleManualNav(() => setCurrent(i))}
              aria-label={`Bild ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
