import Hero from './components/Hero'
import About from './components/About'
import Areas from './components/Areas'
import Community from './components/Community'
import Showcase from './components/Showcase'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] font-[var(--font-manrope)]">
      {/* Subtle vignette and texture */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)] opacity-5" />

      {/* Page sections */}
      <Hero />
      <About />
      <Areas />
      <Community />
      <Showcase />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
