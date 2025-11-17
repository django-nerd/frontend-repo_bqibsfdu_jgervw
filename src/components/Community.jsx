function Community() {
  return (
    <section className="relative w-full bg-[#0A0A0A] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-[#C8A951]/40 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          <div className="rounded-2xl border border-[#C8A951]/50 p-6 sm:p-10">
            <h3 className="text-2xl font-semibold">Werde Teil unserer Community</h3>
            <p className="mt-2 max-w-3xl text-gray-300">Erhalte exklusive Inhalte, Early-Access-Material und Einblicke in unsere KI-basierten Projekte.</p>
            <div className="mt-6">
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-[#D9BE74] to-[#C8A951] px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_24px_rgba(200,169,81,0.35)] ring-1 ring-[#F1E3B0] transition hover:translate-y-[-1px]">
                <span className="relative">
                  Community beitreten
                  <span className="pointer-events-none absolute inset-x-0 -top-0.5 h-px rounded-full bg-white/70 opacity-70 mix-blend-screen" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community
