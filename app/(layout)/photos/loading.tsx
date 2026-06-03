export default function PhotosLoading() {
  return (
    <section className="bg-background py-20">
      <div className="mb-12">
        <div className="bg-muted h-10 w-32 animate-pulse rounded-md" />
        <div className="bg-muted mt-3 h-4 w-72 animate-pulse rounded-md" />
      </div>
      <div className="flex flex-col gap-10">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-muted w-full animate-pulse rounded-sm" style={{ aspectRatio: '3/2' }} />
        ))}
      </div>
    </section>
  )
}
