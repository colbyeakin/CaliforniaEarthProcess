export default function References() {

  const sortedReferences = [
    "Unsplash. (n.d.). Golden Gate Bridge in San Francisco [Photograph]. https://unsplash.com/",
    "Pixabay. (n.d.). San Diego skyline at night with Coronado Bridge [Photograph]. https://pixabay.com/",
    "Stanford University Libraries. (n.d.). California as an island. Stanford University. https://exhibits.stanford.edu/california-as-an-island",
    "ICT News. (n.d.). Aboriginal pathways and trading routes were California’s first highways. https://ictnews.org/archive/aboriginal-pathways-and-trading-routes-were-californias-first-highways/",
    "Newberry Library. (n.d.). 1849 routes to California. Mapping Movement. https://mappingmovement.newberry.org/mapping-communication/1849-routes-to-california#top",
    "Encyclopedia Britannica. (n.d.). California. Britannica. https://www.britannica.com/place/California-state",
    "National Institute of Standards and Technology. (n.d.). Earthquake: Loma Prieta, California, 1989. U.S. Department of Commerce. https://www.nist.gov/el/earthquake-loma-prieta-california-1989",
    "United States Geological Survey. (n.d.). The Great 1906 San Francisco earthquake. U.S. Department of the Interior. https://earthquake.usgs.gov/earthquakes/events/1906calif/18april/",
    "ShakeAlert. (n.d.). ShakeAlert earthquake early warning system. https://www.shakealert.org/",
    "California State Science Commission. (2020). California’s earthquake risk and preparedness (SSC19-01). https://www.ssc.ca.gov/wp-content/uploads/sites/5/2020/08/ssc19-01.pdf",
    "California Governor’s Office of Emergency Services. (n.d.). Catastrophic planning. https://www.caloes.ca.gov/office-of-the-director/operations/planning-preparedness-prevention/planning-preparedness/catastrophic-planning/",
    "Encyclopaedia Britannica. (n.d.). Sierra Nevada. Britannica. https://www.britannica.com/place/Sierra-Nevada-mountains",
    "Encyclopaedia Britannica. (n.d.). Lassen Peak. Britannica. https://www.britannica.com/place/Lassen-Peak",
    "Public Broadcasting Service. (n.d.). California gold rush. American Experience. https://www.pbs.org/wgbh/americanexperience/features/goldrush-california/",
    "California Department of Conservation. (n.d.). Mineral resources in California. California Geological Survey. https://www.conservation.ca.gov/cgs/minerals/resources",
  ].sort();
  return (
    <div className="references">
      <h1>References</h1>
      {sortedReferences.map((ref, index) => (
        <p key={index}>{ref}</p>
      ))}
    </div>
  );
}
