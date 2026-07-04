export default function Loading() {
  return (
    <div className="min-h-[60vh] bg-surface flex flex-col items-center justify-center font-sans">
      <div className="relative flex items-center justify-center">
        {/* Outer Ring */}
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
        {/* Inner static logo placeholder styling */}
        <div className="absolute font-accent text-[9px] font-bold tracking-widest text-primary uppercase">
          OW
        </div>
      </div>
      <p className="mt-4 text-xs font-accent text-text-secondary uppercase tracking-[0.25em] animate-pulse">
        Loading Specifications...
      </p>
    </div>
  );
}
