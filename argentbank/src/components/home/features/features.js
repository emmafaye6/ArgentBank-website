import "./features.css";
import { featuresData } from "../../../data/featuresData";

function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featuresData.map((features) => {
        return (
          <div className="feature-item" key={features.id}>
            <img
              src={features.image}
              alt={features.imageAlt}
              className="feature-icon"
            />
            <h3 className="feature-item-title">{features.title}</h3>
            <p>{features.text}</p>
          </div>
        );
      })}
    </section>
  );
}
export default Features;
