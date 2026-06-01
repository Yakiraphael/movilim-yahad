import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X, Phone } from "lucide-react";

const hubs = [
  {
    city: "אשדוד",
    region: "מרכז-דרום",
    description: "המטה הראשי — משרדי הפורום, ישיבות ועד, אירועים ארציים.",
    isHQ: true,
    flyer: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/3e2a3efc1_a69fbddf-d64a-4d4a-86bd-475e16a6b0f2.jpg",
    contact: "חגית טספאי – מנהלת ונציגת הפורום באשקלון",
    phone: "050-9062004",
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
    city: "חיפה",
    region: "צפון",
    description: "פעילות אקדמית, שיתופי פעולה עם אוניברסיטת חיפה.",
    isHQ: false,
  },
  {
    city: "נתניה",
    region: "שרון",
    description: "פעילות עירונית ומנהיגות מוניציפלית.",
    isHQ: false,
  },
];

const galleryPhotos = [
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/2a507cbc3_DSC_4236JPG.jpg", alt: "ישיבת פורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/955f85946_SE02-8557-.jpg", alt: "אירוע הוקרה" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/66878dbca_1492023-9769.jpg", alt: "אירוע פורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/d81dacf65_Screenshot_20250211_094043_Chrome1.jpg", alt: "ועדת כנסת" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/6ea024195_245A3276-.jpg", alt: "ישיבה מקצועית" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/fb183fff4_245A3168.jpg", alt: "סדנת מנהיגות" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/2d6b44775_SE02-8515-.jpg", alt: "צוות הפורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/53288ea50_FB_IMG_1716453307332.jpg", alt: "פעילות קהילתית" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/26b52baf9_FB_IMG_1718701193825.jpg", alt: "כנס הפורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/e978e12d7_DSC_4424.jpg", alt: "חגיגת הפורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/7ed506407_WhatsAppImage2024-04-01at092338.jpg", alt: "סדנה מנהיגותית" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/fde4b8314_WhatsAppImage2024-03-26at112521PM.jpg", alt: "ישיבת ועד" },
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