import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import CartographerBioCard from "./CartographerBioCard";

import CA_Island_1 from "./assets/CA-Island-1.png";
import CA_Island_2 from "./assets/CA-Island-2.png";
import CA_Island_3 from "./assets/CA-Island-3.png";
import CA_Island_4 from "./assets/CA-Island-4.png";
import CA_Gold_Rush from "./assets/Gold_Rush_CA.png";
import USA from "./assets/USA.png";
import J_H_Colton from "./assets/J.H_Colton.jpg";
import Eusebio_Kino from "./assets/Eusebio_Francisco_Kino.jpg";
import Jo_Mora from "./assets/Jo_Mora.jpg";


const mapSlides = [
  {
    src: CA_Island_1,
    alt: "Early historical map showing California drawn as an island.",
    caption:
      "Early cartographers often presented California as a narrow island separated from the mainland.",
  },
  {
    src: CA_Island_2,
    alt: "Historical map with a wider island interpretation of California.",
    caption:
      "Later maps broadened California's outline, helping the island idea spread through European atlases.",
  },
  {
    src: CA_Island_3,
    alt: "Seventeenth-century style map continuing the California island depiction.",
    caption:
      "The island depiction persisted for generations as mapmakers copied and refined earlier versions.",
  },
  {
    src: CA_Island_4,
    alt: "Later map preserving the idea of California as an island.",
    caption:
      "Even into the eighteenth century, some maps still treated California as an island before the error faded.",
  },
];

const cartographers = [
  {
    imageUrl: Eusebio_Kino,
    name: "Eusebio Francisco Kino",
    date: "August 10, 1645 - March 15, 1711",
    description: "Eusebio Kino was a Jesuit missionary and cartographer who played a crucial role in disproving the myth of California as an island by exploring the Baja California Peninsula."
  },
  {
    imageUrl: J_H_Colton,
    name: "J.H. Colton",
    date: "July 5, 1800 - July 29, 1893",
    description: "John H. Colton was a prominent American cartographer known for his detailed maps of the United States, including those depicting routes to California during the Gold Rush."
  },
  {
    imageUrl: Jo_Mora,
    name: "Jo Mora",
    date: "March 8, 1876 - February 19, 1947",
    description: "Jo Mora was an artist and cartographer known for his detailed maps and illustrations of the American West, including California. His work captured the region's geography and history in a unique artistic style."
  }
];

const AUTO_ROTATE_DELAY = 5000;

export default function EarthProcesses() {
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const targetSection = document.querySelector(location.hash);

    if (!targetSection) {
      return;
    }

    const scrollTarget = targetSection.querySelector("h2") ?? targetSection;

    scrollTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash]);

  useEffect(() => {
    if (isCarouselPaused) {
      return undefined;
    }

    const rotationTimer = window.setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mapSlides.length);
    }, AUTO_ROTATE_DELAY);

    return () => window.clearTimeout(rotationTimer);
  }, [currentIndex, isCarouselPaused]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mapSlides.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mapSlides.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  const pauseCarousel = () => {
    setIsCarouselPaused(true);
  };

  const resumeCarousel = () => {
    setIsCarouselPaused(false);
  };

  const handleCarouselBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      resumeCarousel();
    }
  };

  const currentSlide = mapSlides[currentIndex];

  return (
    <div className="earth-processes">
      <h1>Earth Processes</h1>

      <p>Learn about the various processes that shape our planet.</p>

      <section id="maps" aria-label="Maps, Location, and Cartographers" className="earth-section">
        <h2>Maps, Location, and Cartographers</h2>

        <section className="maps-subsection map-section">
          <div className="maps-subsection-copy">
            <h3>Early Maps & The Discovery of California</h3>

            <p>
              California was initially thought of to be an island. The first
              mention of this was in Garci Rodriquez de Montalvo&apos;s &quot;Las
              Sergas de Esplandian,&quot; published in 1510. In 1597, Cornelius van
              Wytfliet published a history of the new world including maps of the
              Americas. One of the maps included California, which was now
              depicted as a much larger and broader island than initially
              supposed. For much of the 17th and 18th centuries, the concept of
              California as an island persisted.
            </p>

            <p>
              However, not long into the 18th century, Father Eusebio Kino, a
              Jesuit, crossed the Baja California Peninsula. Following this
              discovery, he submitted a report that included the possibility of
              California not being an island. For many decades, this idea was not
              immediately accepted. It was only in 1746, when Fernando Consag,
              another Jesuit, sailed completely around the Gulf of California,
              that California was accepted as not being an island.
            </p>
          </div>

          <div className="maps-subsection-media-shell maps-subsection-media-shell--carousel image-carousel-shell">
            <button
              type="button"
              onClick={prevImage}
              className="carousel-nav prev-btn"
              aria-label="Show previous map"
            >
              &larr;
            </button>

            <figure
              className="maps-subsection-media image-carousel"
              onMouseEnter={pauseCarousel}
              onMouseLeave={resumeCarousel}
              onFocus={pauseCarousel}
              onBlur={handleCarouselBlur}
            >
              <img src={currentSlide.src} alt={currentSlide.alt} />

              <figcaption className="carousel-caption">
                {currentSlide.caption}
              </figcaption>

              <div
                className="carousel-dots"
                role="group"
                aria-label="California map slide navigation"
              >
                {mapSlides.map((slide, index) => (
                  <button
                    key={slide.src}
                    type="button"
                    className={`carousel-dot${index === currentIndex ? " is-active" : ""}`}
                    onClick={() => goToImage(index)}
                    aria-label={`Show map ${index + 1}`}
                    aria-pressed={index === currentIndex}
                  />
                ))}
              </div>
            </figure>

            <button
              type="button"
              onClick={nextImage}
              className="carousel-nav next-btn"
              aria-label="Show next map"
            >
              &rarr;
            </button>
          </div>
        </section>

        <section
          className="maps-subsection pathways-section"
          aria-label="Indigenous Pathways, Exploration, and Migration"
        >
          <div className="maps-subsection-copy">
            <h3>Indigenous Pathways, Exploration & Migration</h3>

            <p>
              Long before the Spanish arrived at California, native tribes had developed
              trade routes and pathways all throughout North and South America. These trade
              routes helped to connect native tribes all throughout California and beyond.
              The Mohave used a route from Arizona to California, which later was used to
              assist De Anza to reach the San Gabriel mission and eventually became the
              Santa Fe Railroad.
            </p>

            <p>
              In 1849, as the California Gold Rush gained momentum, J. H. Colton began producing
              maps of the United States that would show routes of travel to the California gold
              fields. These maps were essentially in aiding the United States in expanding out west.
              However, even with these elaborate maps, travel to California was still dangerous and
              would take three to seven months on foot. Sailing was safer but not faster, as it
              would still take four to eight months to travel around the tip of South America.
            </p>
          </div>

          <div className="maps-subsection-media-shell pathways-media-shell">
            <figure className="maps-subsection-media pathways-media">
              <img
                src={CA_Gold_Rush}
                alt="Map showing routes to California during the Gold Rush"
              />
            </figure>
          </div>
        </section>

        <section
          className="maps-subsection shape-section"
          aria-label="The Changing Shape of California"
        >
          <div className="maps-subsection-copy">
            <h3>The Changing Shape of California</h3>

            <p>
              California is located on in the United States of America. It resides on the West
              Coast adjacent to the Pacific Ocean. California spans a latitudinal range of roughly
              10 degrees, stretching from 32&deg;32&apos; N at its southern border with Mexico to 42&deg;00&apos; N
              at its northern border with Oregon.
            </p>

            <p>
              California became the 31st state of the union on September 9, 1850. Before that time,
              it was mainly occupied by native tribes and the Spanish settlers. Now, California has
              grown immensely in architecture and population, with the current population sitting
              around 39 million.
            </p>
          </div>

          <div className="maps-subsection-media-shell shape-media-shell">
            <figure className="maps-subsection-media shape-media">
              <img
                src={USA}
                alt="Map showing the location of California within the United States"
              />
            </figure>
          </div>
        </section>

        <section>
          <h3>Californa's Famous Cartographers</h3>
          <div className="cartographers-list">
            {cartographers.map((cartographer) => (
              <CartographerBioCard
                key={cartographer.name}
                name={cartographer.name}
                date={cartographer.date}
                description={cartographer.description}
                imageUrl={cartographer.imageUrl}
              />
            ))}
          </div>
        </section>

      </section>



      <section id="plate-tectonics" className="earth-section">
        <h2>Plate Tectonics, Earthquakes, and Volcanoes</h2>
        <p>Placeholder content for Plate Tectonics, Earthquakes, and Volcanoes.</p>
      </section>

      <section id="weathering" className="earth-section">
        <h2>Weathering, Mass Wasting, and Erosion</h2>
        <p>Placeholder content for Weathering, Mass Wasting, and Erosion.</p>
      </section>

      <section id="fluvial" className="earth-section">
        <h2>Fluvial Processes, Oceans, and Coastlines</h2>
        <p>Placeholder content for Fluvial Processes, Oceans, and Coastlines.</p>
      </section>

      <section id="climate" className="earth-section">
        <h2>Climate Controls, Biomes, and Climate Change</h2>
        <p>Placeholder content for Climate Controls, Biomes, and Climate Change.</p>
      </section>
    </div>
  );
}
