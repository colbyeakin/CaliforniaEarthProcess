import { Link } from "react-router-dom";
import goldenGateBridge from "./assets/golden-gate-bridge.avif";
import sanDiego from "./assets/san-diego.webp"

export default function HomePage() {
  const infoCards = [
    {
      title: "Maps, Location, and Cartographers",
      link: "#maps"
    },
    {
      title: "Plate Tectonics, Earthquakes, and Volcanoes",
      link: "#plate-tectonics"
    },
    {
      title: "Weathering, Mass Wasting, and Erosion",
      link: "#weathering"
    },
    {
      title: "Fluvial Processes, Oceans, and Coastlines",
      link: "#fluvial"
    },
    {
      title: "Climate Controls, Biomes, and Climate Change",
      link: "#climate"
    }
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <img
          src={goldenGateBridge}
          alt="Golden Gate Bridge"
          className="hero-image"
        />
        <h1>California</h1>
        <p>The Golden State</p>
      </section>

      <section className="section-about">
        <h1>About</h1>
        <div className="about-content">
          <p>I have chosen to focus on California because it's where I grew up and have a deep connection to the state. I have traveled all throughout the state
            and have experienced its diverse landscapes and cultures. California is a state that has a rich history and a unique identity. Back in the day, it was
            a place of opportunity and dreams. The gold rush brought people from all over the world to seek their fortune. Today, California continues to be a land
            of dreams and possibilities.
          </p>

          <p>California has a diverse range of landscapes, from the snow-capped peaks of the Sierra Nevada to the sunny beaches of the Pacific Coast. Being 
            the third largest state in the United States, it contains a large variety of ecosystems and natural wonders.
          </p>

          <p>As Alma teaches, all things denote there is a God. To me, the wonder of California is a testament to the beauty and complexity of the natural world. It's a place
            where completly different environments thrive to create an awe-inpsiring experience. The Earth is too complex to be an accident, just look around you. Everywhere you
            go, you will find evidence of the divine design and purpose of this wonderful planet.
          </p>
        </div>
        <img
          src={sanDiego}
          alt="San Diego"
          className="about-image"
        />
      </section>

      <section className="section-explore">
        <h1>Explore More</h1>
        <div className="info-cards">
          {infoCards.map((card, index) => (
            <Link
              key={index}
              className="info-card"
              to={`/earth-process${card.link}`}
            >
              <h2>{card.title}</h2>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
