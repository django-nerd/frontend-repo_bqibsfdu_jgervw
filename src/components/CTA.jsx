function CTA() {
  return (
    <section className="relative w-full bg-[#0A0A0A] py-20">
      <div className="mx-auto max-w-6xl px-6 text-white">
        <div className="rounded-3xl bg-gradient-to-br from-[#C8A951]/15 via-[#C8A951]/10 to-transparent p-8 ring-1 ring-[#C8A951]/30 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-3xl font-bold">Bereit, CreaIQ zu entdecken?</h3>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#areas" className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-[#D9BE74] to-[#C8A951] px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_24px_rgba(200,169,81,0.35)] ring-1 ring-[#F1E3B0] transition hover:scale-[1.01]">
                <span className="relative">
                  Projekte ansehen
                  <span className="pointer-events-none absolute inset-x-0 -top-0.5 h-px rounded-full bg-white/70 opacity-70 mix-blend-screen" />
                </span>
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-[#C8A951]/40 bg-white/5 px-6 py-3 text-sm font-semibold text-[#C8A951] shadow-[inset_0_0_0_1px_rgba(200,169,81,0.15)] transition hover:bg-white/10">
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
