export interface TechItem {
  id: string;
  tech: string;
  techHref: string;
  imageUrl: {
    light: string;
    dark: string;
  };
  imageAltText: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  variant:
    | "default"
    | "outline"
    | "link"
    | "destructive"
    | "secondary"
    | "ghost";
  icon: "GithubIcon" | "Globe" | string; // extend if you add more icons
}

export interface ProjectStatus {
  text: string;
  className: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectData {
  id: string;
  type: string;
  image: { src: string; alt: string };
  status: { text: string; className: string };
  title: string;
  description: string;
  techStack?: TechItem[];
  blogCategories?: {
    id: string;
    category: string;
  }[];
  links: {
    label: string;
    href: string;
    variant:
      | "default"
      | "outline"
      | "link"
      | "destructive"
      | "secondary"
      | "ghost";
    icon: "GithubIcon" | "Globe" | "Read" | string;
  }[];
}

export interface ProjectCardProps {
  project: ProjectData;
}
