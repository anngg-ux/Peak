function PlaceCard({
  image,
  type,
  name,
  bestTime,
  feel,
  difficulty,
  duration,
}) {
  return (
    <article className="group relative cursor-pointer overflow-hidden rounded-[20px] bg-[#e9ebe9] transition-transform duration-300 hover:-translate-y-1.5">

      {/* Place image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={`${name} hiking trail`}
          className="block h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {/* Save button */}
      <button
        type="button"
        aria-label={`Save ${name}`}
        className="absolute right-4 top-4 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white/75 text-xl text-[#1f2d24] transition hover:scale-105 hover:bg-white"
      >
        ♡
      </button>

      {/* Information */}
      <div className="p-6">

        <p className="mb-2.5 text-[0.7rem] tracking-[2px]">
          {type}
        </p>

        <h3 className="text-[1.7rem] font-medium tracking-[-0.5px]">
          {name}
        </h3>

        <p className="my-3.5 text-sm">
          Best seasons: <strong className="font-medium">{bestTime}</strong>
        </p>

        <p className="mb-[18px] text-xs opacity-70">
          {feel}
        </p>

        <div className="flex gap-5 text-[0.85rem]">
          <span>{difficulty}</span>
          <span>{duration}</span>
        </div>

        <a
          href="#"
          className="mt-5 inline-block text-[0.85rem] text-inherit no-underline hover:underline"
        >
          Explore place →
        </a>

      </div>
    </article>
  )
}

export default PlaceCard