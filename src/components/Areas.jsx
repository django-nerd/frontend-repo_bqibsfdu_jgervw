function Areas() {
  const tiles = [
    {
      name: 'IQ-Kick',
      points: ['Quiz-Kanal im Premium-Look', 'Dark/Gold Branding', 'Schnelle, interaktive Videos'],
      cta: 'Zu IQ-Kick'
    },
    {
      name: 'CreaIQ Business',
      points: ['KI-Automationen als Service', 'n8n-Workflows, Prompt-Consulting, LLM-Routing'],
      cta: 'Business entdecken'
    },
    {
      name: 'Hamburg-Chat',
      points: ['Cartoon/Mini-Mockumentary Projekt', 'Humorvoll, stilisiert, modern'],
      cta: 'Hamburg-Chat ansehen'
    },
    {
      name: 'CreaDIN / CreaDean',
      points: ['Books, Creative Writing, Storytelling & Entertainment'],
      cta: 'Mehr erfahren'
    },
  ]

  return (
    <section id="areas" className="relative w-full bg-[#0A0A0A] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Hauptbereiche von CreaIQ</h2>
          <p className="mx-auto mt-4 max-w-3xl text-gray-300">Vier Säulen, ein Ökosystem – entdecke unsere Markenbereiche.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {tiles.map((tile) => (
            <div key={tile.name} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-6 text-white shadow-[0_10px_40px_rgba(0,0,0,0.55)]">
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{
                backgroundImage: 'linear-gradient(to bottom right, rgba(200,169,81,0.06), transparent 60%)'
              }} />

              <div className="relative z-10">
                <div className="mb-3 inline-flex items-center gap-3">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#C8A951] shadow-[0_0_12px_rgba(200,169,81,0.8)]" />
                  <h3 className="text-2xl font-semibold">{tile.name}</h3>
                </div>
                <ul className="mt-3 space-y-2 text-gray-300">
                  {tile.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-1.5 w-6 rounded bg-gradient-to-r from-[#C8A951]/80 to-transparent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a href="#" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-[#D9BE74] to-[#C8A951] px-5 py-2.5 text-sm font-semibold text-black shadow-[0_10px_24px_rgba(200,169,81,0.35)] ring-1 ring-[#F1E3B0] transition hover:translate-y-[-1px]">
                    <span className="relative">
                      {tile.cta}
                      <span className="pointer-events-none absolute inset-x-0 -top-0.5 h-px rounded-full bg-white/70 opacity-70 mix-blend-screen" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Areas
