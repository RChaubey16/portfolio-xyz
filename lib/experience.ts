import config from "@/data/config.json";

export type ExperienceKey = keyof typeof config.experience;

export type Role = {
  key: ExperienceKey;
  company: string;
  title: string;
  duration: string;
  current?: boolean;
};

export const ROLES: Role[] = [
  {
    key: "full_stack_engineer",
    company: "QED42",
    title: "Engineer - Full Stack",
    duration: "May 2023 – Present",
    current: true,
  },
  {
    key: "associate_engineer",
    company: "QED42",
    title: "Associate Engineer - Full Stack",
    duration: "May 2022 – Apr 2023",
  },
  {
    key: "intern",
    company: "QED42",
    title: "Intern",
    duration: "Aug 2021 – Apr 2022",
  },
];
