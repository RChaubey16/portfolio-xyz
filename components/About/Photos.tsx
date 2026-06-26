import Image from "next/image";
import Link from "next/link";

import { client } from "@/sanity/lib/client";

interface Photo {
  key: string;
  url: string;
  alt: string;
}

const Photos = async ({ slice = true }: { slice?: boolean }) => {
  const docs: { images: { _key: string; url: string; alt: string }[] }[] =
    await client.fetch(`
      *[_type == "photo"] | order(_createdAt desc) {
        "images": images[] {
          "_key": _key,
          "url": asset->url,
          "alt": coalesce(alt, ^.title, "Photo")
        }
      }
    `);

  const photos: Photo[] = docs.flatMap((doc) =>
    (doc.images ?? []).map((img) => ({
      key: img._key,
      url: img.url,
      alt: img.alt,
    }))
  );

  const visiblePhotos = slice ? photos.slice(0, 4) : photos;

  return (
    <section id="photos">
      {slice && (
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-bold">Photos</h2>
          {photos.length > 4 && (
            <Link
              href="/photos"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              View all →
            </Link>
          )}
        </div>
      )}

      {slice ? (
        <div className="mt-4 grid grid-cols-2 gap-3">
          {visiblePhotos.map((photo) => (
            <div
              key={photo.key}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-sm"
            >
              <Image
                src={photo.url}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 400px"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          {visiblePhotos.map((photo) => (
            <figure key={photo.key}>
              <div
                className="relative w-full overflow-hidden rounded-sm"
                style={{ aspectRatio: "3/2" }}
              >
                <Image
                  src={photo.url}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </div>
              <figcaption className="text-muted-foreground mt-2 text-center text-sm italic">
                {photo.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      )}

    </section>
  );
};

export default Photos;
