import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Shield, Users, BookOpen, Mic, Star, Flag, Landmark, HeartHandshake, ScanSearch, GraduationCap, AlertTriangle, TrendingUp, Network, MessageSquareWarning, Shuffle, Siren } from "lucide-react";
import StatsCounters from "../components/about/StatsCounters";

const values = [
{
  icon: Target,
  title: "חזון",
  text: "יצירת דור חדש של מנהיגים ומנהיגות מבני הקהילה האתיופית-ישראלית, אשר ישפיעו על עיצוב המדיניות הציבורית וייצגו את הקהילה בכבוד ובמקצועיות. הפורום פועל לקידום מנהיגות יוזמת מהשטח ובעתיד — בית ספר למנהיגות."
},
{
  icon: Shield,
  title: "ציונות ופטריוטיות",
  text: "הפורום פועל מתוך מחויבות עמוקה למדינת ישראל ולערכיה. אנו מאמינים שייצוג הולם של כלל שכבות החברה הוא נדבך חיוני בבניין הלאום. הקהילה האתיופית-ישראלית היא חלק בלתי נפרד מהחברה הישראלית ומהמפעל הציוני."
},
{
  icon: Users,
  title: "ערבות הדדית",
  text: "אנו מאמינים שהשינוי מתחיל מבפנים — חיזוק הקהילה דרך ליווי אישי, תמיכה נפשית ובניית רשתות מקצועיות. המועמד הרוצה להשתלב בחיים הציבוריים יקבל את כל הכלים הנדרשים מקבוצה איכותית המורכבת מכל חלקי הארץ."
},
{
  icon: Eye,
  title: "שקיפות",
  text: "העמותה פועלת מתוך שקיפות מלאה, עם דיווח שוטף לציבור, עמידה בדרישות הרגולציה הישראלית ושמירה על סטנדרטים הגבוהים ביותר של ניהול תקין."
},
{
  icon: BookOpen,
  title: "פיתוח מנהיגות",
  text: "הפורום מעניק הכשרות בניהול משא ומתן, מיומנויות תקשורתיות, התמצאות במדיה החברתית, פתרון בעיות וחשיבה מחוץ לקופסה — מתוך ראייה אסטרטגית לחיזוק מתמודדים עתידיים."
},
{
  icon: Mic,
  title: "שינוי הנרטיב",
  text: "נוכחות תקשורתית אקטיבית, ניטור מדיניות ממשלתית, וקידום סיפורי הצלחה. הפורום פועל לשנות את האופן שבו החברה הישראלית תופסת את הקהילה האתיופית ואת תרומתה."
}];


const challenges = [
{
  icon: TrendingUp,
  title: "תת-ייצוג במוקדי השפעה",
  text: "למרות ההתקדמות בשנים האחרונות, מספרם של יוצאי אתיופיה בתפקידי הנהגה בכירים, בזירה הציבורית והפוליטית, עדיין נמוך ביחס לחלקם באוכלוסייה."
},
{
  icon: AlertTriangle,
  title: "היעדר רצף מנהיגותי",
  text: "חוסר במנגנון מסודר המאתר, מכשיר ומלווה דור חדש של מנהיגים צעירים לאורך זמן, באופן שיבטיח המשכיות והשפעה ארוכת טווח."
},
{
  icon: Network,
  title: "פערי נגישות לרשתות השפעה",
  text: "צעירים רבים חסרים קשרים מקצועיים, מנטורים ופלטפורמות שיאפשרו להם להגיע לעמדות מפתח ולהשתלב במעגלי קבלת ההחלטות."
},
{
  icon: MessageSquareWarning,
  title: "סטריאוטיפים ודעות קדומות",
  text: "התמודדות עם תפיסות מוטעות, דעות קדומות וסיקור תקשורתי שאינו תמיד מאוזן, המשפיעים על הזדמנויות הקידום ועל תחושת השייכות של צעירים בקהילה."
},
{
  icon: Shuffle,
  title: "פיצול בין ארגונים ויוזמות",
  text: "ריבוי גופים הפועלים למען מטרות דומות ללא תיאום מספק, דבר שעלול להוביל לפיזור משאבים, כפילויות וחוסר מיקוד בהשגת יעדים משותפים."
},
{
  icon: Siren,
  title: "התמודדות עם משברים חברתיים וקהילתיים",
  text: "אירועי אפליה, גזענות, משברי אמון מול מוסדות המדינה וקשיים חברתיים מחייבים תגובה מקצועית, מהירה ומאורגנת לצד בניית חוסן קהילתי ארוך טווח."
}];


const forumGoals = [
{
  icon: Network,
  title: "הקמת קואליציית ארגונים ועמותות – \"מובילים ומשנים מציאות\"",
  text: "פורום מובילים יחד יפעל להקמת קואליציה ארצית של עמותות, ארגונים, יוזמות חברתיות וקהילות הפועלים מתוך ערכים, מטרות ואינטרסים משותפים, במטרה ליצור מכפיל כוח לאומי המבוסס על שותפות אמיתית, אמון הדדי ואחריות משותפת."
},
{
  icon: Landmark,
  title: "הגדלת הייצוג במוקדי קבלת ההחלטות",
  text: "פורום מובילים יחד יפעל לאיתור, הכשרה, ליווי וקידום של מנהיגים ומנהיגות מבני הקהילה, במטרה להגדיל את ייצוגם ברשויות המקומיות, במשרדי הממשלה, בכנסת ישראל, בשירות הציבורי, באקדמיה, בחברות ממשלתיות ובמגזר העסקי."
},
{
  icon: Mic,
  title: "שינוי השיח הציבורי והנרטיב החברתי",
  text: "הפורום יפעל להובלת פעילות הסברה, תקשורת והשפעה ציבורית במטרה לחזק את תדמיתם של יוצאי אתיופיה, להציג סיפורי הצלחה ומודלים לחיקוי, לקדם שיח מאחד המבוסס על עובדות ולהעצים את תרומתה של הקהילה לחברה הישראלית."
},
{
  icon: ScanSearch,
  title: "קידום מדיניות, פיקוח ציבורי ושקיפות",
  text: "פורום מובילים יחד יפעל למעקב אחר החלטות ממשלה, תכניות לאומיות, תקציבים ומשאבים המיועדים לקהילה, תוך קידום שקיפות, אחריות ציבורית ובקרה אזרחית לוידוי שהמשאבים ממומשים באופן אפקטיבי."
},
{
  icon: Users,
  title: "בניית רשת מנהיגות ושותפות ארצית",
  text: "הפורום יהווה בית מקצועי המחבר בין פעילים חברתיים, מנהלים, אנשי מקצוע, אקדמאים, יזמים ומובילי דעה מכל רחבי הארץ, במטרה ליצור רשת השפעה ארצית המבוססת על שותפות, מצוינות, ערבות הדדית וציונות."
},
{
  icon: Flag,
  title: "קידום יוזמות, חקיקה ותשתיות לאומיות לקהילה",
  text: "פורום מובילים יחד יפעל לפיתוח והובלת יוזמות חברתיות, לקידום חקיקה ומדיניות ציבורית, להקמת מערכי ייעוץ משפטי, כלכלי ואסטרטגי, ולגיוס משאבים ובניית תשתיות ארוכות טווח שיאפשרו את מימוש חזון הפורום."
}];


const programImages = [
  {
    url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/f14ec177a_WhatsAppImage2026-06-24at092438.jpg",
    alt: "תוכנית הכשרת מנהיגות יישובית עירונית"
  },
  {
    url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/a2357edbf_WhatsAppImage2026-06-24at0924381.jpg",
    alt: "חמ\"ל קהילתי"
  },
  {
    url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/3f84a836b_WhatsAppImage2026-06-24at092439.jpg",
    alt: "התערבות חינוכית"
  },
  {
    url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/4038d58d5_WhatsAppImage2026-06-24at0924391.jpg",
    alt: "לובינג פרלמנטרי"
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
            className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              אודות <span className="text-secondary">הפורום</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed"> בשנת 2022 החלה פעילותה של פורום מובילים יחד מתוך אמונה בדור הצעיר ואנשי עשייה  של יוצאים אתיופיה בישראל שהאמינו בכוחה של אחדות, שותפות ועבודה מול מקבלי ההחלטות במוסדות הממשלתיים הרלוונטים מתוך תחושת שליחות. הפורום שואף לחזק את הייצוג במוקדי קבלת ההחלטות, להשפיע על סדר היום הציבורי ולבנות עתיד המבוסס על שוויון הזדמנויות, שותפות אזרחית ומנהיגות אחראית.

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
                פורום מובילים יחד פועל לקידום מנהיגות צעירה, פיתוח קהילה והכשרת דור העתיד במרחב הציבורי, החברתי והפוליטי. הפורום מעניק לחבריו כלים מעשיים בתחומי <strong className="text-foreground">מנהיגות, משא ומתן, תקשורת, מדיה חברתית, פתרון בעיות וחשיבה אסטרטגית</strong> — במטרה להצמיח מנהיגים ומובילי דרך מהשטח.
              </p>
              <p className="text-muted-foreground leading-loose text-lg mb-6">
                הפורום מלווה מועמדים ומועמדות המבקשים להשתלב בזירה הציבורית והפוליטית, תוך חיזוק החזון האישי, יכולות קבלת ההחלטות והובלה אחראית מתוך ערכים, מקצועיות וחיבור לקהילה.
              </p>
              <p className="text-muted-foreground leading-loose text-lg">
                ייחודו של הפורום טמון גם בפעילות <strong className="text-foreground">פיקוח, מעקב וביקורת</strong> על יישום החלטות ממשלה ומדיניות הנוגעת לקהילה, לצד פיתוח חוסן אישי וקהילתי — מתוך אמונה שעשייה משותפת, אחריות ציבורית והעצמת צעירים הם המפתח לשינוי אמיתי.
              </p>
              <p className="text-foreground font-bold leading-loose text-lg">
                פיקוח ובקרה על החלטות ממשלה ויישומם בשטח.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Forum */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              אודות <span className="text-secondary">הפורום</span>
            </h2>
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-6">
              <p className="text-muted-foreground leading-loose text-lg">
                בשנת 2022 החלה פעילותה של פורום מובילים יחד מתוך קבוצה קטנה של צעירים ואנשי עשייה שהאמינו בכוחם של אחדות, שותפות ועבודה משותפת אשר בחרו לראות את המחבר והשקיעו מזמנם הפרטי בהתנדבות מלאה לטובת חשיבה, תכנון, הנגשת מידע, יצירת חיבורים וקידום פעילויות חברתיות וציבוריות למען הקהילה והחברה הישראלית.
              </p>
              <p className="text-muted-foreground leading-loose text-lg">
                מתוך תחושת שליחות והבנה כי המציאות מחייבת יצירת מסגרת מנהיגותית מקצועית ומשפיעה, הוקמה בשנת 2024 <strong className="text-foreground">עמותת פורום מובילים יחד (ע"ר 580795821)</strong>, על ידי קבוצת אקטיביסטים, מנהיגים צעירים ואנשי מקצוע מהקהילה האתיופית-ישראלית.
              </p>
              <p className="text-muted-foreground leading-loose text-lg">
                העמותה פועלת לקידום מנהיגות צעירה ויוזמת מהשטח, במטרה להצמיח דור חדש של מנהיגים איכותיים, ערכיים ובעלי השפעה, שייקחו חלק פעיל במרחב הציבורי, החברתי והפוליטי בישראל. <strong className="text-foreground">פורום מובילים יחד מזמין צעירים, אנשי מקצוע ושותפים לדרך</strong> לקחת חלק בבניית דור העתיד של המנהיגות הישראלית.
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
            {values.map((val, i) =>
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-secondary/30 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <val.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-2">{val.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{val.text}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              אתגרי <span className="text-secondary">הפורום</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {challenges.map((challenge, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-secondary/30 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <challenge.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-2">{challenge.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{challenge.text}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Forum Goals */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              מטרות <span className="text-secondary">הפורום</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {forumGoals.map((goal, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-secondary/30 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <goal.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-2">{goal.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{goal.text}</p>
                </div>
              </motion.div>
            )}
          </div>
          <div className="mt-10 bg-primary rounded-2xl p-6 text-center max-w-5xl mx-auto">
            <p className="text-white font-bold text-xl">להוביל . להשפיע . להצליח</p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              תוכניות <span className="text-secondary">ופעילויות</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {programImages.map((img, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <img src={img.url} alt={img.alt} className="w-full h-auto object-contain" />
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>);

}