function Navbar() {
  return (
    <nav className="flex items-center justify-between px-[6%] py-6">
      
      <a
        href="/"
        className="text-2xl font-bold text-[#1f2d24] no-underline"
      >
        PEAK
      </a>

      <div className="flex gap-8">
        <a
          href="#"
          className="text-[#1f2d24] no-underline"
        >
          Explore
        </a>

        <a
          href="#"
          className="text-[#1f2d24] no-underline"
        >
          Saved
        </a>

        <a
          href="#"
          className="text-[#1f2d24] no-underline"
        >
          About
        </a>
      </div>

    </nav>
  )
}

export default Navbar