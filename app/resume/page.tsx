import Fade from "@/components/animation/Fade";
import ResumeViewer from "@/components/resume/ResumeViewer";

export default function Home() {
  return (
    <Fade>
      <section className="pt-20 bg-background">
        <ResumeViewer />
      </section>
    </Fade>
  );
}
