import Link from "next/link";

import type { Metadata } from "next";
import { GoArrowLeft } from "react-icons/go";

import { WorkItem } from "@/components/Work/WorkItem";
import FadeUp from "@/components/animation/FadeUp";
import configData from "@/data/newConfig.json";

export const metadata: Metadata = {
  title: "Work",
  description: "Companies I've worked with and projects I've built.",
};

const companies = [
  {
    logo: "/images/qed42.jpeg",
    name: "QED42",
    role: "Engineer - Full Stack",
    meta: "May 2023 – Present",
    href: "https://qed42.com",
  },
  {
    logo: "/images/qed42.jpeg",
    name: "QED42",
    role: "Associate Engineer - Full Stack",
    meta: "May 2022 – April 2023",
    href: "https://qed42.com",
  },
  {
    logo: "/images/qed42.jpeg",
    name: "QED42",
    role: "Intern",
    meta: "August 2021 – April 2022",
    href: "https://qed42.com",
  },
];

const projects = configData.projects.map((project) => {
  const preferredLink =
    project.links.find((link) => link.label === "Live") ??
    project.links.find((link) => link.label === "npm") ??
    project.links[0];

  return {
    logo: project.image.src,
    name: project.title,
    meta: project.type.charAt(0).toUpperCase() + project.type.slice(1),
    href: preferredLink?.href ?? "#",
  };
});

export default function WorkPage() {
  return (
    <FadeUp>
      <section className="mt-20 flex flex-col gap-10">
        <Link
          href="/v2"
          className="flex w-fit items-center gap-1.5 text-sm text-gray-500 underline underline-offset-2 transition-colors hover:text-black"
        >
          <GoArrowLeft className="h-4 w-4" />
          home
        </Link>

        <div>
          <h2 className="mb-2 text-xs font-medium tracking-wide text-gray-400 uppercase">
            Companies
          </h2>
          <div className="flex flex-col">
            {companies.map((company, index) => (
              <WorkItem key={`${company.name}-${index}`} {...company} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-2 text-xs font-medium tracking-wide text-gray-400 uppercase">
            Projects
          </h2>
          <div className="flex flex-col">
            {projects.map((project) => (
              <WorkItem key={project.name} {...project} />
            ))}
          </div>
        </div>
      </section>
    </FadeUp>
  );
}
