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
      {text && (
        <span className="font-semibold text-black dark:text-white">{text}</span>
      )}
      <div className="flex items-center gap-2 flex-wrap">
        {tech.map((item: TechItem, index: number) => (
          <TechCard key={`${item.tech}-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TechUsed;
