import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-[#0A0A0A]">
      {/* Glow particles overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage:
            'radial-gradient(2px 2px at 20% 30%, rgba(200,169,81,0.35) 0, transparent 60%),' +
            'radial-gradient(2px 2px at 80% 20%, rgba(120,100,200,0.25) 0, transparent 60%),' +
            'radial-gradient(2px 2px at 60% 70%, rgba(200,169,81,0.25) 0, transparent 60%)'
        }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,169,81,0.08),transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-6 pb-16 pt-24 md:flex-row md:gap-16 md:px-10 lg:pt-28">
        {/* Text block */}
        <div className="z-10 max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C8A951]/30 bg-white/5 px-4 py-1 text-xs tracking-widest text-[#C8A951]/90 backdrop-blur">
            CREAIQ • PREMIUM • AI
          </div>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            CreaIQ – Das KI-gestützte Kreativ- und Lernökosystem der Zukunft
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gray-300 sm:text-lg">
            Inspiration, Automation, Community – verbunden in einer starken Marke.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <a href="#areas" className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-[#D9BE74] to-[#C8A951] px-6 py-3 text-sm font-semibold text-black shadow-[0_8px_24px_rgba(200,169,81,0.35)] ring-1 ring-[#F1E3B0] transition hover:scale-[1.01] hover:shadow-[0_10px_28px_rgba(200,169,81,0.5)]">
              <span className="relative">
                CreaIQ entdecken
                <span className="pointer-events-none absolute inset-x-0 -top-0.5 h-px rounded-full bg-white/70 opacity-70 mix-blend-screen" />
              </span>
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-xl border border-[#C8A951]/40 bg-white/5 px-6 py-3 text-sm font-semibold text-[#C8A951] shadow-[inset_0_0_0_1px_rgba(200,169,81,0.15)] transition hover:bg-white/10">
              Unsere Projekte ansehen
            </a>
          </div>
        </div>

        {/* Spline 3D scene */}
        <div className="relative h-[380px] w-full max-w-[680px] flex-1 md:h-[520px]">
          <div className="absolute inset-0 rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 to-white/[0.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.5)]" />
          <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* gradient sheen */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
        </div>
      </div>
    </section>
  )
}

export default Hero
