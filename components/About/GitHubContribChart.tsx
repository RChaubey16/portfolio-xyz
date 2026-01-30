import { GitHubCalendar } from "react-github-calendar";

const GitHubContribChart = () => {    
  return (
    <section className="w-full">
      {/* <h2 className="section-title">GitHub Contributions</h2> */}
      <div className="w-full overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.01]">
        <GitHubCalendar username="RChaubey16" blockSize={10} />
      </div>
    </section>
  );
};
    
export default GitHubContribChart;
