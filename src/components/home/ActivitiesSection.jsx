import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X, Phone, MessageCircle } from "lucide-react";

const hubs = [
{ city: "אשדוד", region: "מרכז-דרום", description: "המטה הראשי — משרדי הפורום, ישיבות ועד, אירועים ארציים.", isHQ: true },
{ city: "קריית גת", region: "שפלה", description: "פעילות קהילתית ומנהיגות מוניציפלית באזור קריית גת.", isHQ: false, flyer: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/f51a0210e_6254b4cb-c8b4-4dd5-9d0b-0cee954c940d.jpg", contact: "ענת אלפה – אשת חינוך ואקטיביסטית, מובילת קבוצת מנהיגות בעיר קריית גת, ונציגת פורום מובילים יחד", phone: "052-8040787" },
{ city: "באר שבע", region: "דרום", description: "קהילות הנגב, מרכזי קהילה ופעילות צעירים.", isHQ: false, flyer: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/76a523d44_b1269d4d-7495-435e-9af1-bab66a5dbdcb.jpg", contact: "עמרם אקלום – איש חינוך ומרצה, נציג ומוביל קבוצת מנהיגות בעיר באר שבע מטעם פורום מובילים ארצי", phone: "050-7831231" },
{ city: "גדרה", region: "שפלה", description: "פעילות קהילתית ומנהיגות מקומית ביישוב גדרה.", isHQ: false, flyer: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/84fcea911_016f467b-fab9-413a-aa3c-a80bd7da8fce.jpg", contact: "מנטגבוש קנדה – אקטיביסטית, ואשת חינוך מובילה קבוצת מנהיגות ביישוב גדרה מטעם פורום מובילים יחד", phone: "053-3037281" },
{ city: "ירושלים", region: "ירושלים", description: "פעילות פרלמנטרית, ועדות כנסת ולובינג ממשלתי.", isHQ: false },
{ city: "תל אביב", region: "גוש דן", description: "רשתות עסקיות, נטוורקינג ואירועי מנהיגות.", isHQ: false },
{ city: "אשקלון", region: "דרום-מרכז", description: "פעילות קהילתית ומנהיגות מוניציפלית באשקלון.", isHQ: false, flyer: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/3e2a3efc1_a69fbddf-d64a-4d4a-86bd-475e16a6b0f2.jpg", contact: "חגית טספאי – מנהלת ונציגת הפורום באשקלון", phone: "050-9062004" },
{ city: "נתניה", region: "שרון", description: "פעילות עירונית ומנהיגות מוניציפלית.", isHQ: false },
{ city: "לוד", region: "מרכז", description: "פעילות קהילתית ומנהיגות מוניציפלית בלוד.", isHQ: false },
{ city: "ראשון לציון", region: "גוש דן", description: "פעילות קהילתית ומנהיגות עירונית בראשון לציון.", isHQ: false },
{ city: "רמלה", region: "מרכז", description: "פעילות קהילתית ומנהיגות מוניציפלית ברמלה.", isHQ: false },
{ city: "קרני שומרון", region: "שומרון", description: "פעילות קהילתית ומנהיגות מקומית בקרני שומרון.", isHQ: false },
{ city: "נס ציונה", region: "מרכז", description: "פעילות קהילתית ומנהיגות עירונית בנס ציונה.", isHQ: false },
{ city: "אריאל", region: "שומרון", description: "פעילות קהילתית ומנהיגות מקומית באריאל.", isHQ: false }];


export default function ActivitiesSection() {
  const [selectedHub, setSelectedHub] = useState(null);

  return (
    <>
      {/* Hubs Map Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              פעילויות <span className="text-secondary">מקומיות</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              הפורום פעיל בכל רחבי הארץ — ממטה ראשי באשדוד ועד מוקדי פעילות ברחבי ישראל
            </p>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border shadow-lg mb-12 h-80">
            <iframe
              title="מפת מוקדי פעילות הפורום"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1811427.0!2d34.3!3d31.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15016d13073de0d5%3A0x5b95cfe86ef2ef32!2sIsrael!5e0!3m2!1siw!2sil!4v1700000000000!5m2!1siw!2sil"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            
          </div>

          {/* Hub Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {hubs.map((hub, i) =>
            <motion.div
              key={hub.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => hub.flyer && setSelectedHub(hub)}
              className={`rounded-2xl border p-4 transition-all duration-300 ${hub.isHQ ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border hover:border-secondary/40 hover:shadow-lg"} ${hub.flyer ? "cursor-pointer" : ""}`}>
              
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${hub.isHQ ? "bg-secondary" : "bg-secondary/10"}`}>
                    <MapPin className={`w-4 h-4 ${hub.isHQ ? "text-secondary-foreground" : "text-secondary"}`} />
                  </div>
                  <h3 className={`font-bold text-sm ${hub.isHQ ? "text-white" : "text-foreground"}`}>{hub.city}</h3>
                </div>
                <p className={`text-xs leading-relaxed ${hub.isHQ ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{hub.description}</p>
                {hub.flyer && <p className="text-xs mt-2 font-medium text-secondary">לחץ לפרטים ←</p>}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Municipal Activity */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              פעילות <span className="text-secondary">מוניציפלית</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Text */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  פורום מובילים יחד רואה בשלטון המקומי את אחד ממוקדי ההשפעה המשמעותיים ביותר על חיי התושבים ועל עיצוב עתיד החברה הישראלית. מתוך תפיסה זו, הפורום פועל לאיתור, הכשרה וליווי של מנהיגים ומנהיגות מבני הקהילה המתמודדים לרשויות המקומיות, במטרה להגדיל את הייצוג במוקדי קבלת ההחלטות.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  במערכות הבחירות האחרונות לקח הפורום חלק פעיל ומשמעותי בליווי מועמדים ברשויות המקומיות ברמלה, אשדוד וקרני שומרון. פעילות זו כללה גיבוש חזון ציבורי, בניית מסרים, גיוס מתנדבים, הובלת מטות שטח, סיוע ביום הבחירות והפעלת פעילים בקלפיות. בזכות עבודה משותפת, נחושה ומקצועית, הצליחו שלושה מועמדים מבני הקהילה להיבחר ולכהן כחברי מועצה ברשויותיהם.
                </p>
                <div className="bg-secondary/10 rounded-xl p-4 border border-secondary/20">
                  <p className="text-sm font-bold text-foreground mb-1">חזון הפעילות המוניציפלית:</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">ליצור דור חדש של מנהיגות מקומית, המחוברת לקהילה, משפיעה על המדיניות העירונית ופועלת לקידום שוויון הזדמנויות, פיתוח קהילתי וייצוג הולם במוקדי קבלת ההחלטות.</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-bold text-foreground mb-2">הליווי כולל:</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {["הגדרת פלטפורמה ציבורית וחזון עירוני", "בניית צוות קמפיין ורשתות תמיכה", "הכשרה בנאום, מדיה ודיבייטינג", "ייעוץ אסטרטגי לאורך כל תהליך ההתמודדות", "ליווי בפגישות עם בעלי עניין ומוסדות"].map((item, i) =>
                    <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="bg-primary rounded-2xl p-6">
                <p className="text-white font-bold text-base mb-2">מעוניינים בליווי?</p>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">הפורום מזמין מועמדים ומועמדות פוטנציאליים ליצור קשר ולהצטרף לתוכנית הליווי המוניציפלית שלנו.</p>
                <a href="https://wa.me/972525090179" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-xl font-bold text-sm hover:bg-secondary/90 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  יצירת קשר בוואטסאפ
                </a>
              </div>
            </div>

            {/* Images */}
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-border shadow-md">
                <img
                  src="https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/699a16301_.jpg"
                  alt="פעילות מוניציפלית - פורום מובילים יחד"
                  className="w-full object-cover" />
                
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                  <img src="https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/93912fb96_222.jpg" alt="מפגש מועמדים" className="w-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                  <img src="https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/24775a9f7_WhatsAppImage2026-06-12at0813033.jpg" alt="אירוע הוקרה מוניציפלי" className="w-full object-cover" />
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                <img src="https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/44d475ae7_111.jpg" alt="ועדת כנסת" className="w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* National Activity */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              פעילות ארצית – מנהיגות לכנסת ישראל{" "}
              
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  פורום מובילים יחד הוקם מתוך אמונה כי לקהילה חייב להיות ייצוג משמעותי גם בזירה הלאומית. הפורום פועל לאתר, לטפח ולהכשיר מנהיגים בעלי יכולת השפעה ארצית, מתוך שאיפה להצמיח חברי כנסת, שרים ומובילי מדיניות שייצגו את הציבור מתוך מקצועיות, אחריות ציבורית ותחושת שליחות.
                </p>
                <p className="text-sm font-bold text-foreground mb-2">הפורום מעניק למועמדים הנבחרים מעטפת מקצועית הכוללת:</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {[
                  "בניית חזון ציבורי",
                  "גיבוש תכנית מדינית וחברתית",
                  "אסטרטגיית קמפיין",
                  "ייעוץ תקשורתי",
                  "קשרי ציבור ויחסי תקשורת",
                  "כתיבת נאומים ומסרים",
                  "ליווי בהופעות ציבוריות ועימותים",
                  "גיוס פעילים ומתנדבים",
                  "ליווי שוטף לאורך הקמפיין"].
                  map((item, i) =>
                  <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  )}
                </ul>
                <div className="mt-4 bg-secondary/10 rounded-xl p-4 border border-secondary/20">
                  <p className="text-sm font-bold text-foreground mb-1">חזון הפעילות הארצית:</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">להצמיח מנהיגות לאומית ערכית ומשפיעה מקרב בני הקהילה, שתיקח חלק בעיצוב סדר היום הישראלי, בקבלת החלטות ברמה הלאומית ובהובלת תהליכים חברתיים, כלכליים וציבוריים למען כלל אזרחי ישראל.</p>
                </div>
              </div>
              <div className="bg-primary rounded-2xl p-6">
                <p className="text-white font-bold text-base mb-2">מעוניינים להצטרף?</p>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">הפורום מזמין מנהיגים ומנהיגות בעלי שאיפה לזירה הלאומית ליצור קשר ולשמוע עוד על תוכנית הליווי הארצית.</p>
                <a href="https://wa.me/972525090179" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-xl font-bold text-sm hover:bg-secondary/90 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  יצירת קשר בוואטסאפ
                </a>
              </div>
            </div>

            {/* National Images */}
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-border shadow-md">
                


                
                
              </div>
              <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                <img
                  src="https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/2ef5bce25_-.jpeg"
                  alt="פעילות ארצית - פורום מובילים יחד"
                  className="w-full object-cover" />
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flyer Modal */}
      <AnimatePresence>
        {selectedHub &&
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedHub(null)}>
          
            <motion.div
            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}>
            
              <div className="relative">
                <button onClick={() => setSelectedHub(null)} className="absolute top-3 left-3 z-10 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
                  <X className="w-4 h-4" />
                </button>
                <img src={selectedHub.flyer} alt={`מודעת פעילות ${selectedHub.city}`} className="w-full object-contain max-h-[70vh]" />
              </div>
              {(selectedHub.contact || selectedHub.phone) &&
            <div className="p-4 bg-primary text-right">
                  <p className="text-primary-foreground/90 text-sm leading-relaxed">{selectedHub.contact}</p>
                  {selectedHub.phone &&
              <a href={`tel:${selectedHub.phone}`} className="inline-flex items-center gap-2 mt-2 text-secondary font-bold text-lg hover:underline">
                      <Phone className="w-4 h-4" />
                      {selectedHub.phone}
                    </a>
              }
                </div>
            }
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}