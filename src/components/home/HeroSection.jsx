import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "https://media.base44.com/images/public/user_68c7b2fde08fc5feb083ff75/5e8dd2737_.jpg";

const heroImages = [
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/2a507cbc3_DSC_4236JPG.jpg", alt: "ישיבת פורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/e978e12d7_DSC_4424.jpg", alt: "אירוע הפורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/d81dacf65_Screenshot_20250211_094043_Chrome1.jpg", alt: "ועדת כנסת" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/955f85946_SE02-8557-.jpg", alt: "טקס הוקרה" },
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
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
          className="absolute inset-0"
        >
          <img
            src={heroImages[currentImage].url}
            alt={heroImages[currentImage].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-l from-primary/98 via-primary/92 to-primary/85 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Logo removed from hero — moved to navbar only */}

          <div className="inline-block bg-white/15 backdrop-blur-md border border-white/30 rounded-full px-4 py-1.5 mb-6 shadow-lg">
            <span className="text-white font-medium text-sm drop-shadow-md">ע"ר 580795821 | פורום מנהיגות ארצי</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg leading-tight mb-6">
            מובילים יחד:
            <br />
            <span className="text-secondary">מצמיחים את מנהיגי המחר</span>
            <br />
            במרחב הציבורי והפוליטי
          </h1>

          <p className="text-lg md:text-xl text-white drop-shadow-md leading-relaxed mb-10 max-w-2xl">
            פלטפורמה עצמאית להעצמת צעירים וצעירות אקדמאים יוצאי אתיופיה לתפקידי מפתח במנהיגות ציבורית, מוניציפלית ופוליטית בישראל. מובילים יחד — להוביל, להשפיע, להצליח.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/about">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-base px-8 py-6 rounded-xl shadow-lg shadow-secondary/25">
                הכירו את הפורום
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 font-semibold text-base px-8 py-6 rounded-xl">
                הצטרפו לתוכנית
              </Button>
            </Link>
          </div>

          {/* Carousel dots */}
          <div className="flex gap-2 mt-8">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentImage ? "w-8 bg-secondary" : "w-4 bg-white/30"}`}
                aria-label={`תמונה ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
}