import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import TeamMemberCard from "../components/team/TeamMemberCard";
import TeamMemberModal from "../components/team/TeamMemberModal";

const boardMembers = [
{
  name: "אבי יצחק",
  title: "יו\"ר ומייסד הפורום",
  badge: "ממייסדי העמותה",
  bio: "אברהם (אבי) יצחק הוא מייסד ויו\"ר פורום מובילים יחד. מנהיג קהילתי ואקטיביסט ציבורי המוביל את חזון העמותה ליצירת מנהיגות מקצועית ובלתי תלויה מקרב בני הקהילה האתיופית-ישראלית.",
  linkedin: "#"
},
{
  name: "אביבה חזן",
  title: "חברת ועד וממייסדי העמותה",
  badge: "ממייסדי העמותה",
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
  name: "חגית תספאי",
  title: "חברת ועד וממייסדי העמותה",
  badge: "ממייסדי העמותה",
  bio: "חגית תספאי היא חברת הוועד המנהל ומהמייסדות של פורום מובילים יחד. מחויבת לקידום שוויון הזדמנויות ולבניית גשרים בין הקהילה למוקדי קבלת ההחלטות.",
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
  bio: "סמצ'או גטנך הוא חבר הוועד המנהל ומהמייסדים של פורום מובילים יחד. פעיל בתחום הלובינג הפרלמנטרי וקידום הייצוג ההולם.",
  linkedin: "#"
}];


const professionalTeam = [
{
  name: "עו\"ד אייצ'לותם מסלה",
  title: "יועץ משפטי לעמותה",
  badge: "ייעוץ משפטי",
  bio: "עו\"ד אייצ'לותם מסלה משמש כיועץ המשפטי של פורום מובילים יחד. מלווה את העמותה בכל ההיבטים המשפטיים והרגולטוריים, ומוודא עמידה בדרישות החוק והתקנות.",
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
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-12 h-auto rounded-3xl">
              <TabsTrigger value="board" className="py-3 text-sm">
                הוועד המנהל ומייסדי העמותה
              </TabsTrigger>
              <TabsTrigger value="professional" className="py-3 text-sm">
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