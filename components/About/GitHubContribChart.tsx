"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";

const GitHubContribChart = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section className="mt-10 w-full">
      {/* <h2 className="section-title">GitHub Contributions</h2> */}
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
