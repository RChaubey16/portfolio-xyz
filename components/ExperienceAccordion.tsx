import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import TechUsed from "./TechUsed";
import config from "../data/config.json";

const experience = config.experience;

export function ExperienceAccordion() {
  return (
    <Accordion type="multiple" className="w-full" defaultValue={["item-1"]}>
      <AccordionItem value="item-1" className="experience-accordion">
        <AccordionTrigger className="hover:no-underline">
          <div className="accordion-header">
            {/* Left */}
            <div className="flex gap-4">
              <Image
                src="/images/qed42.jpeg"
                width={48}
                height={48}
                alt="QED42 Logo"
                className="object-contain rounded-sm"
              />
              <div>
                <h3 className="company">QED42</h3>
                <p className="role">Engineer - Full Stack</p>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="duration">May 2023 – Present</p>
                <p className="location">Pune, India</p>
              </div>
            </div>
          </div>
        </AccordionTrigger>

        <AccordionContent className="flex flex-col gap-4 para">
          <ul className="list-disc list-inside">
            {experience.full_stack_engineer.work.map((item, i) => (
              <li key={i} className="mb-5">
                {item}
              </li>
            ))}
          </ul>
          <TechUsed tech={experience.full_stack_engineer.tech} />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="experience-accordion">
        <AccordionTrigger className="hover:no-underline">
          <div className="accordion-header">
            {/* Left */}
            <div className="flex gap-4">
              <Image
                src="/images/qed42.jpeg"
                width={48}
                height={48}
                alt="QED42 Logo"
                className="object-contain rounded-sm"
              />
              <div>
                <h3 className="company">QED42</h3>
                <p className="role">Associate Engineer – Full Stack</p>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="duration">May 2023 – Present</p>
                <p className="location">Pune, India</p>
              </div>
            </div>
          </div>
        </AccordionTrigger>

        <AccordionContent className="flex flex-col gap-4 para">
          <ul className="list-disc list-inside">
            {experience.associate_engineer.work.map((item, i) => (
              <li key={i} className="mb-5">
                {item}
              </li>
            ))}
          </ul>
          <TechUsed tech={experience.associate_engineer.tech} />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="experience-accordion">
        <AccordionTrigger className="hover:no-underline">
          <div className="accordion-header">
            {/* Left */}
            <div className="flex gap-4">
              <Image
                src="/images/qed42.jpeg"
                width={48}
                height={48}
                alt="QED42 Logo"
                className="object-contain rounded-sm"
              />
              <div>
                <h3 className="company">QED42</h3>
                <p className="role">Intern</p>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="duration">May 2023 – Present</p>
                <p className="location">Pune, India</p>
              </div>
            </div>
          </div>
        </AccordionTrigger>

        <AccordionContent className="flex flex-col gap-4 para">
          <ul className="list-disc list-inside">
            {experience.intern.work.map((item, i) => (
              <li key={i} className="mb-5">
                {item}
              </li>
            ))}
          </ul>
          <TechUsed tech={experience.intern.tech} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
