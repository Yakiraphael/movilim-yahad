import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Shield, Users, BookOpen, Mic, Star } from "lucide-react";
import StatsCounters from "../components/about/StatsCounters";

const values = [
  {
    icon: Target,
    title: "חזון",
    text: "יצירת דור חדש של מנהיגים ומנהיגות מבני הקהילה האתיופית-ישראלית, אשר ישפיעו על עיצוב המדיניות הציבורית וייצגו את הקהילה בכבוד ובמקצועיות. הפורום פועל לקידום מנהיגות יוזמת מהשטח ובעתיד — בית ספר למנהיגות.",
  },
  {
    icon: Shield,
    title: "ציונות ופטריוטיות",
    text: "הפורום פועל מתוך מחויבות עמוקה למדינת ישראל ולערכיה. אנו מאמינים שייצוג הולם של כלל שכבות החברה הוא נדבך חיוני בבניין הלאום. הקהילה האתיופית-ישראלית היא חלק בלתי נפרד מהחברה הישראלית ומהמפעל הציוני.",
  },
  {
    icon: Users,
    title: "ערבות הדדית",
    text: "אנו מאמינים שהשינוי מתחיל מבפנים — חיזוק הקהילה דרך ליווי אישי, תמיכה נפשית ובניית רשתות מקצועיות. המועמד הרוצה להשתלב בחיים הציבוריים יקבל את כל הכלים הנדרשים מקבוצה איכותית המורכבת מכל חלקי הארץ.",
  },
  {
    icon: Eye,
    title: "שקיפות",
    text: "העמותה פועלת מתוך שקיפות מלאה, עם דיווח שוטף לציבור, עמידה בדרישות הרגולציה הישראלית ושמירה על סטנדרטים הגבוהים ביותר של ניהול תקין.",
  },
  {
    icon: BookOpen,
    title: "פיתוח מנהיגות",
    text: "הפורום מעניק הכשרות בניהול משא ומתן, מיומנויות תקשורתיות, התמצאות במדיה החברתית, פתרון בעיות וחשיבה מחוץ לקופסה — מתוך ראייה אסטרטגית לחיזוק מתמודדים עתידיים.",
  },
  {
    icon: Mic,
    title: "שינוי הנרטיב",
    text: "נוכחות תקשורתית אקטיבית, ניטור מדיניות ממשלתית, וקידום סיפורי הצלחה. הפורום פועל לשנות את האופן שבו החברה הישראלית תופסת את הקהילה האתיופית ואת תרומתה.",
  },
];

const programs = [
  {
    icon: Star,
    title: 'תוכנית "מנהיגות צעירה"',
    description: "תוכנית הכשרה לנוער מהקהילה ברחבי הארץ, המצמיחה את מנהיגי המחר ומקנה להם כלים לפעולה ציבורית.",
  },
  {
    icon: Users,
    title: "חמ\"ל קהילתי",
    description: "מרכז מבצעי לסיוע קהילתי המלווה משפחות ואוכלוסיות מוחלשות, ונאבק עבור צדק חברתי.",
  },
  {
    icon: Target,
    title: "לובינג פרלמנטרי",
    description: "פיקוח מקצועי על ועדות הכנסת, הגשת עמדות ומסמכי מדיניות, וייצוג אינטרסים הקהילה בזירה הלאומית.",
  },
  {
    icon: Mic,
    title: "הכשרה תקשורתית",
    description: "סדנאות מדיה, כתיבת נאומים, ניהול מדיה חברתית, וליווי אנשי תקשורת לשיפור ייצוג הקהילה.",
  },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              אודות <span className="text-secondary">הפורום</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              פורום מובילים יחד הוקם בשנת 2024 כעמותה רשומה (ע"ר 580795821) על ידי קבוצת אקטיביסטים, מנהיגים צעירים ואנשי עשייה מהקהילה האתיופית-ישראלית. הפורום תעסוק בקידום מנהיגות יוזמת מהשטח ויפעל להצמיח מתוכה דור חדש של מנהיגים מוכשרים וצעירים, שיסיעו להם להיכנס לתוך תחומי פעילות במרחב הציבורי והפוליטי.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <StatsCounters />

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              המשימה <span className="text-secondary">שלנו</span>
            </h2>
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <p className="text-muted-foreground leading-loose text-lg mb-6">
                הפורום יעסוק בשיפור היכולות המנהיגותיות של הקבוצה ויחידים, העצמה בתחומים שונים הכוללים <strong className="text-foreground">התפתחות אישית, ניהול משא ומתן, יכולות ומיומנויות תקשורתיות</strong>, התמצאות במדיה החברתית, פתרון בעיות, חשיבה מחוץ לקופסה — כל אלה מתוך ראייה וחשיבה אסטרטגית לחיזוק מתמודדים עתידיים הצומחים מהשטח.
              </p>
              <p className="text-muted-foreground leading-loose text-lg mb-6">
                המועמד או המועמדת הרוצים להשתלב במגזר הציבורי והפוליטי יהיו חלק אינטגרלי מצוות פורום "מובילים יחד" — כדי שיקבלו את כל הכלים הנדרשים ותמיכה מקבוצה איכותית וגדולה המורכבת מכל חלקי הארץ, העוסקים במגזר הציבורי והפרטי.
              </p>
              <p className="text-muted-foreground leading-loose text-lg">
                הפורום יסייע בגיבוש ובניית <strong className="text-foreground">החזון והמטרות של המועמד/ת</strong>, יחזק את היכולות הנדרשות וקבלת ההחלטות שיסיעו לו בהצלחת מטרותיו — והכניסה לחיים ציבוריים בצורה מפוקחת ואחראית.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              הערכים <span className="text-secondary">שמנחים אותנו</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-secondary/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <val.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-2">{val.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{val.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              תוכניות <span className="text-secondary">ופעילויות</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((prog, i) => (
              <motion.div
                key={prog.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-primary rounded-2xl p-6 text-primary-foreground"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                  <prog.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{prog.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{prog.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}