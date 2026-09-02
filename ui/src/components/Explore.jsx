import PlaceCard from "./PlaceCard"

import shivapuriImage from "../assets/shivapuri.png"
import champadeviImage from "../assets/champadevi.png"
import phulchowkiImage from "../assets/phulchowki.png"

function Explore() {
  return (
    <section className="mx-auto max-w-[1400px] px-[6%] py-24">

      <p className="mb-4 text-xs tracking-[3px]">
        EXPLORE NEPAL
      </p>

      <h2 className="mb-10 max-w-[600px] text-4xl font-medium tracking-[-1px] md:text-5xl">
        Places worth getting lost in.
      </h2>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">

        <PlaceCard
          image={shivapuriImage}
          type="HIKING • KATHMANDU"
          name="Shivapuri"
          bestTime="Autumn – Spring"
          feel="Forest trails • Mountain views • Wildlife"
          difficulty="Moderate"
          duration="Several routes"
        />

        <PlaceCard
          image={champadeviImage}
          type="HIKING • KATHMANDU"
          name="Champadevi"
          bestTime="Autumn – Spring"
          feel="Valley views • Forest trail • Day hike"
          difficulty="Moderate"
          duration="~4–7 hrs"
        />

        <PlaceCard
          image={phulchowkiImage}
          type="DAY HIKE • LALITPUR"
          name="Phulchowki"
          bestTime="Spring – Autumn"
          feel="Rhododendrons • Mountain views • Winter snow"
          difficulty="Moderate"
          duration="5–8 hrs"
        />

      </div>

    </section>
  )
}

export default Explore