import heroImage from "../assets/hero.png"

function Landing() {
  return (
    <main className="min-h-screen bg-[#f4f1e8]">

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">

        {/* Background image */}
        <img
          src={heroImage}
          alt="Nepal mountains"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Hero content */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-[#f5f2e8]">

          <p className="mb-5 text-xs tracking-[0.35em]">
            DISCOVER NEPAL
          </p>

          <h1 className="max-w-5xl text-6xl font-medium leading-[0.9] tracking-[-0.04em] md:text-8xl lg:text-9xl">
            Find somewhere
            <br />
            worth getting lost in.
          </h1>

          <p className="mt-8 max-w-xl text-sm leading-7 text-white/80 md:text-base">
            Discover peaceful trails, hidden waterfalls,
            breathtaking views and unforgettable places
            across Nepal.
          </p>

          <button className="mt-8 rounded-full bg-[#f4f1e8] px-7 py-3 text-sm font-medium text-[#1f2d24] transition duration-300 hover:scale-105">
            Explore Nepal →
          </button>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs tracking-[0.25em] text-white/70">
          SCROLL ↓
        </div>

      </section>

    </main>
  )
}

export default Landing