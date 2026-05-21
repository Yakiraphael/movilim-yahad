import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              צרו <span className="text-secondary">קשר</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              מעוניינים להצטרף לתוכנית? לתרום? לשתף פעולה? נשמח לשמוע מכם.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Split Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl border border-border p-8"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">שלחו לנו הודעה</h2>
              <ContactForm />
            </motion.div>

            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ContactInfo />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}