import Gallery from "@/components/About/Gallery";
import Profile from "@/components/About/Profile";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects/Projects";
import Quote from "@/components/Quote";
import Technologies from "@/components/Technologies";
import Fade from "@/components/animation/Fade";

export default function Home() {
  return (
    <Fade>
      {/* Intro */}
      <Profile />
      {/* About (Description + Actions) */}

      <Quote
        quote="If your intention is pure, even the wrong path can lead you to the right place."
        author="Bhagavad Gita"
      />

      <Experience />

      <Quote
        quote="Beautiful things don't ask for attention."
        author="The Secret life of Walter Mitty"
      />

      <Projects />

      <Quote
        quote="It it weren't for second chances, we'd all be alone"
        author="Gregory Alan Isakov"
      />

      <Gallery />

      <Quote
        quote="Sometimes, our best decisions are the ones that don't make sense at all."
        author="Ted Mosby"
      />

      <Technologies />

      {/* Contact */}

      <Footer />
    </Fade>
  );
}
