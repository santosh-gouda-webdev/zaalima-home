import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export default function FeaturesSectionDemo2() {
  const features = [
    {
      title: "Developer-Friendly Solutions",
      description:
        "Our platforms and APIs are designed for engineers, making integrations smooth and efficient.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Seamless Implementation",
      description:
        "From onboarding to deployment, our IT services are simple to adopt with minimal learning curve.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Transparent Pricing",
      description:
        "Flexible plans that scale with your business needs, ensuring maximum value with no hidden charges.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Reliable Cloud Infrastructure",
      description:
        "Enterprise-grade cloud hosting and managed services with guaranteed uptime and performance.",
      icon: <IconCloud />,
    },
    {
      title: "Scalable Architecture",
      description:
        "Our multi-tenant systems allow you to expand effortlessly as your organization grows.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Technical Support",
      description:
        "Round-the-clock assistance from our expert team to keep your operations running smoothly.",
      icon: <IconHelp />,
    },
    {
      title: "Satisfaction Guarantee",
      description:
        "We’re confident in our services and back them with a risk-free satisfaction guarantee.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "End-to-End IT Services",
      description:
        "From consulting to deployment and maintenance, we cover every step of your digital journey.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
