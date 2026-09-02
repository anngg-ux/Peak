function SearchBar() {
  return (
    <form className="flex w-full max-w-[600px] items-center rounded-full bg-white/95 p-1.5">

      {/* Search icon */}
      <span className="px-3 text-xl text-[#1f2d24]">
        ⌕
      </span>

      {/* Search input */}
      <input
        type="search"
        placeholder="Search mountains, trails, waterfalls..."
        className="flex-1 bg-transparent px-2 py-4 text-base text-[#1f2d24] outline-none placeholder:text-[#1f2d24]/50"
      />

      {/* Voice search */}
      <button
        type="button"
        aria-label="Voice search"
        className="flex h-9 w-9 items-center justify-center rounded-full text-base text-[#1f2d24] transition hover:bg-[#e9ebe9]"
      >
        🎙️
      </button>

      {/* Image search */}
      <button
        type="button"
        aria-label="Search by image"
        className="flex h-9 w-9 items-center justify-center rounded-full text-base text-[#1f2d24] transition hover:bg-[#e9ebe9]"
      >
        🖼️
      </button>

      {/* Search button */}
      <button
        type="submit"
        aria-label="Search"
        className="flex h-9 w-9 items-center justify-center rounded-full text-base text-[#1f2d24] transition hover:bg-[#e9ebe9]"
      >
        ➤
      </button>

    </form>
  )
}

export default SearchBar