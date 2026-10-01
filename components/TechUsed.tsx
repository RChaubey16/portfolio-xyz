import TechCard from "./TechCard";

type TechItem = {
  tech: string;
  techHref: string;
  imageUrl: {
    light: string;
    dark: string;
  };
  imageAltText: string;
};

type TechUsedProps = {
  text?: string;
  tech?: TechItem[];
};

const TechUsed = ({ text, tech = [] }: TechUsedProps) => {
  return (
    <div>
      {text && <span className="text-sm font-medium">{text}</span>}
      <div className="flex flex-wrap items-center gap-1.5">
        {tech.map((item: TechItem, index: number) => (
          <TechCard key={`${item.tech}-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TechUsed;
