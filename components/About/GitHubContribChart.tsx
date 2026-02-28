"use client";

import { useTheme } from "next-themes";
import { GitHubCalendar } from "react-github-calendar";

const GitHubContribChart = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section className="mb-20 w-full">
      <h2 className="section-title">GitHub</h2>
      <div className="w-full overflow-hidden">
        <GitHubCalendar
          username="RChaubey16"
          blockSize={12}
          colorScheme={isDark ? "dark" : "light"}
        />
      </div>
    </section>
  );
};

export default GitHubContribChart;
