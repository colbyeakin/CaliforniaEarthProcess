export default function References() {

  const sortedReferences = [
    "Unsplash. (n.d.). Golden Gate Bridge in San Francisco [Photograph]. https://unsplash.com/",
    "Pixabay. (n.d.). San Diego skyline at night with Coronado Bridge [Photograph]. https://pixabay.com/"
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
