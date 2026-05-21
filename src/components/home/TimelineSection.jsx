import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const IMAGES = {
  founding: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/b698a9def_generated_b9e299d8.png",
  knesset: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/5c436b38f_generated_b187613f.png",
  social: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/82dcd5c23_generated_bb568299.png",
  leadership: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/f3afe8448_generated_27994a75.png",
  future: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/df171bbd9_generated_2d148180.png",
};

const timelineItems = [
  {
    year: "2024",
    title: "הקמת הפורום ורישום רשמי",
    subtitle: "מעלים הילוך: מקימים בית למנהיגות",
    content: "חבירתם של אקטיביסטים, מנהיגים צעירים ואנשי עשייה מבני הקהילה בראשות אברהם (אבי) יצחק להתאגדות רשמית כעמותה (ע\"ר 580795821). המטרה: יצירת פלטפורמה אקדמית ובלתי תלויה שתעצים מנהיגות מקצועית.",
    image: IMAGES.founding,
    imageAlt: "ישיבת הייסוד של פורום מובילים יחד",
  },
  {
    year: "2024",
    title: "כניסה לזירה הפרלמנטרית",
    subtitle: "משפיעים מתוך מוקדי קבלת ההחלטות",
    content: "תחילת פעילות אינטנסיבית בוועדות הכנסת השונות. הפורום הופך לקול המקצועי והמפקח על החלטות הממשלה בנושא ייצוג הולם לבני הקהילה בשירות המדינה, בחברות ממשלתיות ובתאגידים ציבוריים.",
    image: IMAGES.knesset,
    imageAlt: "נציגי הפורום בדיונים בוועדות הכנסת",
  },
  {
    year: "2025",
    title: "עמידה בחזית המאבקים החברתיים",
    subtitle: "צדק חברתי, חוסן קהילתי וערבות הדדית",
    content: "הקמת חמ\"ל סיוע קהילתי וצוותי פעולה להתמודדות עם עוולות חברתיות ומשברים. מפתח ליווי שוטף למשפחות ואוכלוסיות מוחלשות, והשתתפות במאבק הציבורי והתקשורתי הלאומי לחיפוש ואיתור הילדה הנעדרת היימנוט קסאו.",
    image: IMAGES.social,
    imageAlt: "פעילות שטח של הפורום למען הקהילה",
  },
  {
    year: "2026",
    title: "מיסוד חממת המנהיגות והלובינג",
    subtitle: "שינוי הנרטיב הלאומי",
    content: "הרחבת מערכי ההכשרה והסימולציות למתמודדים במגזר הציבורי ובזירה המוניציפלית/ארצית. מיסוד שיתופי פעולה עם אנשי תקשורת מובילים לצורך שיפור תפיסת הקהילה בציבוריות הישראלית, וכתיבת מסמכי מדיניות וטורי דעה משפיעים.",
    image: IMAGES.leadership,
    imageAlt: "סדנת מנהיגות מקצועית של הפורום",
  },
  {
    year: "העתיד שלנו",
    title: "צמיחה ופריסה לאומית",
    subtitle: "מובילים את מנהיגי המחר",
    content: "הקמת והנגשת תוכנית \"מנהיגות צעירה\" לנוער ברחבי הארץ, פיתוח לובינג פרלמנטרי ייעודי בכנסת, והרחבת תוכניות החוסן המנטלי והזהות הקהילתית כבר מהגיל הרך – כדי להבטיח את הדורות הבאים של מובילים ציוניים ופטריוטיים.",
    image: IMAGES.future,
    imageAlt: "מחזור חגיגי של צעירי הפורום",
  },
];

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0">
      {/* Timeline line and dot */}
      <div className="hidden md:flex absolute top-0 bottom-0 right-1/2 transform translate-x-1/2 flex-col items-center">
        <div className={`w-4 h-4 rounded-full border-4 z-10 transition-colors duration-500 ${isInView ? "bg-secondary border-secondary" : "bg-muted border-border"}`} />
        {index < timelineItems.length - 1 && (
          <div className="w-0.5 flex-1 bg-border" />
        )}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full md:w-[45%] ${isEven ? "md:mr-auto md:pl-8" : "md:ml-auto md:pr-8"}`}
      >
        <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div className="aspect-video overflow-hidden">
            <img
              src={item.image}
              alt={item.imageAlt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="p-6">
            <div className="inline-block bg-secondary/10 text-secondary rounded-full px-3 py-1 text-sm font-bold mb-3">
              {item.year}
            </div>
            <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
            <p className="text-secondary font-medium text-sm mb-3">{item.subtitle}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.content}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function TimelineSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/50" aria-label="ציר הזמן ההיסטורי">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            המסע <span className="text-secondary">שלנו</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            מהקמת הפורום ועד לחזון העתידי — כל תחנה בדרך למנהיגות
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute top-0 bottom-0 right-1/2 transform translate-x-1/2 w-0.5 bg-border" />

          {timelineItems.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}