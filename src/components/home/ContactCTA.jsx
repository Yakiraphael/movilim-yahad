import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, ArrowLeft } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-secondary font-semibold text-sm mb-3 tracking-wide uppercase">בואו נדבר</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            מוכנים לקחת חלק<br />
            <span className="text-secondary">בשינוי האמיתי?</span>
          </h2>
          <p className="text-primary-foreground/75 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            בין אם אתם מועמדים לתפקיד ציבורי, פעילים חברתיים, או סתם רוצים להיות חלק מהתנועה — הפורום כאן בשבילכם.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-2xl font-bold text-base hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5" />
              שלחו לנו הודעה
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/972525090179"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-base hover:bg-white/20 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              וואטסאפ
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-foreground/60 text-sm">
            <a href="tel:0525090179" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" />
              052-509-0179
            </a>
            <a href="mailto:forum.movilim@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-colors" dir="ltr">
              <Mail className="w-4 h-4" />
              forum.movilim@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}