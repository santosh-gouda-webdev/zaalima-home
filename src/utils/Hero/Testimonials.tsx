import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTeamDemo() {
  const team = [
  
    {
      quote:
        "Suraj leads product innovation and operations. His expertise in full-stack development and agile methodologies helps deliver world-class ERP and SaaS solutions.",
      name: "Suraj Adhikari",
      designation: "CEO, Zaalima Groups",
      src: "https://certificate-verification.zaalima.in/1400.jpg",
    },
    {
      quote:
        "Santosh Gouda, Managing Director of Zaalima Groups, drives the company’s strategic growth with over four years of experience in enterprise cloud solutions. His forward-thinking approach ensures Zaalima Groups remains a leader in innovation and technological excellence.",
      name: "Santosh Gouda",
      designation: "Managing Director, Zaalima Groups",
      src: "https://certificate-verification.zaalima.in/1401.jpg",
    },
    {
      quote:
        "Archana champions employee growth and a vibrant company culture. She brings extensive experience in HR management and organizational development.",
      name: "Archana Mishra",
      designation: "Head of Human Resources, Zaalima Groups",
      src: "https://certificate-verification.zaalima.in/1402.jpg",
    }
  ];

  return <AnimatedTestimonials testimonials={team} />;
}
