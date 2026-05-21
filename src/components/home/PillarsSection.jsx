import React from "react";
import { motion } from "framer-motion";
import { Sprout, Award, Radio } from "lucide-react";

const pillars = [
  {
    icon: Sprout,
    title: "פלטפורמת צמיחה",
    description: "בניית רשת מקצועית וחוסן נפשי לטאלנטים מבני הקהילה, מתוך ליווי אישי והעצמה מקצועית מתמשכת.",
  },
  {
    icon: Award,
    title: "קידום למשרות בכירות",
    description: "ליווי אסטרטגי וכלים מעשיים לקידום ייצוג הולם במרחב המוניציפלי, הלאומי והפוליטי.",
  },
  {
    icon: Radio,
    title: "שינוי הנרטיב בתקשורת",
    description: "נוכחות תקשורתית אקטיבית, ניטור מדיניות ממשלתית וקידום סיפורי הצלחה מעוררי השראה.",
  },
];

export default function PillarsSection() {
  return (
    <section className="py-20 md:py-28 bg-background" aria-label="מטרות העל">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            שלושת עמודי <span className="text-secondary">התווך</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            ליבת העשייה של פורום מובילים יחד מבוססת על שלושה עמודים מרכזיים
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="group relative bg-card rounded-2xl p-8 border border-border hover:border-secondary/40 transition-all duration-500 hover:shadow-xl hover:shadow-secondary/5 h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-500">
                  <pillar.icon className="w-7 h-7 text-primary-foreground group-hover:text-secondary-foreground transition-colors duration-500" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{pillar.description}</p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 right-0 left-0 h-1 bg-secondary rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}