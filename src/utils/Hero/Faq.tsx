
import FaqAccordion from "../faq/faq-accordion";
import StatsSection from "../faq/stats-section";

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white" id="faq">
      {/* Header */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#4ca5ff_0%,#b673f8_50%,#ff6b9d_100%)] opacity-5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(76,165,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(182,115,248,0.1),transparent_50%)]" />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center max-w-5xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 mb-6">
            <span className="text-sm font-medium text-blue-700">💡 Expert IT Solutions</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-xl text-gray-600 sm:mt-5 md:mt-5 leading-relaxed">
            Find answers to the most common questions about our IT services and solutions.
            <span className="block mt-2 text-lg text-gray-500">
              Can't find what you're looking for? Our experts are here to help.
            </span>
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* FAQ Content */}
      <section className="container px-4 mx-auto max-w-5xl py-8 md:py-16">
        <FaqAccordion />
      </section>

   
    </div>
  )
}