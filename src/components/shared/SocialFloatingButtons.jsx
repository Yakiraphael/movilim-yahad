import React, { useState } from "react";
import { Facebook, MessageCircle, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const buttons = [
  {
    label: "פייסבוק",
    icon: Facebook,
    href: "https://www.facebook.com/profile.php/?id=100094705007552",
    bg: "bg-blue-600 hover:bg-blue-700",
  },
  {
    label: "וואטסאפ",
    icon: MessageCircle,
    href: "https://wa.me/972525090179",
    bg: "bg-green-600 hover:bg-green-700",
  },
  {
    label: "טלפון",
    icon: Phone,
    href: "tel:0525090179",
    bg: "bg-gray-700 hover:bg-gray-800",
  },
];

export default function SocialFloatingButtons() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-center gap-3">
      <AnimatePresence>
        {open && buttons.map((btn, i) => (
          <motion.a
            key={btn.label}
            href={btn.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={btn.label}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2, delay: i * 0.05 }}
            className={`w-12 h-12 rounded-full ${btn.bg} text-white flex items-center justify-center shadow-lg transition-colors`}
          >
            <btn.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </AnimatePresence>

      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "סגור קישורים חברתיים" : "פתח קישורים חברתיים"}
        className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-xl hover:bg-primary/90 transition-colors"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle className="w-6 h-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}