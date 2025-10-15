"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
     <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Join Our Team of <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent text-5xl md:text-7xl font-extrabold mt-2 leading-tight">
                  Service Innovators
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Build meaningful careers while delivering exceptional services that transform businesses and communities
              </p>
            </>
          }
        >
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&h=720&fit=crop&crop=center&q=80"
            alt="Professional service team working together"
            height={720}
            width={1400}
            className="mx-auto rounded-3xl shadow-2xl object-cover h-full object-center border-4 border-white/20"
            draggable={false}
          />
        </ContainerScroll>
      </div>

  );
}
