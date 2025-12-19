import { useState } from "react";
import "./App.css";

const categories = [
  {
    id: "cable-power",
    title: "Power",
    bg: "https://fujisilvertech.com/wp-content/themes/fujisilvertech/assets/img/fuji-silvertech-banner-img01.jpg",
    icon: "https://fujisilvertech.com/wp-content/themes/fujisilvertech/assets/img/cable-and-power-blue-icon.png",
    img: "https://fujisilvertech.com/wp-content/themes/fujisilvertech/assets/img/fuji-silvertech-slide-th01.jpg",
  },
  {
    id: "water-sewage",
    title: "Water & Sewage",
    bg: "https://fujisilvertech.com/wp-content/themes/fujisilvertech/assets/img/fuji-silvertech-banner-img02.jpg",
    icon: "https://fujisilvertech.com/wp-content/themes/fujisilvertech/assets/img/water-and-sewage-blue-icon.png",
    img: "https://fujisilvertech.com/wp-content/themes/fujisilvertech/assets/img/fuji-silvertech-slide-th02.jpg",
  },
  {
    id: "railways",
    title: "Railways",
    bg: "https://fujisilvertech.com/wp-content/themes/fujisilvertech/assets/img/fuji-silvertech-banner-img03.jpg",
    icon: "https://fujisilvertech.com/wp-content/themes/fujisilvertech/assets/img/railway-blue-icon.png",
    img: "https://fujisilvertech.com/wp-content/themes/fujisilvertech/assets/img/fuji-silvertech-slide-th03.jpg",
  },
  {
    id: "industrial",
    title: "Industrial",
    bg: "https://fujisilvertech.com/wp-content/themes/fujisilvertech/assets/img/fuji-silvertech-banner-img04.jpg",
    icon: "https://fujisilvertech.com/wp-content/themes/fujisilvertech/assets/img/industrial-blue-icon.png",
    img: "https://fujisilvertech.com/wp-content/themes/fujisilvertech/assets/img/fuji-silvertech-slide-th04.jpg",
  },
  {
    id: "roads-bridges",
    title: "Roads & Bridges",
    bg: "https://fujisilvertech.com/wp-content/themes/fujisilvertech/assets/img/fuji-silvertech-banner-img05.jpg",
    icon: "https://fujisilvertech.com/wp-content/themes/fujisilvertech/assets/img/roads-and-bridges-blue-icon.png",
    img: "https://fujisilvertech.com/wp-content/themes/fujisilvertech/assets/img/fuji-silvertech-slide-th05.jpg",
  },
];

const HeroBanner = () => {
  const [activeBg, setActiveBg] = useState(categories[3].bg);
  const [activeId, setActiveId] = useState(null);

  return (
    <section
      id="category"
      className="category-block d-none d-sm-none d-md-none d-lg-block category-block"
      style={{
        backgroundImage: `url(${activeBg})`,
        transition: "background-image 0.5s ease",
      }}
    >
      <div className="slider-main-para">
        <h2>
          The
          <br />
          Future
          <br />
          is
          <br />
          Here
        </h2>
      </div>

      {categories.map((item) => (
        <div
          key={item.id}
          className="category-background"
          onMouseEnter={() => {
            setActiveBg(item.bg);
            setActiveId(item.id);
          }}
          onMouseLeave={() => {
            setActiveBg(categories[3].bg);
            setActiveId(null);
          }}
        >
          <div
            className="category-image"
            style={{
              backgroundImage: `url(${item.img})`,
              opacity: activeId ? 0 : 1,
              transition: "opacity 0.4s ease",
            }}
          />

          <div className="category-content">
            <div className="category-content1">
              <img src={item.icon} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroBanner;
