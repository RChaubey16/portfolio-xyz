import SectionHeading from "@/components/SectionHeading";

import { ExperienceAccordion } from "./ExperienceAccordion";

export default function Experience({
  showHeading = true,
  accordionState = "closed",
}) {
  return (
    <section id="experience">
      {showHeading && <SectionHeading title="Experience" />}
      <ExperienceAccordion accordionState={accordionState} />
    </section>
  );
}
