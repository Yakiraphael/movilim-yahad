import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Shield } from "lucide-react";
import StatsCounters from "../components/about/StatsCounters";

const values = [
  {
    icon: Target,
    title: "חזון",
    text: "יצירת דור חדש של מנהיגים ומנהיגות מבני הקהילה האתיופית-ישראלית, אשר ישפיעו על עיצוב המדיניות הציבורית וייצגו את הקהילה בכבוד ובמקצועיות.",
  },
  {
    icon: Eye,
    title: "שקיפות",
    text: "העמותה פועלת מתוך שקיפות מלאה, עם דיווח שוטף לציבור, עמידה בדרישות הרגולציה הישראלית ושמירה על סטנדרטים הגבוהים ביותר של ניהול תקין.",
  },
  {
    icon: Heart,
    title: "ערבות הדדית",
    text: "אנו מאמינים שהשינוי מתחיל מבפנים — חיזוק הקהילה דרך ליווי, תמיכה ובניית רשתות מקצועיות שמאפשרות לכל אחד ואחת לממש את הפוטנציאל.",
  },
  {
    icon: Shield,
    title: "ציונות ופטריוטיות",
    text: "הפורום פועל מתוך מחויבות עמוקה למדינת ישראל ולערכיה. אנו מאמינים שייצוג הולם של כלל שכבות החברה הוא נדבך חיוני בבניין הלאום.",
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
              פורום מובילים יחד הוקם בשנת 2024 כעמותה רשומה (ע"ר 580795821) על ידי קבוצת אקטיביסטים, מנהיגים צעירים ואנשי עשייה מהקהילה האתיופית-ישראלית. הפורום מהווה פלטפורמה עצמאית ובלתי תלויה שמטרתה להעצים מנהיגות מקצועית ולקדם ייצוג הולם במרחב הציבורי והפוליטי.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <StatsCounters />

      {/* Values */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              הערכים <span className="text-secondary">שמנחים אותנו</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-secondary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <val.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{val.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{val.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Detail */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              המשימה <span className="text-secondary">שלנו</span>
            </h2>
            <p className="text-muted-foreground leading-loose text-lg">
              אנו פועלים ליצירת הון אנושי מצוין מבני הקהילה האתיופית-ישראלית, המבוסס על נתונים, מחקר ותובנות מהשטח. 
              הפורום מלווה צעירים אקדמאים במסע מובנה הכולל הכשרות מקצועיות, סימולציות ניהוליות, כלי מדיה ודוברות, 
              וליווי אסטרטגי להשתלבות בתפקידי מפתח — מוניציפליים, ממשלתיים ופוליטיים. 
              בד בבד, הפורום מנהל פיקוח פרלמנטרי על החלטות ממשלתיות הקשורות לייצוג הולם, ופועל בזירה התקשורתית לשינוי הנרטיב הציבורי.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}