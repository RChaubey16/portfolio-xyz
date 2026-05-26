import Image from "next/image";

import CtaButton from "../others/CtaButton";

interface Photo {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

const photos: Photo[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&q=80",
    alt: "Mountain lake at sunrise",
    caption: "Golden hour over a still mountain lake somewhere in the Alps.",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=900&q=80",
    alt: "City lights at night",
    caption: "A city that never really sleeps — lights bleeding into the fog.",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&q=80",
    alt: "Forest trail in autumn",
    caption: "An autumn trail that felt like walking through a painting.",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=900&q=80",
    alt: "Waterfall in a jungle",
    caption: "Somewhere deep in the green — the sound before the sight.",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=900&q=80",
    alt: "Morning coffee and notebook",
    caption: "The ritual that starts every good day.",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=900&q=80",
    alt: "Polaroid camera on a table",
    caption: "Some moments are worth slowing down to capture.",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=900&q=80",
    alt: "Minimal desk workspace",
    caption: "Clean desk, clear mind — at least that's the theory.",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=900&q=80",
    alt: "Pastel sunrise over the ocean",
    caption: "Caught this one just before it disappeared.",
  },
];

const Photos = ({ slice = true }: { slice?: boolean }) => {
  const useSlice = slice && photos.length > 4;
  const visiblePhotos = useSlice ? photos.slice(0, 4) : photos;

  return (
    <section id="photos">
      {slice && <h2 className="text-2xl font-bold">Photos</h2>}

      {slice ? (
        <div className="mt-4 grid grid-cols-2 gap-3">
          {visiblePhotos.map((photo) => (
            <div key={photo.id} className="relative h-40 w-full overflow-hidden rounded-sm">
              <Image
                src={photo.src}
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
            <figure key={photo.id}>
              <div className="relative w-full overflow-hidden rounded-sm" style={{ aspectRatio: "3/2" }}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </div>
              <figcaption className="text-muted-foreground mt-2 text-center text-sm italic">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      {useSlice && (
        <div className="mt-8 flex justify-center">
          <CtaButton text="More Photos" href="/photos" />
        </div>
      )}
    </section>
  );
};

export default Photos;
