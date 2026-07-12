import { Check } from "lucide-react";
import { ProductDetail } from "@/data/products";

interface ProductOverviewProps {
  product: ProductDetail;
}

export default function ProductOverview({ product }: ProductOverviewProps) {
  return (
    <div className="lg:col-span-7 space-y-8">
      {/* Styled Image Preview */}
      <div className="aspect-video w-full relative bg-slate-900 border border-border-custom/40 rounded-sm overflow-hidden shadow-sm">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${product.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="space-y-4 pt-4">
        <h2 className="text-2xl font-bold text-primary font-accent">System Overview</h2>
        <div className="w-12 h-0.5 bg-accent" />
        <p className="text-text-secondary leading-relaxed text-base">{product.longDesc}</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-primary font-accent">Key Performance Features</h3>
        <div className="flex flex-col space-y-3">
          {product.features.map((feat, i) => (
            <div key={i} className="flex items-start space-x-3 text-sm text-text-secondary">
              <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Finishes & Applications Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-border-custom/20">
        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-wider text-accent font-bold font-accent">
            Available Finishes
          </h4>
          <ul className="space-y-2 text-xs text-text-secondary">
            {product.finishes.map((fin) => (
              <li key={fin} className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-accent rounded-full shrink-0" />
                <span>{fin}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-wider text-accent font-bold font-accent">
            Recommended Applications
          </h4>
          <ul className="space-y-2 text-xs text-text-secondary">
            {product.applications.map((app) => (
              <li key={app} className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-accent rounded-full shrink-0" />
                <span>{app}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
