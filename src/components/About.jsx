function About() {
  return (
    <section id="about" className="relative w-full bg-[#0A0A0A] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Was ist CreaIQ?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-gray-300">
            CreaIQ ist eine Premium-Marke für kreative Bildung, KI-Automatisierung, Community-Aufbau und moderne Content-Produktion. Wir vereinen moderne KI-Technologien, starke Markenästhetik und ein wachsendes Ökosystem für Lernen, Unterhaltung und Automatisierung.
          </p>
        </div>

        {/* Icon tiles */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { title: 'Kreativität', desc: 'Ideen kultivieren, Geschichten formen, Content veredeln.' },
            { title: 'Automation', desc: 'KI-gestützte Workflows, die Zeit sparen und Qualität heben.' },
            { title: 'Community', desc: 'Wissen teilen, gemeinsam wachsen, vernetzen.' },
          ].map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-2xl border border-[#C8A951]/25 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{
                backgroundImage: 'radial-gradient(120px 80px at 20% 0%, rgba(200,169,81,0.15), transparent 60%)'
              }} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-b from-[#D9BE74] to-[#C8A951] text-black shadow-[0_8px_24px_rgba(200,169,81,0.35)] ring-1 ring-[#F1E3B0]">
                  {/* Stylized 3D gold icon substitute */}
                  <div className="h-6 w-6 rounded bg-black/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_3px_6px_rgba(0,0,0,0.5)]" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
