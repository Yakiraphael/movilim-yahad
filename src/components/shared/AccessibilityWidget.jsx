import React, { useState } from "react";
import { Accessibility, X, ZoomIn, ZoomOut, Contrast, Type } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  const increaseFontSize = () => {
    const next = Math.min(fontSize + 10, 150);
    setFontSize(next);
    document.documentElement.style.fontSize = `${next}%`;
  };

  const decreaseFontSize = () => {
    const next = Math.max(fontSize - 10, 80);
    setFontSize(next);
    document.documentElement.style.fontSize = `${next}%`;
  };

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    document.documentElement.classList.toggle("dark");
  };

  const resetAll = () => {
    setFontSize(100);
    setHighContrast(false);
    document.documentElement.style.fontSize = "100%";
    document.documentElement.classList.remove("dark");
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-secondary text-secondary-foreground shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="תפריט נגישות"
        title="נגישות"
      >
        <Accessibility className="w-7 h-7" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 left-6 z-50 bg-card border border-border rounded-xl shadow-2xl p-5 w-72"
            role="dialog"
            aria-label="אפשרויות נגישות"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-foreground">נגישות</h3>
              <button onClick={() => setIsOpen(false)} aria-label="סגירת תפריט נגישות">
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground flex items-center gap-2">
                  <Type className="w-4 h-4" /> גודל טקסט
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={decreaseFontSize}
                    className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-border transition-colors"
                    aria-label="הקטנת טקסט"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono w-10 text-center">{fontSize}%</span>
                  <button
                    onClick={increaseFontSize}
                    className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-border transition-colors"
                    aria-label="הגדלת טקסט"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <button
                onClick={toggleContrast}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg bg-muted hover:bg-border transition-colors"
                aria-pressed={highContrast}
              >
                <span className="text-sm flex items-center gap-2">
                  <Contrast className="w-4 h-4" /> ניגודיות גבוהה
                </span>
                <span className={`w-4 h-4 rounded-full border-2 ${highContrast ? "bg-secondary border-secondary" : "border-muted-foreground"}`} />
              </button>
              <button
                onClick={resetAll}
                className="w-full text-center text-xs text-muted-foreground hover:text-foreground underline mt-2"
              >
                איפוס הגדרות
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}