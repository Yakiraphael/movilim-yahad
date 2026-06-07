import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Photos — each image appears only once, distributed across relevant timeline stations
const timelineItems = [
  {
    year: "2024",
    title: "הקמת הפורום ורישום רשמי",
    subtitle: "מעלים הילוך: מקימים בית למנהיגות",
    content: "חבירתם של אקטיביסטים, מנהיגים צעירים ואנשי עשייה מבני הקהילה בראשות אברהם (אבי) יצחק להתאגדות רשמית כעמותה (ע\"ר 580795821). המטרה: יצירת פלטפורמה אקדמית ובלתי תלויה שתעצים מנהיגות מקצועית ותסייע לצעירים להיכנס לתוך תחומי פעילות במרחב הציבורי והפוליטי.",
    images: [
      { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/62fbcb7b4_4.jpg", alt: "ישיבת ייסוד הפורום" },
      { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/ae9fdb16f_2.jpg", alt: "חגיגת הקמת העמותה" },
      { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/c09af2d00_3.jpg", alt: "לחיים — הקמת העמותה" },
      { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/7a1afab0e_5.jpg", alt: "ישיבת הייסוד" },
    ],
  },
  {
    year: "2024",
    title: "כניסה לזירה הפרלמנטרית",
    subtitle: "משפיעים מתוך מוקדי קבלת ההחלטות",
    content: "תחילת פעילות אינטנסיבית בוועדות הכנסת השונות. הפורום הופך לקול המקצועי המפקח על החלטות הממשלה בנושא ייצוג הולם לבני הקהילה בשירות המדינה, בחברות ממשלתיות ובתאגידים ציבוריים. הפורום מסייע בגיבוש ובניית החזון והמטרות של מועמדים ציבוריים.",
    images: [
      { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/8a86a793d_WhatsAppImage2024-04-01at102551.jpg", alt: "פגישה פרלמנטרית" },
      { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/0c7703618_WhatsAppImage2024-04-03at15157PM.jpg", alt: "ישיבה מקצועית" },
    ],
  },
  {
    year: "2024",
    title: "בחירות מוניציפליות ולאומיות",
    subtitle: "מניעים שינוי מהשטח",
    content: "הפורום מסייע למועמדים בחירות מקומיות וארציות, מחזק יכולות מנהיגותיות, ומלווה מתמודדים בקבלת החלטות ומיומנויות ניהוליות. שיתוף פעולה עם מנהיגים פוליטיים ובניית גשרים בין הקהילה לממסד.",
    images: [
      { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/7ed506407_WhatsAppImage2024-04-01at092338.jpg", alt: "סדנת מנהיגות" },
      { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/fde4b8314_WhatsAppImage2024-03-26at112521PM.jpg", alt: "קמפיין בחירות" },
      { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/6488707f7_WhatsAppImage2024-03-26at112733PM.jpg", alt: "בחירות מוניציפליות" },
      { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/45c2f9bfe_WhatsAppImage2024-03-28at83135PM.jpg", alt: "תמיכה במועמד" },
    ],
  },
  {
    year: "2024",
    title: "מנהיגות ופיתוח מקצועי",
    subtitle: "מחזקים כישורים, מעצימים אנשים",
    content: "הפורום מעניק הכשרות מעמיקות בתחומים: ניהול משא ומתן, מיומנויות תקשורת, התמצאות במדיה חברתית, פתרון בעיות וחשיבה אסטרטגית. כל אלה כדי לחזק מתמודדים עתידיים הצומחים מהשטח.",
    images: [
      { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/fde4b8314_WhatsAppImage2024-03-26at112521PM.jpg", alt: "בחירות מוניציפליות" },
      { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/3b90d53e7_WhatsAppImage2024-04-01at092926.jpg", alt: "פגישה מקצועית" },
      { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/d6e89d055_WhatsAppImage2024-04-01at102704.jpg", alt: "הצגת חזון" },
    ],
  },
  {
    year: "2025",
    title: "עמידה בחזית המאבקים החברתיים",
    subtitle: "צדק חברתי, חוסן קהילתי וערבות הדדית",
    content: "הקמת חמ\"ל סיוע קהילתי וצוותי פעולה להתמודדות עם עוולות חברתיות ומשברים. מפתח ליווי שוטף למשפחות ואוכלוסיות מוחלשות, והשתתפות במאבק הציבורי והתקשורתי הלאומי לחיפוש ואיתור הילדה הנעדרת היימנוט קסאו.",
    images: [
      { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/ac5e4e109_.jpg", alt: "לוגו פורום מובילים יחד" },
      { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/6371d54cc_WhatsAppImage2026-05-31at125552.jpg", alt: "חמ\"ל סיוע קהילתי" },
      { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/34b172afd_WhatsAppImage2026-05-31at125600.jpg", alt: "פעילות קהילתית" },
    ],
  },
  {
    year: "2026",
    title: "מיסוד חממת המנהיגות והלובינג",
    subtitle: "שינוי הנרטיב הלאומי",
    content: "הרחבת מערכי ההכשרה והסימולציות למתמודדים במגזר הציבורי ובזירה המוניציפלית/ארצית. מיסוד שיתופי פעולה עם אנשי תקשורת מובילים לצורך שיפור תפיסת הקהילה בציבוריות הישראלית, וכתיבת מסמכי מדיניות וטורי דעה משפיעים.",
    images: [
      { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/955f85946_SE02-8557-.jpg", alt: "קבלת הוקרה" },
      { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/2d6b44775_SE02-8515-.jpg", alt: "אירוע הוקרה" },
      { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/1b5d8235b_WhatsAppImage2024-04-01at102736AM.jpg", alt: "חלוקת פרסים" },
    ],
  },
  {
    year: "העתיד שלנו",
    title: "צמיחה ופריסה לאומית",
    subtitle: "מובילים את מנהיגי המחר",
    content: "הקמת תוכנית \"מנהיגות צעירה\" לנוער ברחבי הארץ, פיתוח לובינג פרלמנטרי ייעודי בכנסת, והרחבת תוכניות החוסן המנטלי והזהות הקהילתית כבר מהגיל הרך — כדי להבטיח את הדורות הבאים של מובילים ציוניים ופטריוטיים.",
    images: [
      { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/26b52baf9_FB_IMG_1718701193825.jpg", alt: "קהילה צעירה" },
      { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/4301f8ad2_generated_image.png", alt: "חזון עתידי - מנהיגות ישראלית" },
    ],
  },
];

function ImageSlider({ images }) {
  const [current, setCurrent] = React.useState(0);
  return (
    <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
      <img
        src={images[current].url}
        alt={images[current].alt}
        className="w-full h-full object-cover transition-all duration-500"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
            className="absolute top-1/2 right-2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors"
            aria-label="תמונה קודמת"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrent((c) => (c + 1) % images.length)}
            className="absolute top-1/2 left-2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors"
            aria-label="תמונה הבאה"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/40"}`}
                aria-label={`עבור לתמונה ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex flex-col md:flex-row items-start gap-8 mb-16 last:mb-0">
      {/* Dot */}
      <div className="hidden md:block absolute top-6 right-1/2 translate-x-1/2 z-10">
        <div className={`w-5 h-5 rounded-full border-4 transition-all duration-700 ${isInView ? "bg-secondary border-secondary shadow-lg shadow-secondary/30" : "bg-muted border-border"}`} />
      </div>

      {/* Content — alternates sides */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 60 : -60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className={`w-full md:w-[46%] ${isEven ? "md:mr-auto" : "md:ml-auto"}`}
      >
        <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow duration-300">
          <ImageSlider images={item.images} />
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
          <div className="hidden md:block absolute top-0 bottom-0 right-1/2 translate-x-1/2 w-0.5 bg-border" />
          {timelineItems.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}