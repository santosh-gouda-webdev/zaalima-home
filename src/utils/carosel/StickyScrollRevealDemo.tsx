"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Step 1: Take Your Assessment Test",
    description:
      "Begin your learning journey with our comprehensive assessment test. Evaluate your current knowledge, skills, and interests across various domains. Our intelligent testing system analyzes your strengths and identifies areas for improvement to recommend the perfect learning path tailored just for you.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          width={400}
          height={400}
          className="h-full w-full object-cover rounded-lg"
          alt="Student taking assessment test"
        />
      </div>
    ),
  },
  {
    title: "Step 2: Choose Your Perfect Course",
    description:
      "Based on your test results, discover courses specifically matched to your profile. Browse through our curated selection of programs designed to build upon your existing knowledge while addressing your learning goals. Each course recommendation comes with detailed insights about why it's perfect for your skill level and career aspirations.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          width={400}
          height={400}
          className="h-full w-full object-cover rounded-lg"
          alt="Students choosing courses together"
        />
      </div>
    ),
  },
  {
    title: "Step 3: Get Placed Successfully",
    description:
      "Complete your chosen course and leverage our comprehensive placement support. Our dedicated placement team works with industry partners to connect you with opportunities that match your newly acquired skills. From resume building to interview preparation, we ensure you're ready to launch your career with confidence.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80"
          width={400}
          height={400}
          className="h-full w-full object-cover rounded-lg"
          alt="Professional handshake - successful job placement"
        />
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}