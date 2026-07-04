import Link from "next/link";
import { ArrowRight, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-surface flex flex-col items-center justify-center px-6 text-center font-sans">
      <div className="h-16 w-16 bg-accent/10 text-accent flex items-center justify-center rounded-sm mb-6 border border-accent/20">
        <AlertTriangle className="h-8 w-8" />
      </div>
      <h1 className="text-4xl font-bold text-primary tracking-tight font-accent">404 - Page Not Found</h1>
      <p className="text-text-secondary mt-3 max-w-md text-sm leading-relaxed">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="bg-accent hover:bg-accent-light text-white font-accent font-semibold px-8 py-3.5 rounded-sm text-xs uppercase tracking-wider transition-all duration-200 shadow-sm active:scale-95 transition-transform"
        >
          Go Back Home
        </Link>
        <Link
          href="/contact"
          className="border border-border-custom hover:border-accent text-primary hover:text-accent font-accent font-semibold px-8 py-3.5 rounded-sm text-xs uppercase tracking-wider transition-all duration-200 active:scale-95 transition-transform inline-flex items-center space-x-2"
        >
          <span>Contact Technical Support</span>
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}
