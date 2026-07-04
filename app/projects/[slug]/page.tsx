import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Star, Info } from "lucide-react";

interface ProjectDetailData {
  name: string;
  developer: string;
  desc: string;
  longDesc: string;
  towers: string;
  units: string;
  sqm: string;
  year: string;
  challenges: string[];
  solutions: string[];
  imageUrl: string;
}

const projectRegistry: Record<string, ProjectDetailData> = {
  "casa-rio": {
    name: "Casa Rio",
    developer: "Lodha Group",
    desc: "Delivered 175 towers, encompassing 70,000+ units and 92,000 sqm of premium aluminum sliding and casement profiles.",
    longDesc: "Casa Rio represents one of our most expansive installations. With 175 residential towers built near the coastal regions of Mumbai, the main challenge was to deliver aluminum profile sections capable of preventing monsoon rain ingress and resisting high wind pressure, while maintaining smooth operation across 70,000+ individual units.",
    towers: "175 Towers",
    units: "70,000+ Units",
    sqm: "92,000 sqm",
    year: "2014 - 2017",
    challenges: [
      "Extremely tight developer timelines matching rapid tower construction.",
      "High coastal rain ingress risk due to the geographical location.",
      "Ensuring consistent quality standards across 70,000+ sliding window tracks.",
    ],
    solutions: [
      "Nesting and automated profile cutting lines operated at full capacity to match slab cast timelines.",
      "Engineered double EPDM weather-strip gaskets designed to seal tightly under high wind pressure.",
      "On-site installation leveling audits conducted by our dedicated inspection engineers.",
    ],
    imageUrl: "/images/projects/casa-rio.png",
  },
  "palava-city": {
    name: "Palava City",
    developer: "Lodha Group",
    desc: "Completed 92 towers (18 stories each), covering 82,000 units and 128,000 sqm of heavy-duty fenestration profiles.",
    longDesc: "Palava City required a major, coordinated production run. Delivering 92 towers of 18 stories each, we designed customized aluminum profile systems to manage thermal isolation and structural load balancing. The sheer volume required active coordination between our Mumbai manufacturing HQ and the development logistics teams.",
    towers: "92 Towers",
    units: "82,000+ Units",
    sqm: "128,000 sqm",
    year: "2017 - 2020",
    challenges: [
      "Managing logistically complex deliveries to match phase-wise handovers.",
      "Reducing heat loading across west-facing facades of 18-story towers.",
      "Delivering high structural safety values to prevent framework vibrations.",
    ],
    solutions: [
      "Phase-wise container packaging routed directly to specific tower drop sites.",
      "Custom profile frames supporting double glazing to minimize thermal ingress.",
      "Thick structural mullion shapes anchors certified for extreme wind ratings.",
    ],
    imageUrl: "/images/projects/palava-city.png",
  },
  "lodha-amara": {
    name: "Lodha Amara",
    developer: "Lodha Group",
    desc: "Delivered 17 towers (30 stories each) with 17,500 units and 48,000 sqm of thermal break window configurations.",
    longDesc: "Lodha Amara required high-rise specialized fenestration. Built to 30 stories, these towers experience significantly high wind loads. We supplied premium thermal break profiles with multi-point locks and acoustic double-glazing configurations to deliver a quiet, insulated high-rise residential experience.",
    towers: "17 Towers",
    units: "17,500+ Units",
    sqm: "48,000 sqm",
    year: "2020 - 2023 (and ongoing)",
    challenges: [
      "High wind shear forces at upper stories (up to 30 levels).",
      "Noise isolation demands near transit highways.",
      "High architectural demands for slim, minimalist frame styles.",
    ],
    solutions: [
      "Rigid structural calculations and WiWA certifications to verify window frame resistance up to 3.0 kPa.",
      "Acoustic damping frame sections matched with soundproof double glazing.",
      "Integrated slim window styles with hidden drainage channels to maintain exterior aesthetics.",
    ],
    imageUrl: "/images/projects/lodha-amara.png",
  },
};

export function generateStaticParams() {
  return [
    { slug: "casa-rio" },
    { slug: "palava-city" },
    { slug: "lodha-amara" },
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projectRegistry[resolvedParams.slug];
  return {
    title: `${project?.name || "Project"} Case Study`,
    description: project?.desc || "High-performance aluminum window installation case study.",
  };
}

export default async function ProjectDetail({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projectRegistry[resolvedParams.slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full font-sans">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://olympicwindows.in"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Projects",
                    "item": "https://olympicwindows.in/projects"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": project.name,
                    "item": `https://olympicwindows.in/projects/${resolvedParams.slug}`
                  }
                ]
              },
              {
                "@type": "CreativeWork",
                "name": `${project.name} Case Study`,
                "image": project.imageUrl,
                "description": project.desc,
                "creator": {
                  "@type": "Organization",
                  "name": "Olympic Windows"
                },
                "about": {
                  "@type": "Thing",
                  "name": "Aluminum Window Installation contract"
                }
              }
            ]
          })
        }}
      />
      
      {/* Header Panel */}
      <section className="bg-primary text-text-inverse py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(10, 17, 34, 0.95) 30%, rgba(10, 17, 34, 0.6) 100%), url(${project.imageUrl})`
          }}
        />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-6 md:px-10 w-full flex flex-col space-y-6 z-10">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-accent hover:text-accent-light text-xs font-accent font-bold uppercase transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Projects</span>
          </Link>
          <div className="flex flex-col space-y-3">
            <span className="text-accent font-accent font-semibold tracking-wider text-xs uppercase">
              Case Study
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{project.name}</h1>
            <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
              {project.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-surface py-20 border-b border-border-custom/30">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Story, Challenges & Solutions */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Project Image Preview */}
            <div className="aspect-video w-full relative bg-slate-900 border border-border-custom/40 rounded-sm overflow-hidden shadow-sm">
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: `url(${project.imageUrl})` }}
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            <div className="space-y-4 pt-4">
              <h2 className="text-2xl font-bold text-primary font-accent">Project Overview</h2>
              <div className="w-12 h-0.5 bg-accent" />
              <p className="text-text-secondary leading-relaxed text-base">{project.longDesc}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-border-custom/20">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-primary font-accent">Key Challenges</h3>
                <div className="flex flex-col space-y-3">
                  {project.challenges.map((chal, i) => (
                    <div key={i} className="flex items-start space-x-2 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-2" />
                      <span>{chal}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-primary font-accent">Our Solutions</h3>
                <div className="flex flex-col space-y-3">
                  {project.solutions.map((sol, i) => (
                    <div key={i} className="flex items-start space-x-2 text-sm text-text-secondary">
                      <Check className="h-4 w-4 text-accent shrink-0 mt-1" />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Quick Stats Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border border-border-custom/40 rounded-sm bg-surface-alt overflow-hidden shadow-sm">
              <div className="bg-primary text-text-inverse px-6 py-4 flex items-center space-x-2 border-b border-border-custom/20">
                <span className="font-accent font-bold text-sm uppercase tracking-wider">Project Factsheet</span>
              </div>
              <div className="divide-y divide-border-custom/30 text-xs text-text-secondary font-accent">
                <div className="flex justify-between p-4">
                  <span className="font-medium text-primary">Developer</span>
                  <span className="font-semibold text-right">{project.developer}</span>
                </div>
                <div className="flex justify-between p-4">
                  <span className="font-medium text-primary">Towers Built</span>
                  <span className="font-semibold text-right">{project.towers}</span>
                </div>
                <div className="flex justify-between p-4">
                  <span className="font-medium text-primary">Units Delivered</span>
                  <span className="font-semibold text-right">{project.units}</span>
                </div>
                <div className="flex justify-between p-4">
                  <span className="font-medium text-primary">Total Area</span>
                  <span className="font-semibold text-right">{project.sqm}</span>
                </div>
                <div className="flex justify-between p-4">
                  <span className="font-medium text-primary">Execution Timeline</span>
                  <span className="font-semibold text-right">{project.year}</span>
                </div>
              </div>
            </div>

            {/* Testimonial preview */}
            <div className="border border-border-custom/40 p-6 bg-surface-alt rounded-sm flex flex-col justify-between shadow-sm">
              <div className="flex space-x-1 text-accent mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-xs italic text-text-secondary leading-relaxed">
                "Our team observed high consistency across all window tracks. Delivered on time matching slab cast sequences."
              </p>
              <div className="border-t border-border-custom/30 pt-3 mt-4 text-[10px] text-text-muted">
                <p className="font-semibold text-primary">Lodha Technical Partnership Review</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA section */}
      <section className="bg-primary text-text-inverse py-16">
        <div className="mx-auto max-w-5xl px-6 text-center flex flex-col items-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Design Solutions at Scale</h2>
          <p className="text-text-muted max-w-md text-sm leading-relaxed">
            Need customized solutions for residential developments, towers, or curtain walls?
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-light text-white font-accent font-semibold px-8 py-4 rounded-sm transition-colors text-sm hover:shadow-lg active:scale-95 transition-transform"
          >
            Start Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
