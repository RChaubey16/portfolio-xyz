import Image from "next/image";

const icons = [
  "/icons/tech/React.svg",
  "/icons/tech/TypeScript.svg",
  "/icons/tech/Node.js.svg",
  "/icons/tech/Docker.svg",
  "/icons/tech/PostgresSQL.svg",
  "/icons/tech/Python.svg",
  "/icons/tech/Git.svg",
  "/icons/tech/MongoDB.svg",
  "/icons/tech/Redis.svg",
  "/icons/tech/GraphQL.svg",
  "/icons/tech/AWS.svg",
  "/icons/tech/JavaScript.svg",
];

const leftIcons = [
  { src: icons[0], top: "8%", left: "4%", rotate: "-12deg" },
  { src: icons[1], top: "22%", left: "8%", rotate: "8deg" },
  { src: icons[2], top: "38%", left: "3%", rotate: "-6deg" },
  { src: icons[3], top: "55%", left: "7%", rotate: "15deg" },
  { src: icons[4], top: "70%", left: "4%", rotate: "-10deg" },
  { src: icons[5], top: "85%", left: "6%", rotate: "5deg" },
];

const rightIcons = [
  { src: icons[6], top: "10%", right: "5%", rotate: "10deg" },
  { src: icons[7], top: "25%", right: "3%", rotate: "-8deg" },
  { src: icons[8], top: "42%", right: "7%", rotate: "12deg" },
  { src: icons[9], top: "58%", right: "4%", rotate: "-14deg" },
  { src: icons[10], top: "72%", right: "6%", rotate: "6deg" },
  { src: icons[11], top: "88%", right: "3%", rotate: "-9deg" },
];

export default function SidebarIcons() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 hidden xl:block">
      {/* Left sidebar icons */}
      {leftIcons.map((icon, i) => (
        <div
          key={`left-${i}`}
          className="absolute h-10 w-10 opacity-15 dark:opacity-10"
          style={{
            top: icon.top,
            left: icon.left,
            transform: `rotate(${icon.rotate})`,
          }}
        >
          <Image
            src={icon.src}
            alt=""
            width={40}
            height={40}
            className="h-full w-full object-contain"
          />
        </div>
      ))}

      {/* Right sidebar icons */}
      {rightIcons.map((icon, i) => (
        <div
          key={`right-${i}`}
          className="absolute h-10 w-10 opacity-15 dark:opacity-10"
          style={{
            top: icon.top,
            right: icon.right,
            transform: `rotate(${icon.rotate})`,
          }}
        >
          <Image
            src={icon.src}
            alt=""
            width={40}
            height={40}
            className="h-full w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}
