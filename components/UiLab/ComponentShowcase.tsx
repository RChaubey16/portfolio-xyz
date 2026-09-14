import type { ReactNode } from "react";

type ComponentShowcaseProps = {
  name: string;
  description: string;
  children: ReactNode;
};

const ComponentShowcase = ({
  name,
  description,
  children,
}: ComponentShowcaseProps) => {
  return (
    <div className="overflow-hidden rounded-md border border-gray-200 bg-white">
      <div className="flex items-start justify-between gap-3 border-b border-gray-200 px-4 py-3">
        <div>
          <p className="text-sm font-medium text-black">{name}</p>
          <p className="mt-0.5 text-xs text-gray-600">{description}</p>
        </div>
        <span className="mt-0.5 shrink-0 rounded-full border border-gray-200 bg-gray-100 px-2 py-0.5 text-[10px] tracking-wide text-gray-600">
          live
        </span>
      </div>

      <div className="lab-grid flex min-h-32 items-center justify-center p-6">
        {children}
      </div>
    </div>
  );
};

export default ComponentShowcase;
