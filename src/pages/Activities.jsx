import React from "react";
import { motion } from "framer-motion";

const allPhotos = [
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/699a16301_.jpg", alt: "פעילות מוניציפלית" },
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
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/e5f0b7a21_WhatsAppImage2026-05-31at125538.jpg", alt: "ישיבת פורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/174d69198_WhatsAppImage2026-05-31at125539.jpg", alt: "תעודת הוקרה" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/4f504abbe_WhatsAppImage2026-05-31at125541.jpg", alt: "פגישת מנהיגים" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/58f2fc9ae_WhatsAppImage2026-05-31at125552.jpg", alt: "אירוע פורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/ec5c7d5ef_WhatsAppImage2026-05-31at125600.jpg", alt: "צוות הפורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/675af5cc2_WhatsAppImage2026-05-31at125604.jpg", alt: "אירוע קהילתי" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/fa6ef5629_WhatsAppImage2026-05-31at125606.jpg", alt: "פורום בפעולה" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/f5b05aa07_WhatsAppImage2026-05-31at125631.jpg", alt: "ישיבת מנהיגות" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/79a525976_.jpg", alt: "פגישת שותפים" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/e00c083ca_.jpg", alt: "ישיבה אסטרטגית" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/ad1994384_.jpg", alt: "פעילות קהילתית" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/c7675b498_WhatsAppImage2026-05-31at125532.jpg", alt: "ישיבת הנהגה" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/e978e12d7_DSC_4424.jpg", alt: "חגיגת הפורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/6ea024195_245A3276-.jpg", alt: "ישיבה מקצועית" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/fb183fff4_245A3168.jpg", alt: "סדנת מנהיגות" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/955f85946_SE02-8557-.jpg", alt: "קבלת הוקרה" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/2d6b44775_SE02-8515-.jpg", alt: "אירוע הוקרה" },
];

export default function Activities() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              גלריית <span className="text-secondary">תמונות</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              ישיבות, כנסים, ועדות כנסת, פעילות קהילתית ואירועי מנהיגות — הפורום בפעולה
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
            {allPhotos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
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
    </div>
  );
}