"use client";

import { RefreshCw, AlertOctagon } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[70vh] bg-surface flex flex-col items-center justify-center px-6 text-center font-sans">
      <div className="h-16 w-16 bg-red-100 text-red-600 flex items-center justify-center rounded-sm mb-6 border border-red-200">
        <AlertOctagon className="h-8 w-8" />
      </div>
      <h1 className="text-4xl font-bold text-primary tracking-tight font-accent">Something Went Wrong</h1>
      <p className="text-text-secondary mt-3 max-w-md text-sm leading-relaxed">
        An unexpected error occurred during execution. Please try resetting the layout or reload the page.
      </p>
      <div className="mt-8">
        <button
          onClick={() => reset()}
          className="bg-accent hover:bg-accent-light text-white font-accent font-semibold px-8 py-3.5 rounded-sm text-xs uppercase tracking-wider transition-all duration-200 inline-flex items-center space-x-2 shadow-sm active:scale-95 transition-transform"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Try Again</span>
        </button>
      </div>
    </div>
  );
}
