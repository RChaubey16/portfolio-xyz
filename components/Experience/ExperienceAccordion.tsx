import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import config from "../../data/newConfig.json";
import TechUsed from "../TechUsed";

export function ExperienceAccordion() {
  const experience = config.experience;

  return (
    <Accordion type="multiple" className="w-full" defaultValue={[]}>
      <AccordionItem value="item-1" className="border-b-0">
        <AccordionTrigger className="hover:cursor-pointer hover:no-underline">
          <div className="accordion-header flex w-full items-center justify-between">
            {/* Left */}
            <div className="flex items-center gap-4">
              <Image
                src="/images/qed42.jpeg"
                width={52}
                height={52}
                alt="QED42 Logo"
                className="rounded-sm object-contain"
              />
              <div>
                <h3 className="flex items-center text-lg font-bold">
                  QED42
                  <span className="ml-3 rounded-sm bg-green-500/30 px-1.5 py-1 text-sm font-medium text-green-700">
                    <span className="h-2 w-2 bg-green-500" /> Working
                  </span>
                </h3>
                <p className="text-base">Engineer - Full Stack</p>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              <div className="text-muted-foreground text-right">
                <p className="duration">May 2023 – Present</p>
                <p className="location">Pune, India</p>
              </div>
            </div>
          </div>
        </AccordionTrigger>

        <AccordionContent className="flex flex-col gap-4 border-t pt-4">
          <h3 className="text-xl font-bold">Technologies & Tools</h3>
          <TechUsed tech={experience.full_stack_engineer.tech} />

          <ul className="list-inside list-disc">
            {experience.full_stack_engineer.work.map((item, i) => (
              <li key={i} className="text-muted-foreground mb-4 text-base">
                {item}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="border-b-0">
        <AccordionTrigger className="hover:cursor-pointer hover:no-underline">
          <div className="accordion-header flex w-full items-center justify-between">
            {/* Left */}
            <div className="flex items-center gap-4">
              <Image
                src="/images/qed42.jpeg"
                width={52}
                height={52}
                alt="QED42 Logo"
                className="rounded-sm object-contain"
              />
              <div>
                <h3 className="text-lg font-bold">QED42</h3>
                <p className="text-base">Associate Engineer - Full Stack</p>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              <div className="text-muted-foreground text-right">
                <p className="duration">May 2022 – April 2023</p>
                <p className="location">Pune, India</p>
              </div>
            </div>
          </div>
        </AccordionTrigger>

        <AccordionContent className="flex flex-col gap-4 border-t pt-4">
          <h3 className="text-xl font-bold">Technologies & Tools</h3>
          <TechUsed tech={experience.associate_engineer.tech} />

          <ul className="list-inside list-disc">
            {experience.associate_engineer.work.map((item, i) => (
              <li key={i} className="text-muted-foreground mb-4 text-base">
                {item}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="border-b-0">
        <AccordionTrigger className="hover:cursor-pointer hover:no-underline">
          <div className="accordion-header flex w-full items-center justify-between">
            {/* Left */}
            <div className="flex items-center gap-4">
              <Image
                src="/images/qed42.jpeg"
                width={52}
                height={52}
                alt="QED42 Logo"
                className="rounded-sm object-contain"
              />
              <div>
                <h3 className="text-lg font-bold">QED42</h3>
                <p className="text-base">Intern</p>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              <div className="text-muted-foreground text-right">
                <p className="duration">August 2021 – April 2022</p>
                <p className="location">Pune, India</p>
              </div>
            </div>
          </div>
        </AccordionTrigger>

        <AccordionContent className="flex flex-col gap-4 border-t pt-4">
          <h3 className="text-xl font-bold">Technologies & Tools</h3>
          <TechUsed tech={experience.intern.tech} />

          <ul className="list-inside list-disc">
            {experience.intern.work.map((item, i) => (
              <li key={i} className="text-muted-foreground mb-4 text-base">
                {item}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
