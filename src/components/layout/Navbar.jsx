import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/b2d3a44a1_OIP-removebg-preview.png";

const navLinks = [
{ label: "דף הבית", path: "/" },
{ label: "אודותינו", path: "/about" },
{ label: "ההנהגה והצוות", path: "/team" },
{ label: "צור קשר", path: "/contact" }];


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
      isScrolled ?
      "bg-white shadow-lg border-b border-border" :
      "bg-primary/90 backdrop-blur-sm"}`
      }
      role="banner">
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="ניווט ראשי">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" aria-label="פורום מובילים יחד - דף הבית">
            <img
              src={LOGO_URL}
              alt="לוגו פורום מובילים יחד"
              className="h-10 md:h-14 w-auto object-contain" />
            
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isScrolled
                ? (location.pathname === link.path ? "text-secondary font-bold" : "text-foreground hover:text-secondary")
                : (location.pathname === link.path ? "text-secondary bg-white/10" : "text-primary-foreground/80 hover:text-secondary hover:bg-white/5")
              }`
              }>
              
                {link.label}
              </Link>
            )}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button className={`font-semibold px-6 ${isScrolled ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-secondary-foreground hover:bg-secondary/90"}`}>
                הצטרפו אלינו
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-label={isMobileOpen ? "סגירת תפריט" : "פתיחת תפריט"}>
            
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-primary/98 backdrop-blur-md border-t border-white/10">
          
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) =>
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
              location.pathname === link.path ?
              "text-secondary bg-white/10" :
              "text-primary-foreground/80 hover:text-secondary"}`
              }>
              
                  {link.label}
                </Link>
            )}
              <Link to="/contact" className="block pt-2">
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
                  הצטרפו אלינו
                </Button>
              </Link>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}