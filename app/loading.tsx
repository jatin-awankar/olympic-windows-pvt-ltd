export default function Loading() {
  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center font-sans">
      <div className="relative flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
      <p className="mt-4 text-xs font-accent text-text-secondary uppercase tracking-[0.25em] animate-pulse">
        Loading...
      </p>
    </div>
  );
}
