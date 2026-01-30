import TechCard from "./TechCard";
import config from "../data/newConfig.json";

export default function Technologies() {
  const technologies = config.technologies;
  return (
    <section id="technologies">
      <h2 className="section-title">Technologies</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {technologies.map((t, index) => (
          <TechCard
            key={`${t.tech}-${index}`}
            tech={t.tech}
            imageUrl={t.imageUrl}
            techHref={t.techHref}
            imageAltText={t.imageAltText}
          />
        ))}
      </div>
    </section>
  );
}
