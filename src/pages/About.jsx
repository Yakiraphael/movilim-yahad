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
  icon: GraduationCap,
  title: "פיתוח והצמחת דור מנהיגות צעיר",
  text: "איתור, הכשרה וליווי של צעירים וצעירות יוצאי אתיופיה בעלי פוטנציאל מנהיגותי, במטרה לשלבם בתפקידי השפעה במגזר הציבורי, הפוליטי, העסקי והחברתי."
},
{
  icon: Landmark,
  title: "הגדלת הייצוג במוקדי קבלת החלטות",
  text: "קידום מועמדים לתפקידים בכירים ברשויות המקומיות, במשרדי הממשלה, בכנסת, במגזר הציבורי ובארגונים מרכזיים, תוך יצירת מסלולי קידום והזדמנויות שוות."
},
{
  icon: Mic,
  title: "שינוי השיח הציבורי והנרטיב החברתי",
  text: "הובלת פעילות הסברה, תקשורת ורשתות חברתיות במטרה לחזק את תדמיתם של יוצאי אתיופיה, להציג סיפורי הצלחה ולהשפיע על דעת הקהל הישראלית."
},
{
  icon: ScanSearch,
  title: "פיקוח ובקרה על מדיניות ותקציבים",
  text: "מעקב אחר החלטות ממשלה, תקציבים ותכניות ייעודיות, תוך קידום שקיפות, בקרה ציבורית ווידוא שהמשאבים מגיעים ליעדם ומשיגים את מטרותיהם."
},
{
  icon: Users,
  title: "יצירת כוח אזרחי-ציבורי מאוחד",
  text: "חיבור בין פעילים חברתיים, אנשי מקצוע, אקדמאים, מנהלים, יזמים ואנשי ציבור מכל רחבי הארץ, ליצירת רשת השפעה ארצית הפועלת מתוך שותפות וערבות הדדית."
},
{
  icon: Flag,
  title: "קידום יוזמות חברתיות וחקיקה",
  text: "הקמת מערך מקצועי הכולל ייעוץ משפטי, כלכלי ולובינג ציבורי, במטרה לקדם חקיקה, מדיניות ויוזמות חברתיות שישפרו את מצבה של הקהילה והחברה הישראלית כולה."
}];


const programs = [
{
  icon: Star,
  title: 'תוכנית הכשרת מנהיגות יישובית עירונית',
  description: 'הכשרה ייעודית לפעילים ופעילות במרחב הציבורי — הכשרה יישובית עירונית המקנה כלים מעשיים בניהול, תקשורת, קבלת החלטות ויכולת השפעה מוניציפלית וקהילתית.'
},
{
  icon: Users,
  title: "חמ\"ל קהילתי",
  description: "מרכז מבצעי לסיוע קהילתי המלווה משפחות ואוכלוסיות מוחלשות, ונאבק עבור צדק חברתי."
},
{
  icon: Target,
  title: "לובינג פרלמנטרי",
  description: "פיקוח מקצועי על ועדות הכנסת, הגשת עמדות ומסמכי מדיניות, וייצוג אינטרסים הקהילה בזירה הלאומית. ליווי, ייעוץ ותמיכה למועמדים מתוכנו במרחב הציבורי המקומי והארצי. הארגון עוקב אחר החלטות ממשלה, מבקר ומפקח על ייעודן והניוד שלהן למשרדים השונים, לארגונים, עמותות והמגזר הפרטי הקשורים לקהילה."
},
{
  icon: BookOpen,
  title: "התערבות חינוכית",
  description: "כתיבת אמנה חברתית למניעת חרמות מכלל הגילאים והמינים — יצירת נורמה חברתית מחייבת המקדמת שיח כבוד, הכלה ואחריות הדדית בין כלל חברי הקהילה."
}];


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
            <p className="text-lg text-primary-foreground/80 leading-relaxed">בשנת 2022 החלה פעילותה של פורום מובילים יחד מתוך אמונה בדור הצעיר ואנשי עשייה  של יוצאים אתיופיה בישראל שהאמינו בכוחה של אחדות, שותפות ועבודה מול מקבלי ההחלטות במוסדות הממשלתיים הרלוונטים מתוך תחושת שליחות.

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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              תוכניות <span className="text-secondary">ופעילויות</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((prog, i) =>
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-primary rounded-2xl p-6 text-primary-foreground">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                  <prog.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{prog.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{prog.description}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>);

}