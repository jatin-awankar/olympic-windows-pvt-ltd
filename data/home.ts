export interface HeroSlide {
  title: string;
  desc: string;
  bgImage: string;
  btnText: string;
  btnHref: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface WhyChooseUsItem {
  iconName: "Factory" | "Truck" | "Handshake" | "PencilRuler" | "ShieldCheck" | "Leaf";
  title: string;
  desc: string;
}

export interface ProductShowcaseItem {
  title: string;
  desc: string;
  href: string;
  imageUrl: string;
}

export interface FeaturedProjectItem {
  name: string;
  desc: string;
  stat: string;
  href: string;
  imageUrl: string;
}

export const heroSlides: HeroSlide[] = [
  {
    title: "Setting New Standards in Aluminum Windows and Doors",
    desc: "A European-based company, bringing cutting-edge design and technology to India.",
    bgImage: "/images/hero/slide-1.webp",
    btnText: "Read More",
    btnHref: "/about",
  },
  {
    title: "Trusted by Lodha Group",
    desc: "Delivering Excellence Across Iconic Projects.",
    bgImage: "/images/hero/slide-2.webp",
    btnText: "Explore Our Projects",
    btnHref: "/projects",
  },
  {
    title: "Engineered to Perfection – Our Premium Range of Windows and Doors",
    desc: "Tailored solutions designed for every space, ensuring durability, performance, and aesthetic excellence.",
    bgImage: "/images/hero/slide-3.webp",
    btnText: "View Products",
    btnHref: "/products",
  },
  {
    title: "Women Empowerment & Sustainable Recycling",
    desc: "We are committed to Environmental Responsibility and Innovative Recycling Practices.",
    bgImage: "/images/hero/slide-4.webp",
    btnText: "View More",
    btnHref: "/impact",
  },
  {
    title: "Elevate Your Spaces with European-Standard Aluminum Windows & Doors",
    desc: "Custom Designs • European Standards • High Durability",
    bgImage: "/images/hero/slide-5.webp",
    btnText: "Contact Us",
    btnHref: "/contact",
  },
  {
    title: "Uncompromised Quality, Certified Performance",
    desc: "Engineered and certified for high-rise wind resistance, absolute watertightness, and superior sound damping.",
    bgImage: "/images/hero/slide-6.webp",
    btnText: "Our Specifications",
    btnHref: "/services",
  },
];

export const stats: StatItem[] = [
  { value: "100k+", label: "Units Delivered" },
  { value: "100%", label: "Safety Compliance" },
  { value: "10+", label: "Years of Excellence" },
];

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    iconName: "Factory",
    title: "European Standards Manufacturing",
    desc: "Rooted in European standards, we bring precision engineering and timeless design to aluminum windows and doors.",
  },
  {
    iconName: "Truck",
    title: "Reliable and Timely Delivery",
    desc: "With a monthly production capacity of 7,500 units, we consistently meet our clients' timelines and expectations.",
  },
  {
    iconName: "Handshake",
    title: "Trusted by Industry Leaders",
    desc: "Our partnership with the Lodha Group and other renowned clients stands as a testament to our commitment to quality and innovation.",
  },
  {
    iconName: "PencilRuler",
    title: "Innovative Designs, Custom Solutions",
    desc: "Our customizable window and door systems are designed to meet the unique needs of our clients, offering solutions that blend functionality and style seamlessly.",
  },
  {
    iconName: "ShieldCheck",
    title: "Strict Quality Control",
    desc: "With a skilled workforce, regular quality assessments, and the latest tools and technologies, we ensure exceptional precision and performance in every product we deliver.",
  },
  {
    iconName: "Leaf",
    title: "Sustainability Commitment",
    desc: "We follow eco-friendly manufacturing processes and are dedicated to contributing to a sustainable future.",
  },
];

export const products: ProductShowcaseItem[] = [
  {
    title: "Aluminum Windows",
    desc: "We provide a huge variety of window frames according to our client's design and order, combining sliding and openable features.",
    href: "/products/aluminum-windows",
    imageUrl: "/images/products/aluminum-windows.webp",
  },
  {
    title: "Aluminum Doors",
    desc: "Heavy-duty sliding, glazed, folding, and swing doors offering smooth operations, structural durability, and robust security.",
    href: "/products/aluminum-doors",
    imageUrl: "/images/products/aluminum-doors.webp",
  },
  {
    title: "Facades & Curtain Walls",
    desc: "High-performance structural glass facades engineered for extreme wind resistance and modern architectural aesthetics.",
    href: "/products/facades",
    imageUrl: "/images/products/facades.webp",
  },
  {
    title: "Aluminum Fins",
    desc: "Premium solar shading and louvers profiles combining structural thermal efficiency with sleek geometric elegance.",
    href: "/products/aluminum-fins",
    imageUrl: "/images/products/aluminum-fins.webp",
  },
];

export const projects: FeaturedProjectItem[] = [
  {
    name: "Casa Rio",
    desc: "Delivered 175 towers, encompassing 70,000+ units and 92,000 sqm of fenestration.",
    stat: "175 Towers",
    href: "/projects/casa-rio",
    imageUrl: "/images/projects/casa-rio.webp",
  },
  {
    name: "Palava City",
    desc: "Completed 92 towers (18 stories each), covering 82,000 units and 128,000 sqm.",
    stat: "92 Towers",
    href: "/projects/palava-city",
    imageUrl: "/images/projects/palava-city.webp",
  },
  {
    name: "Lodha Amara",
    desc: "Delivered 17 towers (30 stories each) with 17,500 units and 48,000 sqm, plus ongoing phases.",
    stat: "17 Towers",
    href: "/projects/lodha-amara",
    imageUrl: "/images/projects/lodha-amara.webp",
  },
];

export const testimonial = {
  quote: "Olympic Windows has consistently demonstrated exceptional engineering capacity and precision manufacturing. Their systems deliver wind and monsoon proofing required for towering residential buildings in coastal cities like Mumbai.",
  author: "Lodha Technical Partnership Review",
  title: "Palava City Projects Management Office",
};
