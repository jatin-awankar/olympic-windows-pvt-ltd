export interface ProcessStep {
  step: string;
  iconName: "MessageSquare" | "Settings" | "CheckCircle2" | "Hammer" | "Activity";
  title: string;
  desc: string;
}

export const processes: ProcessStep[] = [
  {
    step: "01",
    iconName: "MessageSquare",
    title: "Design & Optimization Consultation",
    desc: "We analyze structural drawings, calculate wind load dynamics, and optimize window shapes to satisfy aesthetic architectural goals while reducing material waste.",
  },
  {
    step: "02",
    iconName: "Settings",
    title: "Precision Manufacturing",
    desc: "Profiles are fabricated at our Mumbai facilities using automated cutting and CNC routing machinery, ensuring structural tolerances of less than 0.5mm.",
  },
  {
    step: "03",
    iconName: "CheckCircle2",
    title: "Performance Compliance Testing",
    desc: "We test sample setups in specialized water chambers and pressure rigs to verify weather sealing, thermal values, and sound insulation specifications.",
  },
  {
    step: "04",
    iconName: "Hammer",
    title: "On-Site Installation",
    desc: "Our field engineers install and level the window systems using premium sealants and hardware, ensuring operational safety and structural alignment.",
  },
  {
    step: "05",
    iconName: "Activity",
    title: "Maintenance & AMC Support",
    desc: "We offer comprehensive annual maintenance contract (AMC) support, regular gasket inspections, and hardware checks for long-term smooth operation.",
  },
];
