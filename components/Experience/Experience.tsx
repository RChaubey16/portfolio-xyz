import { ExperienceAccordion } from "./ExperienceAccordion";

export default function Experience({
  showHeading = true,
  accordionState = "closed",
}) {
  return (
    <section id="experience">
      {showHeading && (
        <>
          <p className="eyebrow">{"// experience"}</p>
          <h1 className="section-title mt-1">Experience</h1>
        </>
      )}
      <ExperienceAccordion accordionState={accordionState} />
    </section>
  );
}
