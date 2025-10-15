"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

// FAQ data organized by categories with enhanced content
const faqData = [
  {
    category: "General",
    icon: "🏢",
    color: "bg-blue-100 text-blue-700",
    questions: [
      {
        id: "q1",
        question: "What IT services does your company offer?",
        answer:
          "We offer a comprehensive range of IT services including cloud solutions, cybersecurity, IT infrastructure management, software development, data analytics, and digital transformation consulting. Our solutions are tailored to meet the specific needs of businesses across various industries, from startups to enterprise-level organizations.",
        tags: ["Services", "Overview"],
      },
      {
        id: "q2",
        question: "How can your IT solutions benefit my business?",
        answer:
          "Our IT solutions can help streamline your operations, enhance security, reduce costs, improve productivity, and drive innovation. By leveraging the latest technologies and best practices, we enable businesses to stay competitive in the digital landscape and achieve their strategic objectives. We focus on ROI-driven solutions that deliver measurable results.",
        tags: ["Benefits", "ROI"],
      },
      {
        id: "q3",
        question: "Do you serve small businesses or only enterprise clients?",
        answer:
          "We serve businesses of all sizes, from small startups to large enterprises. Our solutions are scalable and can be customized to fit the specific requirements and budget constraints of any organization, regardless of its size or industry. We believe every business deserves access to enterprise-grade IT solutions.",
        tags: ["Business Size", "Scalability"],
      },
    ],
  },
  {
    category: "Services & Solutions",
    icon: "⚙️",
    color: "bg-purple-100 text-purple-700",
    questions: [
      {
        id: "q4",
        question: "What cloud services do you provide?",
        answer:
          "We provide a full spectrum of cloud services including cloud migration, cloud infrastructure setup and management, SaaS implementation, hybrid cloud solutions, cloud security, and cloud optimization. We work with major cloud providers like AWS, Azure, and Google Cloud to ensure you get the best solution for your needs.",
        tags: ["Cloud", "AWS", "Azure"],
      },
      {
        id: "q5",
        question: "How do you approach cybersecurity?",
        answer:
          "Our cybersecurity approach is comprehensive and proactive. We conduct thorough security assessments, implement robust security measures, provide employee training, monitor for threats 24/7, respond to incidents quickly, and ensure compliance with relevant regulations. Our goal is to protect your digital assets and minimize security risks through a multi-layered defense strategy.",
        tags: ["Security", "Compliance", "24/7 Monitoring"],
      },
      {
        id: "q6",
        question: "Can you help with custom software development?",
        answer:
          "Yes, we offer custom software development services to create tailored solutions that address your unique business challenges. Our development team follows agile methodologies and uses cutting-edge technologies to deliver high-quality, scalable, and secure software applications. We specialize in web applications, mobile apps, and enterprise software solutions.",
        tags: ["Development", "Custom Software", "Agile"],
      },
    ],
  },
  {
    category: "Pricing & Support",
    icon: "💰",
    color: "bg-green-100 text-green-700",
    questions: [
      {
        id: "q7",
        question: "How is your pricing structured?",
        answer:
          "Our pricing is transparent and flexible, designed to provide value for your investment. We offer various pricing models including project-based, subscription-based, and hourly rates. We'll work with you to determine the most suitable pricing structure based on your requirements and budget. All quotes include detailed breakdowns with no hidden fees.",
        tags: ["Pricing", "Transparent", "Flexible"],
      },
      {
        id: "q8",
        question: "What kind of support do you provide after implementation?",
        answer:
          "We provide comprehensive post-implementation support including 24/7 technical assistance, regular maintenance, system updates, performance monitoring, and user training. Our support team is available via multiple channels including phone, email, and live chat to address any issues promptly and ensure the continued optimal performance of your IT systems.",
        tags: ["Support", "24/7", "Maintenance"],
      },
      {
        id: "q9",
        question: "Do you offer service level agreements (SLAs)?",
        answer:
          "Yes, we offer customizable SLAs that define the scope, quality, and responsiveness of our services. Our SLAs include metrics like uptime guarantees (99.9%), response times (within 2 hours for critical issues), and resolution times, providing you with peace of mind and ensuring accountability on our part.",
        tags: ["SLA", "Uptime", "Response Time"],
      },
    ],
  },
  {
    category: "Process & Methodology",
    icon: "🔄",
    color: "bg-orange-100 text-orange-700",
    questions: [
      {
        id: "q10",
        question: "How do you ensure the quality of your services?",
        answer:
          "We maintain high quality standards through rigorous testing, adherence to industry best practices, continuous improvement processes, regular audits, and client feedback mechanisms. Our team consists of certified professionals who stay updated with the latest technologies and methodologies. We also follow ISO standards and maintain various industry certifications.",
        tags: ["Quality", "Testing", "Certifications"],
      },
      {
        id: "q11",
        question: "What is your project management approach?",
        answer:
          "We follow agile project management methodologies that emphasize collaboration, flexibility, and iterative development. This approach allows us to adapt to changing requirements, deliver value incrementally, and maintain transparent communication throughout the project lifecycle. We use tools like Jira, Slack, and regular sprint reviews to keep you informed.",
        tags: ["Agile", "Project Management", "Communication"],
      },
      {
        id: "q12",
        question: "How do you handle data privacy and compliance?",
        answer:
          "We take data privacy and compliance very seriously. We implement robust data protection measures, follow relevant regulations (such as GDPR, HIPAA, SOX, etc.), conduct regular compliance audits, and provide comprehensive documentation to help you meet your compliance obligations. All our processes are designed with privacy-by-design principles.",
        tags: ["Privacy", "GDPR", "Compliance"],
      },
    ],
  },
]

export default function FaqAccordion() {
  const [openCategory, setOpenCategory] = useState<string>("General")

  return (
    <div className="space-y-10">
      {/* Category tabs */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {faqData.map((category) => (
          <button
            key={category.category}
            onClick={() => setOpenCategory(category.category)}
            className={`px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              openCategory === category.category
                ? "bg-gray-900 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg border border-gray-200"
            }`}
          >
            <span className="text-lg">{category.icon}</span>
            {category.category}
          </button>
        ))}
      </div>

      {/* FAQ accordions by category */}
      {faqData.map((category) => (
        <div
          key={category.category}
          className={`transition-all duration-500 ${openCategory === category.category ? "block" : "hidden"}`}
        >
          <div className="text-center mb-8">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${category.color} mb-4`}>
              <span className="text-xl">{category.icon}</span>
              <span className="font-medium">{category.category} Questions</span>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {category.questions.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white"
              >
                <AccordionTrigger className="px-8 py-6 hover:bg-gray-50 text-left font-semibold text-gray-800 text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-gray-50/50 text-gray-700 leading-relaxed">
                  {item.answer}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  )
}