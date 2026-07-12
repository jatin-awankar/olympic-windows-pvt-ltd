import Link from "next/link";
import { legalNavLinks } from "@/data/legal";

interface LegalNavProps {
  activeHref: string;
}

export default function LegalNav({ activeHref }: LegalNavProps) {
  return (
    <aside className="lg:col-span-3">
      <div className="sticky top-28 flex flex-col space-y-2 border-l border-border-custom/40 pl-4 font-accent">
        <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider mb-2">Legal Documents</span>
        {legalNavLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`text-sm py-1.5 transition-colors duration-150 ${
              link.href === activeHref ? "text-accent font-semibold" : "text-text-secondary hover:text-accent"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </aside>
  );
}
