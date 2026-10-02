import SectionHeading from "@/components/SectionHeading";
import { WorkCard } from "@/components/Work/WorkCard";
import { getAllCaseStudies } from "@/lib/work";

const RecentWork = () => {
  const studies = getAllCaseStudies().slice(0, 2);

  if (studies.length === 0) return null;

  return (
    <section id="work">
      <SectionHeading title="Case Studies" href="/work" />
      <div className="mt-4 flex flex-col gap-3">
        {studies.map((study) => (
          <WorkCard key={study.slug} study={study} />
        ))}
      </div>
    </section>
  );
};

export default RecentWork;
