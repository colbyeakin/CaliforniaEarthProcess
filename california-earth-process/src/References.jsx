export default function References() {

  const sortedReferences = [
    "Unsplash. (n.d.). Golden Gate Bridge in San Francisco [Photograph]. https://unsplash.com/",
    "Pixabay. (n.d.). San Diego skyline at night with Coronado Bridge [Photograph]. https://pixabay.com/",
    "Stanford University Libraries. (n.d.). California as an island. Stanford University. https://exhibits.stanford.edu/california-as-an-island",
    "ICT News. (n.d.). Aboriginal pathways and trading routes were California’s first highways. https://ictnews.org/archive/aboriginal-pathways-and-trading-routes-were-californias-first-highways/",
    "Newberry Library. (n.d.). 1849 routes to California. Mapping Movement. https://mappingmovement.newberry.org/mapping-communication/1849-routes-to-california#top",
    "Encyclopedia Britannica. (n.d.). California. Britannica. https://www.britannica.com/place/California-state"
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
