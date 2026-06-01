import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="pt-20 min-h-screen bg-background">
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            מדיניות <span className="text-secondary">פרטיות</span>
          </motion.h1>
          <p className="text-primary-foreground/70 mt-2 text-sm">עדכון אחרון: יוני 2026</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-foreground leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">1. כללי</h2>
            <p className="text-muted-foreground">
              פורום מובילים יחד (ע"ר 580795821) מכבד את פרטיות המשתמשים באתר. מדיניות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלכם.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">2. איזה מידע אנו אוספים?</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
              <li>שם מלא וכתובת דואר אלקטרוני — בעת יצירת קשר או הצטרפות לרשימות תפוצה.</li>
              <li>מספר טלפון — לצורך יצירת קשר ישירה.</li>
              <li>מידע טכני אנונימי (כגון כתובת IP, סוג דפדפן) — לצורכי אנליטיקה ושיפור האתר.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">3. כיצד אנו משתמשים במידע?</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
              <li>מענה לפניות ובקשות שנשלחו אלינו.</li>
              <li>שליחת עדכונים ופרסומים על פעילות הפורום — בהסכמה בלבד.</li>
              <li>שיפור חוויית המשתמש באתר.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">4. שיתוף מידע עם צדדים שלישיים</h2>
            <p className="text-muted-foreground">
              אנו לא מוכרים, משכירים או מעבירים את פרטיכם לצדדים שלישיים לצורכי שיווק. מידע עשוי להיות מועבר לספקי שירות הפועלים מטעמנו (כגון שירותי דוא"ל), בכפוף להסכמי סודיות.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">5. אבטחת מידע</h2>
            <p className="text-muted-foreground">
              אנו נוקטים באמצעי אבטחה סבירים על מנת להגן על המידע האישי שלכם מפני גישה בלתי מורשית, שינוי, גילוי או השמדה.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">6. זכויותיכם</h2>
            <p className="text-muted-foreground">
              בהתאם לחוק הגנת הפרטיות התשמ"א–1981, יש לכם הזכות לעיין במידע המאוחסן עליכם, לתקנו או לבקש את מחיקתו. לפניות: <a href="mailto:forum.movilim@gmail.com" className="text-secondary underline">forum.movilim@gmail.com</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">7. עוגיות (Cookies)</h2>
            <p className="text-muted-foreground">
              האתר עשוי להשתמש בעוגיות לצורך שיפור חוויית הגלישה. ניתן לבטל עוגיות דרך הגדרות הדפדפן שלכם.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">8. יצירת קשר</h2>
            <p className="text-muted-foreground">
              לכל שאלה בנושא פרטיות, ניתן לפנות אלינו:<br />
              דוא"ל: <a href="mailto:forum.movilim@gmail.com" className="text-secondary underline">forum.movilim@gmail.com</a><br />
              טלפון: 052-509-0179
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}