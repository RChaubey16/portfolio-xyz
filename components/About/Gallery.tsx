import Image from "next/image";
import { client } from "@/sanity/lib/client";
import CtaButton from "../others/CtaButton";

interface ImageItem {
  _key?: string;
  _type?: string;
  alt?: string;
  url: string;
}

interface GalleryItem {
  _id: string;
  image: ImageItem;
}

const Gallery = async ({ useTitle = true, useButton = true }) => {
  const gallery: GalleryItem[] = await client.fetch(`
    *[_type == "photo"]{
      _id,
      title,
      "image": {
        "url": mainImage.asset->url,
        "alt": coalesce(mainImage.alt, title)
      }
    }
  `);

  const photos =
    gallery?.map((item) => ({
      url: item.image.url,
      alt: item.image.alt || "",
    })) ?? [];

  return (
    <section id="gallery" className={`${useTitle ? "" : "my-20"}`}>
      {useTitle && <h1 className="section-title">Gallery</h1>}

      {useButton ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {photos.slice(0, 4).map((photo, index) => (
              <div key={index} className="relative w-full h-48">
                <Image
                  src={photo.url}
                  alt={photo.alt}
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="mb-8">
              <div className="relative w-full h-96">
                <Image
                  src={photo.url}
                  alt={photo.alt}
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
              <p className="mt-2 para text-center">{photo.alt}</p>
            </div>
          ))}
        </div>
      )}

      {useButton && (
        <div className="mt-8 flex justify-center">
          <CtaButton text="More Photos" href="/gallery" />
        </div>
      )}
    </section>
  );
};

export default Gallery;
