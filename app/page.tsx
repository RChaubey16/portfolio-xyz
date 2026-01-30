import Profile from "@/components/About/Profile";
import Experience from "@/components/Experience/Experience";
import Technologies from "@/components/Technologies";
import Footer from "@/components/Footer";
import GitHubContribChart from "@/components/About/GitHubContribChart";

export default function Home() {
  return (
    <div className="">
      <main className="">
        {/* Intro */}
        <Profile />

        {/* About (Description + Actions) */}

        {/* Socials + GitHub chart */}
        <GitHubContribChart />

        {/* Experience */}
        <Experience />
        <Technologies />

        {/* Projects */}

        {/* Contact */}

        {/* Footer - Quote */}
        <Footer />
      </main>
    </div>
  );
}
