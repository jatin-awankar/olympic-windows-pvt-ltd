import { Info, Download } from "lucide-react";
import { ProductDetail } from "@/data/products";

interface ProductFactsheetProps {
  product: ProductDetail;
}

export default function ProductFactsheet({ product }: ProductFactsheetProps) {
  return (
    <div className="lg:col-span-5 space-y-8">
      <div className="border border-border-custom/40 rounded-sm bg-surface-alt overflow-hidden shadow-sm">
        <div className="bg-primary text-text-inverse px-6 py-4 flex items-center space-x-2 border-b border-border-custom/20">
          <Info className="h-5 w-5 text-accent" />
          <span className="font-accent font-bold text-sm uppercase tracking-wider">Technical Specifications</span>
        </div>
        <div className="divide-y divide-border-custom/30 text-xs text-text-secondary font-accent">
          {Object.entries(product.specs).map(([key, value]) => (
            <div key={key} className="flex justify-between p-4">
              <span className="font-medium text-primary">{key}</span>
              <span className="text-right font-semibold">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Drawing Preview / Catalog Box */}
      <div className="border border-border-custom/40 p-6 bg-surface-alt rounded-sm flex flex-col justify-between h-[180px] shadow-sm">
        <div>
          <h4 className="text-xs uppercase tracking-wider text-accent font-bold font-accent">Product Documentation</h4>
          <p className="text-xs text-text-secondary mt-2 leading-relaxed">
            Download profile blueprints, acoustic charts, and certification tests.
          </p>
        </div>
        <div className="pt-4 mt-auto">
          <a
            href="/Catalogue.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full border border-accent hover:bg-accent text-accent hover:text-white py-3.5 rounded-sm text-xs font-accent font-semibold uppercase tracking-wider transition-colors inline-flex items-center justify-center space-x-2 active:scale-95 transition-transform"
          >
            <Download className="h-4 w-4" />
            <span>Full Catalog PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
}
