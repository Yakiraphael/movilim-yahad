import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "https://media.base44.com/images/public/user_68c7b2fde08fc5feb083ff75/5e8dd2737_.jpg";

const heroImages = [
{ url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/641314543_1.jpg", alt: "ישיבת פורום מובילים יחד" }];


export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="פתיח ראשי">
      {/* Carousel Background */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0">
          
          <img
            src={heroImages[currentImage].url}
            alt={heroImages[currentImage].alt}
            className="w-full h-full object-cover" />
          
        </motion.div>
      </AnimatePresence>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl">
          
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/b2d3a44a1_OIP-removebg-preview.png"
              alt="לוגו פורום מובילים יחד"
              className="h-32 md:h-44 w-auto object-contain drop-shadow-2xl hidden" />
            
          </div>

          <div className="inline-block bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6 shadow-lg">
            <span className="text-white font-medium text-sm" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}>ע"ר 580795821 | פורום מנהיגות ארצי</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8), 0 0 16px rgba(0,0,0,0.5)" }}>
            מובילים יחד:
            <br />
            <span className="text-green-400">מצמיחים את מנהיגי המחר</span>
            <br />
            במרחב הציבורי והפוליטי
          </h1>

          <p className="text-lg md:text-xl text-white leading-relaxed mb-10 max-w-2xl" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}>
            פלטפורמה עצמאית להעצמת צעירים וצעירות אקדמאים יוצאי אתיופיה לתפקידי מפתח במנהיגות ציבורית, מוניציפלית ופוליטית בישראל. מובילים יחד — להוביל, להשפיע, להצליח.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/about">
              <Button size="lg" className="bg-green-700 text-white hover:bg-green-800 font-bold text-base px-8 py-6 rounded-xl shadow-xl" style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.4)" }}>
                הכירו את הפורום
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="bg-blue-800 text-white hover:bg-blue-900 font-bold text-base px-8 py-6 rounded-xl shadow-xl" style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.4)" }}>
                הצטרפו לתוכנית
              </Button>
            </Link>
          </div>

          {/* Carousel dots */}
          <div className="flex gap-2 mt-8">
            {heroImages.map((_, i) =>
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === currentImage ? "w-8 bg-secondary" : "w-4 bg-white/30"}`}
              aria-label={`תמונה ${i + 1}`} />

            )}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>);

}