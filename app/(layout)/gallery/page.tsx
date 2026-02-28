import type { Metadata } from "next";

import Gallery from "@/components/About/Gallery";
import Fade from "@/components/animation/Fade";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual collection of moments, experiences, and things that inspire me.",
};

export default function GalleryPage() {
  return (
    <Fade>
      <section className="bg-background py-20">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">Gallery</h1>
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
