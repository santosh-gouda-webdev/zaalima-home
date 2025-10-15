import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTeamDemo() {
  const team = [
    {
      quote:
        "Santosh is the driving force behind Zaalima Groups' strategic vision. With over 12 years in enterprise cloud solutions, he ensures the company stays ahead of industry trends.",
      name: "Santosh Gouda",
      designation: "Managing Director, Zaalima Groups",
      src: "/team1.jpg",
    },
    {
      quote:
        "Suraj leads product innovation and operations. His expertise in full-stack development and agile methodologies helps deliver world-class ERP and SaaS solutions.",
      name: "Suraj Adhikari",
      designation: "CEO, Zaalima Groups",
      src: "/team2.jpg",
    },
    {
      quote:
        "Archana champions employee growth and a vibrant company culture. She brings extensive experience in HR management and organizational development.",
      name: "Archana Mishra",
      designation: "Head of Human Resources, Zaalima Groups",
      src: "/team3.jpg",
    }
  ];

  return <AnimatedTestimonials testimonials={team} />;
}
