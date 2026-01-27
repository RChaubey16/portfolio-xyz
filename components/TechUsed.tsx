import TechCard from "./TechCard";

type TechItem = {
  name: string;
  href: string;
  logoSrc: string;
};

type TechUsedProps = {
  text?: string;
  tech?: TechItem[];
};

const TechUsed = ({ text, tech = [] }: TechUsedProps) => {
  return (
    <div>
      {text && (
        <span className="font-semibold text-black dark:text-white">{text}</span>
      )}
      <div className="flex items-center gap-2 flex-wrap">
        {tech.map((item: TechItem) => (
          <TechCard
            key={item.name}
            name={item.name}
            logoSrc={item.logoSrc}
            href={item.href}
          />
        ))}
      </div>
    </div>
  );
};

export default TechUsed;
