import type { Metadata } from "next";

import Photos from "@/components/About/Photos";
import FadeUp from "@/components/animation/FadeUp";

export const metadata: Metadata = {
  title: "Photos",
  description: "A collection of moments I've captured along the way.",
};

export default function PhotosPage() {
  return (
    <section className="bg-background py-20">
      <FadeUp>
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">Photos</h1>
          <p className="para">A collection of moments I&apos;ve captured along the way.</p>
        </div>
      </FadeUp>

      <FadeUp delay={0.1}>
        <Photos slice={false} />
      </FadeUp>
    </section>
  );
}
