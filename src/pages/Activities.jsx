import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X, Phone } from "lucide-react";

const hubs = [
  {
    city: "אשדוד",
    region: "מרכז-דרום",
    description: "המטה הראשי — משרדי הפורום, ישיבות ועד, אירועים ארציים.",
    isHQ: true,
  },
  {
    city: "קריית גת",
    region: "שפלה",
    description: "פעילות קהילתית ומנהיגות מוניציפלית באזור קריית גת.",
    isHQ: false,
    flyer: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/f51a0210e_6254b4cb-c8b4-4dd5-9d0b-0cee954c940d.jpg",
    contact: "ענת אלפה – אשת חינוך ואקטיביסטית, מובילת קבוצת מנהיגות בעיר קריית גת, ונציגת פורום מובילים יחד",
    phone: "052-8040787",
  },
  {
    city: "באר שבע",
    region: "דרום",
    description: "קהילות הנגב, מרכזי קהילה ופעילות צעירים.",
    isHQ: false,
    flyer: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/76a523d44_b1269d4d-7495-435e-9af1-bab66a5dbdcb.jpg",
    contact: "עמרם אקלום – איש חינוך ומרצה, נציג ומוביל קבוצת מנהיגות בעיר באר שבע מטעם פורום מובילים ארצי",
    phone: "050-7831231",
  },
  {
    city: "גדרה",
    region: "שפלה",
    description: "פעילות קהילתית ומנהיגות מקומית ביישוב גדרה.",
    isHQ: false,
    flyer: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/84fcea911_016f467b-fab9-413a-aa3c-a80bd7da8fce.jpg",
    contact: "מנטגבוש קנדה – אקטיביסטית, ואשת חינוך מובילה קבוצת מנהיגות ביישוב גדרה מטעם פורום מובילים יחד",
    phone: "053-3037281",
  },
  {
    city: "ירושלים",
    region: "ירושלים",
    description: "פעילות פרלמנטרית, ועדות כנסת ולובינג ממשלתי.",
    isHQ: false,
  },
  {
    city: "תל אביב",
    region: "גוש דן",
    description: "רשתות עסקיות, נטוורקינג ואירועי מנהיגות.",
    isHQ: false,
  },
  {
    city: "אשקלון",
    region: "דרום-מרכז",
    description: "פעילות קהילתית ומנהיגות מוניציפלית באשקלון.",
    isHQ: false,
    flyer: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/3e2a3efc1_a69fbddf-d64a-4d4a-86bd-475e16a6b0f2.jpg",
    contact: "חגית טספאי – מנהלת ונציגת הפורום באשקלון",
    phone: "050-9062004",
  },
  {
    city: "נתניה",
    region: "שרון",
    description: "פעילות עירונית ומנהיגות מוניציפלית.",
    isHQ: false,
  },
];

// Activities gallery — unique set (not duplicated in Home gallery or Timeline)
const galleryPhotos = [
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/0df8cad97_WhatsAppImage2026-05-31at1255391.jpg", alt: "ישיבה עם נבחרי ציבור" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/37a129652_WhatsAppImage2026-05-31at1255411.jpg", alt: "כנס מנהיגות" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/d6725557a_WhatsAppImage2026-05-31at125554.jpg", alt: "הרצאה מקצועית" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/7333fb801_WhatsAppImage2026-05-31at125559.jpg", alt: "ישיבת עבודה" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/1a33f604c_WhatsAppImage2026-05-31at1256041.jpg", alt: "כנס ארצי" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/c4769194c_WhatsAppImage2026-05-31at125605.jpg", alt: "מפגש מנהיגות" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/6008a897c_WhatsAppImage2026-05-31at125632.jpg", alt: "כנס מובילים" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/92cf3367a_.jpg", alt: "אירוע הפורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/284fb299c_.jpg", alt: "כנס ארצי" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/3b090814d_WhatsAppImage2026-05-31at125532.jpg", alt: "מפגש פורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/2a507cbc3_DSC_4236JPG.jpg", alt: "ישיבת פורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/53288ea50_FB_IMG_1716453307332.jpg", alt: "פעילות קהילתית" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/26b52baf9_FB_IMG_1718701193825.jpg", alt: "כנס הפורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/66878dbca_1492023-9769.jpg", alt: "אירוע פורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/d81dacf65_Screenshot_20250211_094043_Chrome1.jpg", alt: "ועדת כנסת" },
];

export default function Activities() {
  const [selectedHub, setSelectedHub] = useState(null);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              פעילויות <span className="text-secondary">מקומיות</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              הפורום פעיל בכל רחבי הארץ — ממטה ראשי באשדוד ועד מוקדי פעילות בקריית גת, באר שבע, גדרה ועוד.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map + Hubs */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
            מוקדי הפעילות <span className="text-secondary">בארץ</span>
          </h2>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border shadow-lg mb-12 h-96">
            <iframe
              title="מפת מוקדי פעילות הפורום"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1811427.0!2d34.3!3d31.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15016d13073de0d5%3A0x5b95cfe86ef2ef32!2sIsrael!5e0!3m2!1siw!2sil!4v1700000000000!5m2!1siw!2sil"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Hub Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {hubs.map((hub, i) => (
              <motion.div
                key={hub.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                onClick={() => hub.flyer && setSelectedHub(hub)}
                className={`rounded-2xl border p-6 transition-all duration-300 ${
                  hub.isHQ
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border hover:border-secondary/40 hover:shadow-lg"
                } ${hub.flyer ? "cursor-pointer" : ""}`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${hub.isHQ ? "bg-secondary" : "bg-secondary/10"}`}>
                    <MapPin className={`w-5 h-5 ${hub.isHQ ? "text-secondary-foreground" : "text-secondary"}`} />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${hub.isHQ ? "text-white" : "text-foreground"}`}>
                      {hub.city}
                      {hub.isHQ && <span className="mr-2 text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">מטה ראשי</span>}
                    </h3>
                    <p className={`text-sm ${hub.isHQ ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{hub.region}</p>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed ${hub.isHQ ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {hub.description}
                </p>
                {hub.flyer && (
                  <p className={`text-xs mt-3 font-medium ${hub.isHQ ? "text-secondary" : "text-secondary"}`}>
                    לחץ לפרטים ←
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Municipal Candidates Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              מרכז הייעוץ והליווי <span className="text-secondary">לזירה המוניציפלית</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
              הפורום מלווה מועמדים ומועמדות בתהליך ההתמודדות הבחירותית ברמה המקומית — מהגדרת החזון האישי ועד לניהול הקמפיין.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-12">
            {/* Text content */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">תהליך ההתמודדות</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  הפורום מסייע למועמדים לבנות נוכחות ציבורית אמינה ומשפיעה ברמה המוניציפלית. הליווי כולל הכשרה מקצועית בתחומי ניהול קמפיין, בניית קשרי קהילה, שיווק פוליטי ומיומנויות ניהוליות.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "הגדרת פלטפורמה ציבורית וחזון עירוני",
                    "בניית צוות קמפיין ורשתות תמיכה",
                    "הכשרה בנאום, מדיה ודיבייטינג",
                    "ייעוץ אסטרטגי לאורך כל תהליך ההתמודדות",
                    "ליווי בפגישות עם בעלי עניין ומוסדות",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary rounded-2xl p-6">
                <p className="text-white font-bold text-base mb-2">מעוניינים בליווי?</p>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  הפורום מזמין מועמדים ומועמדות פוטנציאליים ליצור קשר ולהצטרף לתוכנית הליווי המוניציפלית שלנו.
                </p>
              </div>
            </div>

            {/* Brochure / content images */}
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-border shadow-md">
                <img
                  src="https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/c5ae19fd8_WhatsAppImage2026-05-31at125532.jpg"
                  alt="ישיבת מועמדים מוניציפלית"
                  className="w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                  <img
                    src="https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/93912fb96_222.jpg"
                    alt="מפגש מועמדים"
                    className="w-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                  <img
                    src="https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/0023150d8_11.jpg"
                    alt="אירוע הוקרה מוניציפלי"
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                  <img
                    src="https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/81181335c_12.jpg"
                    alt="כנס מועמדים"
                    className="w-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                  <img
                    src="https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/44d475ae7_111.jpg"
                    alt="ליווי בחירות מוניציפליות"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Static Photo Gallery */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
            תמונות <span className="text-secondary">מהפעילות</span>
          </h2>
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
            {galleryPhotos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-8">
            תמונות נוספות יתווספו בהמשך — נשמח לקבל תמונות ממוקדי הפעילות שלכם!
          </p>
        </div>
      </section>

      {/* Flyer Modal */}
      <AnimatePresence>
        {selectedHub && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedHub(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedHub(null)}
                  className="absolute top-3 left-3 z-10 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <img
                  src={selectedHub.flyer}
                  alt={`מודעת פעילות ${selectedHub.city}`}
                  className="w-full object-contain max-h-[70vh]"
                />
              </div>
              {(selectedHub.contact || selectedHub.phone) && (
                <div className="p-4 bg-primary text-right">
                  <p className="text-primary-foreground/90 text-sm leading-relaxed">{selectedHub.contact}</p>
                  {selectedHub.phone && (
                    <a
                      href={`tel:${selectedHub.phone}`}
                      className="inline-flex items-center gap-2 mt-2 text-secondary font-bold text-lg hover:underline"
                    >
                      <Phone className="w-4 h-4" />
                      {selectedHub.phone}
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}