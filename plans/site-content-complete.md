# GP5 Plugin Website - Vollständiger Inhalt

## Navigation Links
- Home
- Features
- Download
- Installation
- FAQ / Hinweise


## Hero Section Inhalte

### Hauptbeschreibung (2-3 Sätze)
"Der GP5 VST Editor ist ein JUCE-basiertes VST3 Instrument für DAWs. Er lädt und spielt Guitar Pro Dateien (.gp3, .gp4, .gp5, .gp7, .gp8) direkt im DAW mit realistischem MIDI Output für Gitarren-Samplers. Zusätzlich bietet er Audio-to-Tab Transkription (über BasicPitch Neural Network), MIDI zu GP5 Konvertierung und umfassende Editierfunktionen."

### Untertitel
"Für Musiker:innen – zwischen Projekt und Instrument"


## Features Liste

```tsx
const features = [
  {
    title: "Mehrere Dateiformate",
    description: "Support für GP3, GP4, GP5, GP7 und GP8 Dateien"
  },
  {
    title: "Tablatur-Anzeige",
    description: "Professionelle Anzeige mit Chord Names, Notes und Effects"
  },
  {
    title: "Mehrere Tracks",
    description: "Wechsel zwischen Tracks mit individuellen Einstellungen (Pan, Volume, Mute/Solo)"
  }
]
```

### Ergänzende Features

```tsx
const featuresExtended = [
  { title: "Rhythm Notation", description: "Korrekkte Beams gruppiert nach metrischer Position" },
  { title: "Editierbar", description: "Notes anklicken zum Ändern von String/Fret Positionen" },
  { title: "Zoom Funktion", description: "Anpassbare Anzeigegröße für bessere Übersicht" },
  { title: "Click-to-Seek", description: "Auf Tablatur klicken um zu springen" },
  { title: "Live Finger Display", description: "Visuelle Fingering-Vorschläge während des Spielens" }
]
```

### Editor Mode Features

```tsx
const editorFeatures = [
  {
    title: "Audio-to-Tab Transkription",
    description: "Neuronales Netzwerk (BasicPitch) konvertiert Audio zu Tablatur"
  },
  { title: "Live MIDI Input", description: "Echtzeit Anzeige von gespielten Notes" },
  { title: "Smart Chord Recognition", description: "Automatische Erkennung und Anzeige von Chords" }
]
```

### Technical Features

```tsx
const technicalFeatures = [
  {
    title: "Pitch Bend Interpolation",
    description: "Real-time Gitarren-arppeggio Simulation für authentisches Spiel"
  },
  { title: "MIDI Control Messages", description: "CC68 (Legato), CC65 (Portamento), CC1 (Vibrato)" }
]
```

### DAW Compatibility

```tsx
const dafCompatibility = [
  {
    q: "Auf welche DAWs funktioniert das Plugin?",
    a: "Alle mit VST3 support. Cubase empfiehlt sich wegen einfacherer SideChain Konfiguration für Audio-to-Tab."
  }
]
```

## Download Section

### Zwei Optionen

```tsx
<div>
  <h2>Download</h2>

  {/* Releases Methode */}
  <div className="download-option">
    <h3>Via GitHub Installer</h3>


      {releaseSteps.map((step, i) => (
        // WICHTIG - fülle das hier mit den installation schritten
              ))}
          )}

// Continues with links and alternative methods...