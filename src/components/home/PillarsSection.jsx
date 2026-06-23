import React from "react";
import { motion } from "framer-motion";
import { Sprout, Award, Radio } from "lucide-react";

const pillars = [
  {
    icon: Sprout,
    title: "מרכז מובילים: בית להצמחת מנהיגות מהשטח",
    description: "מרכז פיזי וערכי המהווה מקום של השראה, למידה, זהות והשפעה עבור דור המנהיגות הבא — \"זוכרים, לומדים, מתחברים, מובילים\".",
    items: [
      "תערוכות השראה עם סיפורי דמויות מפתח",
      "ספרייה דיגיטלית של מאמרים וראיונות",
      "מרחב לחדשנות ויוזמות",
      "מרחב קהילתי לדיאלוג וחיבור",
      "קהילה תומכת המאפשרת חיבור בין אנשים בעלי ערכים והזדמנויות דומים",
    ],
  },
  {
    icon: Award,
    title: "קואליציית מובילים: רשת ארצית לשותפות והשפעה",
    description: "\"יחד משנים מציאות\" — הקואליציה מתמקדת בכוחה של הקבוצה כדי למקסם השפעה חברתית דרך חיבור ארגונים ועמותות בעלי חזון משותף.",
    items: [
      "חיבור בין ארגונים ועמותות בעלי חזון משותף",
      "איגום משאבים ויכולות ויצירת שפה משותפת",
      "קידום יוזמות חברתיות רחבות היקף",
      "חיזוק מנהיגות מקומית וארצית",
      "קידום מדיניות ציבורית צודקת ומיטיבה",
    ],
  },
  {
    icon: Radio,
    title: "הצמחת מנהיגות מהשטח: לשורות ההשפעה",
    description: "הפן התוכניתי והמעשי המיועד לצעירים וצעירות, מתוך אמונה ביכולתם להוביל שינוי אמיתי. \"השטח הוא נקודת ההתחלה, המנהיגות – היעד\".",
    items: [
      "פיתוח מנהיגות אישית: הנגשת הכשרות וליווי אישי",
      "הגדלת ייצוג והשפעה במוקדי קבלת החלטות",
      "בניית רשת חברתית תומכת של צעירים",
      "הפיכת יוזמות חברתיות מהשטח לעשייה בעלת אימפקט",
      "כלים לצעירים להשמיע את קולם בזירה הציבורית",
    ],
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
              <div className="group relative bg-card rounded-2xl p-8 border border-border hover:border-secondary/40 transition-all duration-500 hover:shadow-xl hover:shadow-secondary/5 h-full flex flex-col">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-500">
                  <pillar.icon className="w-7 h-7 text-primary-foreground group-hover:text-secondary-foreground transition-colors duration-500" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-4">{pillar.description}</p>

                <div className="mt-auto">
                  <p className="text-sm font-bold text-foreground mb-2">במסגרת זו יפעל הפורום ל:</p>
                  <ul className="space-y-1.5">
                    {pillar.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

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