import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import TeamMemberCard from "../components/team/TeamMemberCard";
import TeamMemberModal from "../components/team/TeamMemberModal";

const boardMembers = [
{
  name: "אבי יצחק",
  title: "יו\"ר ומנכ\"ל הפורום",
  badge: "מייסד העמותה",
  photo: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/c15f06d04_.jpg",
  bio: `אב לשלושה, יו"ר ומנכ"ל פורום "מובילים יחד" — פורום הפועל לקידום צעירים במרחב החברתי, הציבורי והפוליטי מתוך עוצמה, אחריות וחזון משותף.

בוגר תואר שני ומייסד הפורום, מוביל עשייה חברתית רחבת היקף ושותף לאקטיביזם ארצי למען שוויון זכויות, צדק חברתי ויצירת שינוי אמיתי בחברה הישראלית.

מאמין כי שינוי עמוק נבנה דרך שותפות אמיתית בין אנשים מכל קשת החברה הישראלית, תוך חיבור בין קהילות, דעות ורקעים שונים למען עתיד משותף וטוב יותר.

"אל תחכו שיום יבוא — הביאו את היום."`,
  linkedin: "#"
},
{
  name: "חגית טספאי-וובשת",
  title: "מנהלת הפורום וגזברית העמותה",
  badge: "ממייסדי העמותה",
  photo: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/fe702fe9e_.jpg",
  bio: `מנהלת פורום מובילים יחד וגזברית העמותה. בעלת תואר ראשון במדעי המדינה ומשאבי אנוש, עובדת בעיריית אשקלון.

מאמינה במנהיגות המבוססת על ערכים, הקשבה, אחריות אישית, נתינה, התמדה וצמיחה אישית. פועלת מתוך אחריות, רגישות ואמונה בכוחם של חיבורים אנושיים והובלה חיובית ליצור שינוי והשפעה.`,
  linkedin: "#"
},
{
  name: "אביבה חזן",
  title: "חברת ועד וממייסדי העמותה",
  badge: "ממייסדי העמותה",
  photo: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/50a01aa3c_.jpg",
  bio: "אביבה חזן היא חברת הוועד המנהל ומהמייסדות של פורום מובילים יחד. פועלת לקידום ייצוג נשים ולחיזוק המנהיגות הנשית בקהילה.",
  linkedin: "#"
},
{
  name: "גילת אבבה",
  title: "חברת ועד וממייסדי העמותה",
  badge: "ממייסדי העמותה",
  bio: "גילת אבבה היא חברת הוועד המנהל ומהמייסדות של העמותה. פעילה בתחום הקידום החברתי והחינוכי של בני ובנות הקהילה.",
  linkedin: "#"
},
{
  name: "ציון סהלו",
  title: "חברת ועד וממייסדי העמותה",
  badge: "ממייסדי העמותה",
  bio: "ציון סהלו היא חברת הוועד המנהל ומהמייסדות של העמותה. פועלת לחיזוק החוסן הקהילתי ולהרחבת מעגלי ההשפעה של הפורום.",
  linkedin: "#"
},
{
  name: "סמצ'או גטנך",
  title: "חבר ועד וממייסדי העמותה",
  badge: "ממייסדי העמותה",
  photo: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/6f61fa486_4cf5d9b7-e7ee-4330-8f79-c2de2328945f.jpeg",
  bio: `מתגורר באשקלון, בעל תואר ראשון. מפקח ברשות האוכלוסין וההגירה בתחום הסיעוד הביתי.

חבר בפורום כבר 5 שנים — מתוך שליחות ואמונה עמוקה בחשיבות התרומה למען החברה והקהילה בתחומים שונים ומגוונים.`,
  linkedin: "#"
}];


const professionalTeam = [
{
  name: "עו\"ד אייצ'לותם מסלה",
  title: "יועץ משפטי לעמותה",
  badge: "ייעוץ משפטי",
  photo: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/7c0eb8080_.jpg",
  bio: `עורך דין ויזם נדל"ן, מייסד משרד עורכי הדין מסלה אייצ'לותם ושות'. בן 40.

פועל מתוך תפיסת עולם של מנהיגות, עשייה והשפעה חברתית, ומשלב בין פעילות משפטית מקצועית לבין יזמות עסקית וחזון קהילתי. לאורך השנים ליווה יחידים, משפחות ועסקים בצמתים משמעותיים, מתוך מחויבות לצדק, מצוינות ויצירת פתרונות אמיתיים.

מאמין בכוחה של קהילה חזקה, בחיבורים בין אנשים ובהובלה מתוך ערכים, אחריות וראייה רחבה.`,
  linkedin: "#"
}];


export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              ההנהגה <span className="text-secondary">והצוות</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              הכירו את האנשים שמובילים את השינוי — מייסדי העמותה, חברי הוועד המנהל וצוות הייעוץ המקצועי.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="board" className="w-full" dir="rtl">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-12 h-auto rounded-lg">
              <TabsTrigger value="board" className="py-3 text-center lowercase text-xs">
                הוועד המנהל ומייסדי העמותה
              </TabsTrigger>
              <TabsTrigger value="professional" className="py-3 text-xs">
                מעטפת מקצועית וייעוץ משפטי
              </TabsTrigger>
            </TabsList>

            <TabsContent value="board">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {boardMembers.map((member, i) =>
                <TeamMemberCard
                  key={member.name}
                  member={member}
                  onSelect={setSelectedMember}
                  index={i} />

                )}
              </div>
            </TabsContent>

            <TabsContent value="professional">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {professionalTeam.map((member, i) =>
                <TeamMemberCard
                  key={member.name}
                  member={member}
                  onSelect={setSelectedMember}
                  index={i} />

                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <TeamMemberModal
        member={selectedMember}
        open={!!selectedMember}
        onClose={() => setSelectedMember(null)} />
      
    </div>);

}