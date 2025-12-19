import { useState } from "react";

const categories = [
  {
    id: "power",
    title: "Power",
    icon: "https://fujisilvertech.com/wp-content/themes/fujisilvertech/assets/img/cable-and-power-blue-icon.png",
    bg: "https://fujisilvertech.com/wp-content/themes/fujisilvertech/assets/img/fuji-silvertech-slide-th01.jpg",
  },
  {
    id: "water",
    title: "Water & Sewage",
    icon: "https://fujisilvertech.com/wp-content/themes/fujisilvertech/assets/img/water-and-sewage-blue-icon.png",
    bg: "https://fujisilvertech.com/wp-content/themes/fujisilvertech/assets/img/fuji-silvertech-slide-th02.jpg",
  },
  {
    id: "rail",
    title: "Railways",
    icon: "https://fujisilvertech.com/wp-content/themes/fujisilvertech/assets/img/railway-blue-icon.png",
    bg: "https://fujisilvertech.com/wp-content/themes/fujisilvertech/assets/img/fuji-silvertech-slide-th03.jpg",
  },
  {
    id: "industrial",
    title: "Industrial",
    icon: "https://fujisilvertech.com/wp-content/themes/fujisilvertech/assets/img/industrial-blue-icon.png",
    bg: "https://fujisilvertech.com/wp-content/themes/fujisilvertech/assets/img/fuji-silvertech-slide-th04.jpg",
  },
  {
    id: "roads",
    title: "Roads & Bridges",
    icon: "https://fujisilvertech.com/wp-content/themes/fujisilvertech/assets/img/roads-and-bridges-blue-icon.png",
    bg: "https://fujisilvertech.com/wp-content/themes/fujisilvertech/assets/img/fuji-silvertech-slide-th05.jpg",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(categories[0].id);

  return (
    <section
      className="hidden lg:flex h-147 w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://fujisilvertech.com/wp-content/themes/fujisilvertech/assets/img/fuji-silvertech-banner-img03.jpg)",
      }}
    >
      {/* Left Text */}
      <div className="w-1/3 flex items-center pl-20">
        <h2 className="text-white text-6xl font-bold leading-tight">
          The
          <br />
          Future
          <br />
          is
          <br />
          Here
        </h2>
      </div>

      {/* Categories */}
      <div className="w-2/3 flex overflow-hidden">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onMouseEnter={() => setActive(cat.id)}
            className={`relative flex transition-all duration-700 ease-in-out cursor-pointer
              ${active === cat.id ? "flex-[3]" : "flex-[1]"}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
              style={{ backgroundImage: `url(${cat.bg})` }}
            />

            <div
              className={`absolute inset-0 transition-all duration-700
                ${active === cat.id ? "bg-black/30" : "bg-black/60"}`}
            />

            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center">
              <img
                src={cat.icon}
                alt={cat.title}
                className={`mb-4 h-14 w-14 transition-all duration-500
                  ${active === cat.id ? "scale-110" : "scale-100"}`}
              />
              <h3
                className={`text-white text-xl font-semibold transition-all duration-500
                  ${active === cat.id ? "-translate-y-2" : "translate-y-0"}`}
              >
                {cat.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
