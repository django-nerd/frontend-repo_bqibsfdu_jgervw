function Showcase() {
  return (
    <section className="relative w-full bg-[#0A0A0A] py-20">
      <div className="mx-auto max-w-6xl px-6 text-white">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Showcase</h2>
          <p className="mx-auto mt-4 max-w-3xl text-gray-300">Einblicke in IQ-Kick und CreaIQ Business Workflows – kompakt und elegant präsentiert.</p>
        </div>

        {/* Gold divider */}
        <div className="mx-auto mb-10 h-px max-w-4xl bg-gradient-to-r from-transparent via-[#C8A951] to-transparent opacity-70" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* IQ-Kick */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.55)]">
            <h3 className="mb-3 text-xl font-semibold">IQ-Kick</h3>
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-video rounded-lg bg-gradient-to-br from-[#C8A951]/15 to-white/5 ring-1 ring-white/10" />
              ))}
            </div>
          </div>

          {/* Business */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.55)]">
            <h3 className="mb-3 text-xl font-semibold">CreaIQ Business Workflows</h3>
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-[#7A6BBE]/20 to-white/5 ring-1 ring-white/10" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase
