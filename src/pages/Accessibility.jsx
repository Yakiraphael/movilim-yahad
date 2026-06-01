import React from "react";
import { motion } from "framer-motion";

export default function Accessibility() {
  return (
    <div className="pt-20 min-h-screen bg-background">
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            הצהרת <span className="text-secondary">נגישות</span>
          </motion.h1>
          <p className="text-primary-foreground/70 mt-2 text-sm">עדכון אחרון: יוני 2026</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-foreground leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">1. מחויבות הפורום לנגישות</h2>
            <p className="text-muted-foreground">
              פורום מובילים יחד (ע"ר 580795821) רואה חשיבות עליונה בהנגשת השירותים הדיגיטליים שלו לכלל הציבור, לרבות אנשים עם מוגבלות. אנו שואפים לעמוד בדרישות תקן WCAG 2.1 ברמה AA ובחוק שוויון זכויות לאנשים עם מוגבלות, התשנ"ח–1998.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">2. פעולות שבוצעו להנגשת האתר</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
              <li>תמיכה בקריאה מימין לשמאל (RTL) בעברית.</li>
              <li>שימוש בתגי HTML סמנטיים (header, nav, main, footer).</li>
              <li>כפתורים וקישורים עם תיאורי aria-label.</li>
              <li>ניגודיות צבעים עומדת בדרישות WCAG AA.</li>
              <li>תמונות מלוות בטקסט חלופי (alt text).</li>
              <li>האתר ניתן לניווט מלא באמצעות מקלדת.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">3. מגבלות ידועות</h2>
            <p className="text-muted-foreground">
              חלק מהתמונות ומסמכי PDF באתר עשויים להיות חסרי תיאורים מלאים. אנו עובדים על שיפור נושא זה ברציפות.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">4. פנייה בנושא נגישות</h2>
            <p className="text-muted-foreground">
              נתקלתם בבעיית נגישות? נשמח לשמוע ולסייע. ניתן לפנות לרכז הנגישות שלנו:<br /><br />
              <strong>שם:</strong> פורום מובילים יחד<br />
              <strong>דוא"ל:</strong> <a href="mailto:forum.movilim@gmail.com" className="text-secondary underline">forum.movilim@gmail.com</a><br />
              <strong>טלפון:</strong> 052-509-0179<br /><br />
              אנו נשתדל להשיב תוך 5 ימי עבודה.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">5. תאריך עדכון אחרון</h2>
            <p className="text-muted-foreground">הצהרה זו עודכנה לאחרונה ביוני 2026.</p>
          </div>

        </div>
      </section>
    </div>
  );
}