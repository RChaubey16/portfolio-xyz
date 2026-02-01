import Profile from "@/components/About/Profile";
import Experience from "@/components/Experience/Experience";
import Technologies from "@/components/Technologies";
import Footer from "@/components/Footer";
import GitHubContribChart from "@/components/About/GitHubContribChart";
import Quote from "@/components/Quote";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <div className="">
      <main className="">
        {/* Intro */}
        <Profile />
        {/* About (Description + Actions) */}
        <GitHubContribChart />

        <Quote
          quote="Beautiful things don't ask for attention"
          author="The Secret Life of Walter Mitty"
        />

        {/* Experience */}
        <Experience />

        <Quote
          quote="It it weren't for second chances, we'd all be alone"
          author="Gregory Alan Isakov"
        />

        {/* Projects */}
        <Projects />
        
        <Quote
          quote="It it weren't for second chances, we'd all be alone"
          author="Gregory Alan Isakov"
        />

        <Technologies />

        {/* Contact */}

        {/* Quote */}

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
