"use client";

import { useId } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "react-tooltip";
import { useTheme } from "next-themes";
import config from "../data/config.json"

const technologies = config.tech;

const TechIcon = ({ tech = technologies, size = 10 }) => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDarkMode = currentTheme === "dark";
  const uniquePrefix = useId();

  return (
    <>
      {tech.map((item) => {
        const uniqueId = `${uniquePrefix}-${item.id}`;

        return (
          <div key={uniqueId} className="relative">
            <Link href={item.techHref} id={uniqueId}>
              <div
                style={{
                  width: `${size * 4}px`,
                  height: `${size * 4}px`,
                }}
                className="relative"
              >
                <Image
                  src={isDarkMode ? item.imageUrl.dark : item.imageUrl.light}
                  fill
                  alt={item.imageAltText}
                  className="object-contain"
                />
              </div>
            </Link>

            <Tooltip
              anchorSelect={`#${uniqueId}`}
              content={item.tech}
              place="top"
              positionStrategy="fixed" // forces tooltip to calculate from viewport
              offset={8} // keeps spacing consistent
              delayShow={100} // avoids hydration flicker
            />
          </div>
        );
      })}
    </>
  );
};

export default TechIcon;
