interface ChatResponse {
  text: string
  buttons?: Array<{
    text: string
    action: "link" | "message"
    value: string
  }>
}

export const getChatResponse = (userInput: string): ChatResponse => {
  const input = userInput.toLowerCase()

  // Greeting responses
  if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
    return {
      text: "Hello! Welcome to Zaalima - your trusted IT service partner. I'm here to help you learn about our innovative solutions and exciting internship opportunities. What would you like to know?",
      buttons: [
        { text: "Apply for Internship", action: "link", value: "/careers" },
        { text: "Our Services", action: "message", value: "Tell me about your services" },
        { text: "Company Info", action: "message", value: "Tell me about Zaalima" },
      ],
    }
  }

  // Company information
  if (input.includes("about") || input.includes("company") || input.includes("zaalima")) {
    return {
      text: "Zaalima is a leading IT service company founded with a vision to transform businesses through innovative technology solutions. We specialize in:\n\n🚀 Digital Transformation\n💻 Custom Software Development\n🌐 Web & Mobile Applications\n☁️ Cloud Solutions\n🔧 IT Consulting\n\nOur team of expert developers and consultants work with cutting-edge technologies to deliver exceptional results for our clients worldwide.",
      buttons: [
        { text: "Join Our Team", action: "link", value: "/careers" },
        { text: "Our Technologies", action: "message", value: "What technologies do you use?" },
        { text: "Internship Program", action: "message", value: "Tell me about internships" },
      ],
    }
  }

  // Technology stack inquiry
  if (input.includes("technology") || input.includes("tech stack") || input.includes("programming")) {
    return {
      text: "We work with modern, industry-leading technologies:\n\n🔥 Frontend: React, Vue.js, Angular, TypeScript\n⚡ Backend: Node.js, Python, Java, .NET\n📱 Mobile: React Native, Flutter\n☁️ Cloud: AWS, Azure, Google Cloud\n🗄️ Databases: MongoDB, PostgreSQL, MySQL\n🔧 DevOps: Docker, Kubernetes, CI/CD\n\nOur interns get hands-on experience with these cutting-edge technologies!",
      buttons: [
        { text: "Apply for Internship", action: "link", value: "/careers" },
        { text: "Learning Path", action: "message", value: "What will I learn as an intern?" },
        { text: "Projects", action: "message", value: "What projects do interns work on?" },
      ],
    }
  }

  // FAQ responses
  if (input.includes("faq") || input.includes("frequently asked") || input.includes("common questions")) {
    return {
      text: "Here are some frequently asked questions about our internship program:\n\n❓ Duration: 3-6 months (flexible)\n💰 Stipend: Competitive compensation\n📍 Location: Remote/Hybrid options available\n🎓 Requirements: CS/IT students or recent graduates\n📚 Training: Comprehensive mentorship program\n🏆 Certification: Industry-recognized certificates\n\nAny specific questions?",
      buttons: [
        { text: "Apply Now", action: "link", value: "/careers" },
        { text: "Requirements", action: "message", value: "What are the detailed requirements?" },
        { text: "Application Process", action: "message", value: "How do I apply?" },
      ],
    }
  }

  // Services inquiry
  if (input.includes("service") || input.includes("what do you do") || input.includes("solutions")) {
    return {
      text: "Zaalima offers comprehensive IT services to help businesses thrive in the digital age:\n\n🌐 Web Development - Modern, responsive websites\n📱 Mobile App Development - iOS & Android apps\n☁️ Cloud Solutions - Scalable infrastructure\n🔧 Software Consulting - Technical expertise\n🚀 Digital Transformation - Complete modernization\n💼 Enterprise Solutions - Custom business software\n\nWe're always looking for talented interns to join our innovative projects!",
      buttons: [
        { text: "Apply for Internship", action: "link", value: "/careers" },
        { text: "Project Examples", action: "message", value: "Show me project examples" },
        { text: "Internship Benefits", action: "message", value: "What are the internship benefits?" },
      ],
    }
  }

  // Internship inquiry
  if (input.includes("internship") || input.includes("intern") || input.includes("career") || input.includes("job")) {
    return {
      text: "Our internship program is designed to launch your tech career:\n\n✨ Real-world project experience\n👥 1-on-1 mentorship with senior developers\n📚 Structured learning path\n🎯 Portfolio-worthy projects\n💰 Competitive stipend\n🏆 Industry certifications\n🚀 Full-time job opportunities\n\nReady to start your journey with us?",
      buttons: [
        { text: "Apply Now", action: "link", value: "/careers" },
        { text: "Requirements", action: "message", value: "What are the requirements?" },
        { text: "Success Stories", action: "message", value: "Tell me about past interns" },
      ],
    }
  }

  // Requirements inquiry
  if (input.includes("requirement") || input.includes("qualification") || input.includes("eligibility")) {
    return {
      text: "Internship Requirements:\n\n🎓 Education: Currently pursuing or recently completed CS/IT/Engineering degree\n💻 Skills: Basic programming knowledge (any language)\n🔥 Attitude: Passion for learning and technology\n⏰ Availability: 3-6 months commitment\n🤝 Communication: Good English communication skills\n🌟 Bonus: Personal projects or GitHub portfolio\n\nWe welcome freshers and provide comprehensive training!",
      buttons: [
        { text: "Apply for Internship", action: "link", value: "/careers" },
        { text: "Application Process", action: "message", value: "How do I apply?" },
        { text: "Training Program", action: "message", value: "What training do you provide?" },
      ],
    }
  }

  // Application process
  if (input.includes("apply") || input.includes("application") || input.includes("how to join")) {
    return {
      text: "Application Process:\n\n1️⃣ Submit your application through our careers page\n2️⃣ Initial screening call (15-20 minutes)\n3️⃣ Technical assessment (coding challenge)\n4️⃣ Final interview with our team\n5️⃣ Offer and onboarding\n\nThe entire process takes 1-2 weeks. We'll keep you updated at every step!",
      buttons: [
        { text: "Apply Now", action: "link", value: "/careers" },
        { text: "Preparation Tips", action: "message", value: "How should I prepare?" },
        { text: "Contact HR", action: "message", value: "I need help with my application" },
      ],
    }
  }

  // Benefits inquiry
  if (input.includes("benefit") || input.includes("perks") || input.includes("what do I get")) {
    return {
      text: "Internship Benefits:\n\n💰 Competitive monthly stipend\n📚 Free access to premium learning resources\n🏆 Industry-recognized certificates\n👥 Networking opportunities\n💻 Latest development tools and software\n🎯 Portfolio-building projects\n🚀 Potential full-time job offer\n🌟 Letter of recommendation\n\nInvest in your future with Zaalima!",
      buttons: [
        { text: "Apply for Internship", action: "link", value: "/careers" },
        { text: "Success Stories", action: "message", value: "Tell me about past interns" },
        { text: "More Questions", action: "message", value: "I have more questions" },
      ],
    }
  }

  // Contact/Help
  if (input.includes("contact") || input.includes("help") || input.includes("support")) {
    return {
      text: "Need help? Here's how to reach us:\n\n📧 Email: info@zaalima.in\n📞 Phone: +91 8277035909\n🌐 Website: www.zaalima.in\n💼 LinkedIn: /company/zaalimadev/\n\nOur HR team typically responds within 24 hours. For immediate assistance with internship applications, feel free to ask me more questions!",
      buttons: [
        { text: "Apply for Internship", action: "link", value: "/careers" },
        { text: "Technical Questions", action: "message", value: "I have technical questions" },
        { text: "Start Over", action: "message", value: "Tell me about Zaalima" },
      ],
    }
  }

  // Default response - always includes company info and internship CTA
  return {
    text: "Thanks for your interest in Zaalima! We're a leading IT service company specializing in web development, mobile apps, and cloud solutions. We're passionate about innovation and always looking for talented individuals to join our team.\n\nOur internship program offers hands-on experience with cutting-edge technologies, mentorship from industry experts, and the opportunity to work on real-world projects.\n\nHow can I help you learn more about our opportunities?",
    buttons: [
      { text: "Apply for Internship", action: "link", value: "/careers" },
      { text: "Our Services", action: "message", value: "Tell me about your services" },
      { text: "FAQ", action: "message", value: "Show me frequently asked questions" },
    ],
  }
}
