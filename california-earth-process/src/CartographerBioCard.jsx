export default function CartographerBioCard({ name, date, description, imageUrl }) {
    return (
        <div className="cartographer-bio-card">
            <img src={imageUrl} alt={`${name}'s portrait`} className="cartographer-image" />
            <h2 className="cartographer-name">{name}</h2>
            <h3 className="cartographer-date">{date}</h3>
            <p className="cartographer-description">{description}</p>
        </div>
    );
}