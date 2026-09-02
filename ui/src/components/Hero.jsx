import SearchBar from "./SearchBar"
import heroImage from "../assets/hero.png"

function Hero() {
  return (
    <section
      className="relative min-h-[75vh] overflow-hidden bg-cover bg-center bg-no-repeat px-[6%] py-20 text-center text-[#f5f2e8]"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1918]/35 to-[#0a1918]/55"></div>

      {/* Hero content */}
      <div className="relative z-10 flex min-h-[calc(75vh-10rem)] flex-col items-center justify-center">

        <p className="mb-5 text-xs uppercase tracking-[3px]">
          DISCOVER NEPAL
        </p>

        <h1 className="mb-8 max-w-[800px] text-5xl font-medium leading-[0.95] tracking-[-3px] sm:text-6xl md:text-7xl lg:text-8xl">
          Find somewhere worth getting lost in.
        </h1>

        <p className="mb-9 max-w-[550px] leading-7">
          Discover peaceful trails, hidden waterfalls, breathtaking views and
          unforgettable places across Nepal.
        </p>
        <SearchBar />

      </div>
    </section>
  )
}

export default Hero