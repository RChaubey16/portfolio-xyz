import { ExperienceAccordion } from "./ExperienceAccordion";

export default function Experience({
  showHeading = true,
  accordionState = "closed",
}) {
  return (
    <section id="experience">
      {showHeading && <h1 className="text-2xl font-bold">Experience</h1>}
      <ExperienceAccordion accordionState={accordionState} />
    </section>
  );
}
