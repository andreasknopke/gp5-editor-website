import Header from "./components/Header"
import Hero from "./components/Hero"
import Screenshots from "./components/Screenshots"
import Features from "./components/Features"
import Download from "./components/Download"
import Installation from "./components/Installation"
import FAQ from "./components/FAQ"
import Community from "./components/Community"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Screenshots />
        <Features />
        <Download />
        <Installation />
        <FAQ />
        <Community />
      </main>
      <Footer />
    </>
  )
}