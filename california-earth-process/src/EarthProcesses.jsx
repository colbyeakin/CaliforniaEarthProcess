import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function EarthProcesses() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const targetSection = document.querySelector(location.hash);

    if (!targetSection) {
      return;
    }

    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash]);

  return (
    <div className="earth-processes">

      <h1>Earth Processes</h1>

      <p>
        Learn about the various processes that shape our planet.
      </p>

      <section id="maps" className="earth-section">
        <h2>Maps, Location, and Cartographers</h2>
        <p>Placeholder content for Maps, Location, and Cartographers.</p>
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
