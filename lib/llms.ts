import config from "@/data/config.json";
import { ROLES } from "@/lib/experience";
import { featuredProjects } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";
import { getAllCaseStudies, getCaseStudy } from "@/lib/work";
import { caseStudyToMarkdown } from "@/lib/work-markdown";

function formatMonth(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

function profileSection(): string {
  const socials = config.socials.map((s) => `- ${s.tooltip}: ${s.href}`);
  return [
    `# ${config.name}`,
    `> Full content of ${SITE_URL}, for LLMs.`,
    config.description.join(" "),
    socials.join("\n"),
  ].join("\n\n");
}

function experienceSection(): string {
  const roles = ROLES.map(({ key, company, title, duration }) => {
    const { work, tech } = config.experience[key];
    return [
      `### ${title}, ${company} (${duration})`,
      work.map((item) => `- ${item}`).join("\n"),
      `Tech: ${tech.map((t) => t.tech).join(", ")}`,
    ].join("\n\n");
  });
  return ["## Experience", ...roles].join("\n\n");
}

function projectsSection(): string {
  const items = featuredProjects.map((p) => {
    const live = p.links.find((l) => l.icon === "Globe")?.href;
    const source = p.links.find((l) => l.icon === "GithubIcon")?.href;
    const lines = [
      `### ${p.title}`,
      p.description,
      `Tech: ${(p.techStack ?? []).map((t) => t.tech).join(", ")}`,
    ];
    const links = [live && `Live: ${live}`, source && `Source: ${source}`];
    return [...lines, links.filter(Boolean).join("\n")].join("\n\n");
  });
  return ["## Projects", ...items].join("\n\n");
}

function talksSection(): string {
  const items = config.talks.map((t) =>
    [
      `### ${t.title}`,
      `${t.event}, ${formatMonth(t.date)}`,
      t.description,
      t.link && `Event: ${t.link}`,
    ]
      .filter(Boolean)
      .join("\n\n"),
  );
  return ["## Talks", ...items].join("\n\n");
}

function caseStudiesSection(): string {
  const studies = getAllCaseStudies().map((meta) =>
    caseStudyToMarkdown(getCaseStudy(meta.slug)).trim(),
  );
  // Each case study keeps its own "# Title" so it reads as a standalone page
  return ["## Case Studies", ...studies].join("\n\n---\n\n");
}

export function buildLlmsTxt(): string {
  return (
    [
      profileSection(),
      experienceSection(),
      projectsSection(),
      talksSection(),
      caseStudiesSection(),
    ].join("\n\n") + "\n"
  );
}
