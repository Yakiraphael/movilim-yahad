import React from "react";
import { motion } from "framer-motion";

const allPhotos = [
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/f910a6062_WhatsAppImage2026-06-10at181448.jpg", alt: "מפגש הפורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/0328e098d_WhatsAppImage2026-06-10at181449.jpg", alt: "מפגש הפורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/df018dd28_WhatsAppImage2026-06-10at181511.jpg", alt: "הצגת הפורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/d74a0f749_WhatsAppImage2026-06-10at181518.jpg", alt: "אסיפת ציבור" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/f071c021e_WhatsAppImage2026-06-10at181553.jpg", alt: "מפגש חגיגי" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/5bb222ca9_WhatsAppImage2026-06-10at181617.jpg", alt: "מפגש נשים" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/ed1f64490_WhatsAppImage2026-06-10at181638.jpg", alt: "לחיצת יד" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/f75f52356_WhatsAppImage2026-06-10at181649.jpg", alt: "מפגש הוקרה" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/00a2df964_WhatsAppImage2026-06-10at181657.jpg", alt: "מפגש חגיגי" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/e96d5ba38_WhatsAppImage2026-06-10at1818381.jpg", alt: "ישיבת עבודה" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/7e18175c9_WhatsAppImage2026-06-10at181838.jpg", alt: "הרצאה בפורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/e6f3c5118_WhatsAppImage2026-06-10at181906.jpg", alt: "ישיבת פורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/fe041eee4_WhatsAppImage2026-06-10at181932.jpg", alt: "לוגו פורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/1ef1087fd_WhatsAppImage2026-06-10at1827021.jpg", alt: "ישיבת נציגים" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/e79f1b21a_WhatsAppImage2026-06-10at1827022.jpg", alt: "ישיבת עבודה" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/8df447b7f_WhatsAppImage2026-06-10at182702.jpg", alt: "ישיבת הנהגה" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/1b4dddc89_WhatsAppImage2026-06-10at1827031.jpg", alt: "אירוע פורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/6a48d8a16_WhatsAppImage2026-06-10at1827032.jpg", alt: "ישיבת מנהיגות" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/7fc901d45_WhatsAppImage2026-06-10at1827033.jpg", alt: "אירוע פורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/75dfc489a_WhatsAppImage2026-06-10at1827034.jpg", alt: "ישיבת פורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/963ddf277_WhatsAppImage2026-06-10at1827035.jpg", alt: "ישיבת פורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/1a44ceaa7_WhatsAppImage2026-06-10at1827036.jpg", alt: "ישיבת פורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/982af87aa_WhatsAppImage2026-06-10at1827037.jpg", alt: "ישיבת פורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/1d80276d2_WhatsAppImage2026-06-10at1827038.jpg", alt: "ישיבת פורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/49d38f253_WhatsAppImage2026-06-10at1827039.jpg", alt: "ישיבת פורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/5ef78b8ac_WhatsAppImage2026-06-10at18270310.jpg", alt: "ישיבת פורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/33ed88f97_WhatsAppImage2026-06-10at182703.jpg", alt: "ישיבת פורום" },
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
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/dbc83cb28_WhatsAppImage2026-06-12at075918.jpeg", alt: "כנסת ישראל" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/fa4c9c207_WhatsAppImage2026-06-12at0813031.jpg", alt: "ישיבת פורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/7a5f7179d_WhatsAppImage2026-06-12at0813032.jpg", alt: "ישיבת פורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/24775a9f7_WhatsAppImage2026-06-12at0813033.jpg", alt: "מפגש פורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/50ff9cbb9_WhatsAppImage2026-06-12at0813034.jpg", alt: "ישיבת מנהיגות" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/ea188f8bd_WhatsAppImage2026-06-12at0813035.jpg", alt: "אירוע פורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/fc45d9d05_WhatsAppImage2026-06-12at0813036.jpg", alt: "מפגש שטח" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/5e1e29e6d_WhatsAppImage2026-06-12at0813037.jpg", alt: "ישיבת פורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/c7b040b36_WhatsAppImage2026-06-12at081303.jpg", alt: "מפגש מנהיגות" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/2ef5bce25_-.jpeg", alt: "פעילות ארצית" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/42aadc075_.jpeg", alt: "אירוע פורום" },
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
                transition={{ delay: i * 0.02 }}
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