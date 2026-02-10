import Gallery from "@/components/About/Gallery";
import Fade from "@/components/animation/Fade";

export default function GalleryPage() {
  return (
    <Fade>
      <section className="py-20 bg-background">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Gallery</h1>
          <p className="para">
            A visual collection of moments, experiences, and things that inspire
            me.
          </p>
        </div>
        <Gallery useTitle={false} useButton={false} />
      </section>
    </Fade>
  );
}
