import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HERO_IMAGE = "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/b698a9def_generated_b9e299d8.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="פתיח ראשי">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="חברי פורום מובילים יחד בפעילות מנהיגותית"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/90 via-primary/75 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-block bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-secondary text-sm font-medium">ע"ר 580795821</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            מובילים יחד:
            <br />
            <span className="text-secondary">מצמיחים את מנהיגי המחר</span>
            <br />
            במרחב הציבורי והפוליטי
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
            פלטפורמה עצמאית להעצמת צעירים וצעירות אקדמאים יוצאי אתיופיה לתפקידי מפתח במנהיגות ציבורית, מוניציפלית ופוליטית בישראל.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/about">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-base px-8 py-6 rounded-xl">
                הכירו את הפורום
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold text-base px-8 py-6 rounded-xl">
                הצטרפו לתוכנית
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}