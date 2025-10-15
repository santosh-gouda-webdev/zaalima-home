"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { Link } from "react-router";

export function NavbarZaalima({children}: {children?: React.ReactNode}) {
  const navItems = [
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "About",
      link: "/#about",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Events",
      link: "/events",
    },
    {
      name: "Courses",
      link: "/courses",
    },
    {
      name: "Interns",
      link: "/interns",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to close mobile menu
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems 
            items={navItems} 
            onItemClick={closeMobileMenu} // Close menu when item clicked
          />
          <div className="flex items-center gap-4">
            <Link to="/careers">
              <NavbarButton variant="secondary">Careers</NavbarButton>
            </Link>
            <Link to="/get-a-quote">
              <NavbarButton variant="primary">Get Started</NavbarButton>
            </Link>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={closeMobileMenu}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                to={item.link}
                onClick={closeMobileMenu}
                className="relative text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors duration-200 w-full py-2"
              >
                <span className="block text-base font-medium">{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-3 mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
              <Link to="/careers" onClick={closeMobileMenu} className="w-full">
                <NavbarButton variant="secondary" className="w-full justify-center">
                  Careers
                </NavbarButton>
              </Link>
              <Link to="/get-a-quote" onClick={closeMobileMenu} className="w-full">
                <NavbarButton variant="primary" className="w-full justify-center">
                  Get Started
                </NavbarButton>
              </Link>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {children}
    </div>
  );
}