# GP5 Plugin Website - Architektur

## Zielgruppe
Nutzer in DAWs mit VST3 support (Cubase primär), die GP5 Dateien laden, spielen und editieren wollen.

## Website Struktur (React)

```
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Features.tsx
│   │   ├── DownloadSection.tsx
│   │   ├── Installation.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   ├── styles/
│   │   └── index.css
│   └── App.tsx
```

## Komponenten Entwurf

### Header / Navigation
- Logo/Name: "GP5 Plugin"
- Links: Home, Features, Download, Installation, FAQ
  
### Hero Section
```tsx
// FILL THIS:
// Kurze Hauptbeschreibung (2-3 Sätze) die sofort klar macht was das ist
// Beispiel: "[einfügen]"
```

### Features Liste
```tsx
const features = [
  // WICHTIG - fülle das aus
]
```

### Download Section
- Zwei Optionen:
  1. **Releases** auf GitHub → Links zu `.exe` Installern
  2. **Source code** (falls Benutzer eigenen build wollen)

### Installation
```tsx
const installation = [
  "GitHub Repository öffnen",
  "Zum Abschnitt 'Releases' navigieren",  
  "'Assets' finden → .exe Installer herunterladen",
  "Installer ausführen und folgen den Anweisungen",
  "Ergebnende .vst3 Datei in DAWs Plugins Ordner kopieren",
  "DAW neu starten, Plugin im VST Browser suchen"
]
```

### FAQ / Hinweise
```tsx
const notes = [
  // WICHTIG - fülle das aus  
]