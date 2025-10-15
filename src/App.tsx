
import { Routes, Route } from "react-router"
import Home from './utils/Hero/Home'
import About from './utils/Hero/About'
import { NavbarZaalima } from './utils/Navbar'
import Footer from "./utils/Footer";
import MinimalistServiceWebsite from "./utils/company/GetAquote";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import CareersPage from "./utils/company/Careers";
import ServiceWebsiteEvent from "./utils/company/Event";
import Contact from "./utils/company/Contacts";
import ServicesPageProduct from "./utils/company/Products";
import CoursesPage from "./utils/company/Courses";
import InternHallOfFame from "./utils/company/Intern";
import ZaalimaServicesPage from "./utils/company/Services";
import ChatbotWidget from "./utils/chatbot/ChatbotWidget";
import PrivacyPage from "./utils/legal-documents/Privacy-Policy";
import RefundPage from "./utils/legal-documents/refund";
import TermsPage from "./utils/legal-documents/terms";
const App = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);
  return (
    <div>
       <NavbarZaalima >
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/get-a-quote" element={<MinimalistServiceWebsite />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/events" element={<ServiceWebsiteEvent />} />
        <Route path="/contact" element={<Contact isOpen={isOpen} setIsOpen={setIsOpen} />} />
        <Route path="/products" element={<ServicesPageProduct />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/interns" element={<InternHallOfFame />} />
        <Route path="/services" element={<ZaalimaServicesPage />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/refund-policy" element={<RefundPage />} />
        <Route path="/terms-of-service" element={<TermsPage />} />
      </Routes>
      </NavbarZaalima>
      <Footer />
      <ChatbotWidget isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default App