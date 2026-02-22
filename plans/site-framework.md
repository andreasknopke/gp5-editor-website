# GP5 Plugin Website - Frame für Inhalt

## Kompletter Website-Entwurf (React)

### App.tsx Struktur mit Inhalten

```tsx
// src/App.tsx
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Download from "./components/Download"
import Installation from "./components/Installation"
import FAQ from "./components/FAQ"

export default function App() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>

// Continues with main content sections for each component...
```

### Header / Navigation

```tsx
// src/components/Header.tsx + Navigation.tsx

const navLinks = [
  { to: "/", children: "Home" },
  { to: "/features", children: "Features" },
  { to: "/download", children: "Download" },
  { to: "/installation", children: "Installation" },
  { to: "/faq", children: "FAQ" }
]
```

### Hero Section

```tsx
// src/components/Hero.tsx

export default function Hero() {
  return (
    <section>
      {/* WICHTIG - fülle das hier */}
            </section>
          )
        }