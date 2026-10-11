import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import config from "@/data/config.json";
import { ROLES } from "@/lib/experience";

import TechUsed from "../TechUsed";

export function ExperienceAccordion({ accordionState = "closed" }) {
  const accordionDefaultValue =
    accordionState === "open" ? ROLES.map((r) => r.key) : [];

  return (
    <Accordion
      type="multiple"
      className="-mx-3 mt-3 w-[calc(100%+1.5rem)]"
      defaultValue={accordionDefaultValue}
    >
      {ROLES.map((role) => {
        const { tech, work } = config.experience[role.key];
        return (
          <AccordionItem key={role.key} value={role.key} className="border-b-0">
            <AccordionTrigger className="hover:bg-accent/60 items-center rounded-lg px-3 py-3 hover:cursor-pointer">
              <div className="flex w-full items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <Image
                    src="/images/qed42.jpeg"
                    width={40}
                    height={40}
                    alt={`${role.company} logo`}
                    className="ring-border size-10 shrink-0 rounded-md object-contain ring-1"
                  />
                  <div className="min-w-0">
                    <h3 className="flex items-center gap-2 text-sm font-medium">
                      {role.company}
                      {role.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/15 px-2 py-0.5 text-xs font-medium text-green-700 dark:text-green-400">
                          <span className="relative flex size-1.5">
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-75" />
                            <span className="relative inline-flex size-1.5 rounded-full bg-green-500" />
                          </span>
                          Working
                        </span>
                      )}
                    </h3>
                    <p className="text-muted-foreground truncate text-sm">
                      {role.title}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground shrink-0 text-right text-[13px] tabular-nums sm:text-sm">
                  {role.duration}
                </p>
              </div>
            </AccordionTrigger>

            <AccordionContent className="flex flex-col gap-4 px-3 pt-3 pb-5">
              <TechUsed tech={tech} />
              <ul className="text-muted-foreground marker:text-border list-disc space-y-2 pl-4 text-sm leading-relaxed">
                {work.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
