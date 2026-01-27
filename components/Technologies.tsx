import TechCard from "./TechCard";

export default function Technologies() {
  const tech = [
    {
      name: "React",
      icon: "/icons/tech/React.svg",
      href: "https://react.dev/",
    },
    {
      name: "TypeScript",
      icon: "/icons/tech/TypeScript.svg",
      href: "https://www.typescriptlang.org/",
    },
    {
      name: "JavaScript",
      icon: "/icons/tech/JavaScript.svg",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "Node.js",
      icon: "/icons/tech/Node.js.svg",
      href: "https://nodejs.org/",
    },
    {
      name: "NestJS",
      icon: "/icons/tech/Nest.js.svg",
      href: "https://nestjs.com/",
    },
    {
      name: "Python",
      icon: "/icons/tech/Python.svg",
      href: "https://www.python.org/",
    },
    {
      name: "FastAPI",
      icon: "/icons/tech/FastAPI.svg",
      href: "https://fastapi.tiangolo.com/",
    },
    {
      name: "PHP",
      icon: "/icons/tech/PHP.svg",
      href: "https://www.php.net/",
    },
    {
      name: "Drupal",
      icon: "/icons/tech/Drupal.svg",
      href: "https://www.drupal.org/",
    },
    {
      name: "MySQL",
      icon: "/icons/tech/MySQL.svg",
      href: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/icons/tech/PostgresSQL.svg",
      href: "https://www.postgresql.org/",
    },
    {
      name: "MongoDB",
      icon: "/icons/tech/MongoDB.svg",
      href: "https://www.mongodb.com/",
    },
    {
      name: "Redis",
      icon: "/icons/tech/Redis.svg",
      href: "https://redis.io/",
    },
    {
      name: "AWS",
      icon: "/icons/tech/AWS.svg",
      href: "https://aws.amazon.com/",
    },
    {
      name: "Docker",
      icon: "/icons/tech/Docker.svg",
      href: "https://www.docker.com/",
    },
    {
      name: "Cloudflare",
      icon: "/icons/tech/Cloudflare.svg",
      href: "https://www.cloudflare.com/",
    },
    {
      name: "GraphQL",
      icon: "/icons/tech/GraphQL.svg",
      href: "https://graphql.org/",
    },
    {
      name: "Redux",
      icon: "/icons/tech/Redux.svg",
      href: "https://redux.js.org/",
    },
    {
      name: "Tailwind CSS",
      icon: "/icons/tech/Tailwind CSS.svg",
      href: "https://tailwindcss.com/",
    },
    {
      name: "Sass",
      icon: "/icons/tech/Sass.svg",
      href: "https://sass-lang.com/",
    },
    {
      name: "Vite.js",
      icon: "/icons/tech/Vite.js.svg",
      href: "https://vitejs.dev/",
    },
    {
      name: "Git",
      icon: "/icons/tech/Git.svg",
      href: "https://git-scm.com/",
    },
    {
      name: "GitHub",
      icon: "/icons/tech/Git.svg",
      href: "https://github.com/",
    },
    {
      name: "Jira",
      icon: "/icons/tech/Jira.svg",
      href: "https://www.atlassian.com/software/jira",
    },
    {
      name: "Postman",
      icon: "/icons/tech/Postman.svg",
      href: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/icons/tech/Figma.svg",
      href: "https://www.figma.com/",
    },
    {
      name: "JSON",
      icon: "/icons/tech/JSON.svg",
      href: "https://www.json.org/",
    },
    {
      name: "Sanity",
      icon: "/icons/tech/Sanity.svg",
      href: "https://www.sanity.io/",
    },
    {
      name: "Webflow",
      icon: "/icons/tech/Webflow.svg",
      href: "https://webflow.com/",
    },
    {
      name: "Fedora",
      icon: "/icons/tech/Fedora.svg",
      href: "https://getfedora.org/",
    },
  ];

  return (
    <section id="technologies">
      <h2 className="section-title">Stack</h2>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <TechCard key={t.name} name={t.name} logoSrc={t.icon} href={t.href} />
        ))}
      </div>
    </section>
  );
}
