import MediaCard from "@/components/MediaCard";
import config from "@/data/newConfig.json";

export default function Movies({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="movies">
      {showHeading && (
        <>
          <p className="eyebrow">{"// movies & tv"}</p>
          <h1 className="page-title mt-1">Movies & TV</h1>
          <p className="para">Some of my all-time favorites.</p>
        </>
      )}

      <div className="mt-8 space-y-8">
        <div>
          <h2 className="eyebrow mb-3">{"// movies"}</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {config.movies.map((movie) => (
              <MediaCard
                key={movie.name}
                title={movie.name}
                href={movie.link}
                image={movie.image}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="eyebrow mb-3">{"// tv series"}</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {config.tvSeries.map((show) => (
              <MediaCard
                key={show.name}
                title={show.name}
                href={show.link}
                image={show.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
