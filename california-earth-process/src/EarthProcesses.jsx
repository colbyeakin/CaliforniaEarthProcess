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
import SanFran_1906 from "./assets/1906_SanFran.gif";
import SanFran_1989 from "./assets/1989_SanFran.jpg";
import Mt_Lassen from "./assets/Mt-Lassen.jpg";
import Sierra_Nevada from "./assets/Sierra-Nevada.jpg";
import Gold from "./assets/Gold.jpg";
import Gold_Rush_Mining from "./assets/Gold_Rush.jpg";


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

const YouTubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);


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

      <p>Learn about the various processes that shape California</p>

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
              Americas. 
            </p>

            <p>
              One of the maps included California, which was now
              depicted as a much larger and broader island than initially
              supposed. For much of the 17th and 18th centuries, the concept of
              California as an island persisted.
            </p>

            <p>
              However, not long into the 18th century, Father Eusebio Kino, a
              Jesuit, crossed the Baja California Peninsula. Following this
              discovery, he submitted a report that included the possibility of
              California not being an island. 
            </p>

            <p>
              For many decades, this idea was not
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
            </p>

            <p>
              The Mohave used a route from Arizona to California, which later was used to
              assist De Anza to reach the San Gabriel mission and eventually became the
              Santa Fe Railroad.
            </p>

            <p>
              In 1849, as the California Gold Rush gained momentum, J. H. Colton began producing
              maps of the United States that would show routes of travel to the California gold
              fields. These maps were essentially in aiding the United States in expanding out west.
            </p>

            <p>
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
            <p className="caption">Map showing routes to California during the Gold Rush</p>
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
            <p className="caption">Map showing the location of California within the United States</p>
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
        <section className="earthquake-section" aria-label="Tectonic Activity and Natural Disasters">
          <h3>Tectonic Activity & Natural Disasters</h3>
          <p> 
            California is on the west coast of the North American Plate. 
            The state also lies on the San Andreas Fault, which lines the 
            entire coast of the state and has been responsible for many 
            earthquakes in the state’s history.
          </p>

          <div>
            <div className="earthquake-subsection">
              <h4>San Francisco 1906 Earthquake</h4>
              <p>
                The 1906 earthquake of San Francisco was on of the most significant earthquakes of 
                all time. The earthquake had a magnitude of 7.9, the largest in the city’s history. 
                The epicenter was offshore, about two miles south of the city. The earthquake lasted 
                as long as 40 to 60 seconds which caused immense damage throughout the city. However, 
                even with the destructive power of the earthquake, most of the damage and deaths resulted 
                from the following fires that lasted days and burned through the entire city.
              </p>
              <div className="earthquake-media">
                <img className="earthquake-image" src={SanFran_1906} alt="San Francisco 1906 Earthquake" />
                <p className="caption">San Francisco 1906 Earthquake, a view of the damaged city</p>
              </div>
              <div className="earthquake-video">
                <YouTubeEmbed embedId="W3qO_qHjeHk" />
              </div>
            </div>
            <div className="earthquake-subsection">
              <h4>San Francisco 1989 Earthquake</h4>
              <p>
                Nicknamed the World Series Earthquake, the 1989 earthquake of San Francisco was a 6.9 
                magnitude. The earthquake killed 63 people throughout northern California, injured 3,757, 
                and left some 3000-12,000 people homeless. The highest number of fatalities occurred in 
                Oakland due to the collapse of the Nimitz Freeway, where the double-deck portion collapsed, 
                crushing the cars on the lower deck.
              </p>
              <div className="earthquake-media">
                <img className="earthquake-image" src={SanFran_1989} alt="San Francisco 1989 Earthquake" />
                <p className="caption">San Francisco 1989 Earthquake, a view of the collapsed freeway</p>
              </div>
              <div className="earthquake-video">
                <YouTubeEmbed embedId="TxjcjSRs6Ak" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3>Mountains and Volcanoes</h3>
          <div className="mountain-subsection">
            <div className="mountain-subsection-copy">
              <h4>Sierra Nevada</h4>
              <p className="mountain-subsection-paragraph">
                The largest mountain range in California is the Sierra Nevadas. The mountain ranges spread 
                over 250 miles across the eastern side of the state. The peaks range from 11,000 to 14,000 
                feet, with Mount Whitney being the highest peak in the United States, standing at 14,494 feet. 
              </p>
              <p className="mountain-subsection-paragraph">
                The Sierra Nevadas existed as a place for American Indian tribes to hunt and gather resources 
                for their tribes. In the mid-19th century, the beauty of the Sierra Nevada was ended as prospectors 
                came, stayed, and stamped their mark on their region.
              </p>
            </div>
            <div className="mountain-media">
              <img className="mountain-image" src={Sierra_Nevada} alt="Sierra Nevada Mountains" />
              <p className="caption">Sierra Nevada Mountains, a view of the mountain range</p>
            </div>
          </div>
          <div className="mountain-subsection">
            <div className="mountain-subsection-copy">
              <h4>Mount Lassen</h4>
              <p className="mountain-subsection-paragraph">
                Mount Lassen, located on the southern end of the Cascade range, rises to an elevation of 10,457 feet. 
                It is classified as a volcanic dome. Lassen Peak was thought to be extinct when it erupted without 
                warning on May 30, 1914. 
              </p>
              <p className="mountain-subsection-paragraph">
                Minor eruptions continued throughout the year until May 19, 1915, when a 
                large eruption propelled a stream of molten lava 1,000 feet down the mountain, melting snow and 
                causing mudflows.
              </p>
            </div>
            <div className="mountain-media">
              <img className="mountain-image" src={Mt_Lassen} alt="Mount Lassen" />
              <p className="caption">Mount Lassen, a view of the volcanic dome</p>
            </div>
          </div>
        </section>

        <section>
          <h3>Rocks, Minerals & Economic Resources</h3>
          <div className="rocks-subsection">
            <div className="rocks-subsection-copy">
              <p>
                The most popular mineral California is known for is gold. In 1848, a rush 
                of settlers came into the state in search of gold, which is known as the 
                California Gold Rush which led to California’s subsequent statehood. In the 
                early days of California, gold was used as a common currency in the early-mid 
                19th century.
              </p>
              <p>
                Along with gold there are many other types of minerals that are found in this 
                state which include critical minerals, metals, and construction materials. The 
                abundance of these minerals allow for mining sites to be created throughout the 
                state which create many jobs for people living in those areas.
              </p>
              <p>
                Even with creating an abundance of jobs, the mining has also created some environmental 
                challenges which include habitat destruction and water contamination. These challenges 
                have led to land restoration efforts throughout the mining areas in California.
              </p>
            </div>

            <div className="rocks-media">
              <figure className="rocks-image-container">
                <img src={Gold_Rush_Mining} alt="Gold Rush Mining" />
                <figcaption className="caption">California Gold Rush, mining operations</figcaption>
              </figure>

              <figure className="rocks-image-container">
                <img src={Gold} alt="Gold" />
                <figcaption className="caption">Gold, a common mineral found in California</figcaption>
              </figure>
            </div>
          </div>
        </section>
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
