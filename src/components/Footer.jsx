function Footer() {
  return (
    <footer className="relative w-full bg-[#0A0A0A] pb-12 pt-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-b from-[#D9BE74] to-[#C8A951] shadow-[0_10px_24px_rgba(200,169,81,0.35)] ring-1 ring-[#F1E3B0]" />
            <span className="text-sm tracking-widest text-[#C8A951]">CREAIQ</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white">Startseite</a>
            <a href="#areas" className="hover:text-white">Alle Projekte</a>
            <a href="#contact" className="hover:text-white">Kontakt</a>
            <a href="#" className="hover:text-white">Datenschutz</a>
            <a href="#" className="hover:text-white">Impressum</a>
          </nav>
        </div>

        <div className="mx-auto mt-8 h-px max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <p className="mt-6 text-center text-xs text-gray-400">©opyright 2025 by CreaIQ</p>
      </div>
    </footer>
  )
}

export default Footer
