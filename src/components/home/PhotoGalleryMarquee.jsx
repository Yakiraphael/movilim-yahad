import React, { useRef, useState } from "react";

// All real activity photos from the forum
const allPhotos = [
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/2a507cbc3_DSC_4236JPG.jpg", alt: "ישיבת פורום - מנהיגים בפעולה" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/1a5047da9_DSC_4251JPG.jpg", alt: "פגישת פורום - דיון אסטרטגי" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/e978e12d7_DSC_4424.jpg", alt: "חגיגת הפורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/2a7831117_DSC03387JPG.jpg", alt: "לחיצת יד - שיתוף פעולה" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/6ea024195_245A3276-.jpg", alt: "ישיבה מקצועית" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/fb183fff4_245A3168.jpg", alt: "סדנת מנהיגות" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/699a2c3ed_245A3003-.jpg", alt: "פגישת מייסדים" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/53288ea50_FB_IMG_1716453307332.jpg", alt: "פעילות קהילתית" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/26b52baf9_FB_IMG_1718701193825.jpg", alt: "כנס הפורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/50de62eae_FB_IMG_1720981023126.jpg", alt: "אירוע מנהיגות" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/955f85946_SE02-8557-.jpg", alt: "ישיבת הנהגה" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/2d6b44775_SE02-8515-.jpg", alt: "צוות הפורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/41ad5a006_WhatsAppImage2023-08-20at100415.jpg", alt: "אירוע פורום 2023" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/355b1f19c_WhatsAppImage2023-08-20at095654.jpg", alt: "כנס מנהיגות" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/fde4b8314_WhatsAppImage2024-03-26at112521PM.jpg", alt: "ישיבת ועד" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/6488707f7_WhatsAppImage2024-03-26at112733PM.jpg", alt: "פגישה מקצועית" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/45c2f9bfe_WhatsAppImage2024-03-28at83135PM.jpg", alt: "אירוע קהילתי" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/7ed506407_WhatsAppImage2024-04-01at092338.jpg", alt: "סדנה מנהיגותית" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/3b90d53e7_WhatsAppImage2024-04-01at092926.jpg", alt: "פגישה עם שותפים" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/8a86a793d_WhatsAppImage2024-04-01at102551.jpg", alt: "ישיבת עבודה" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/d6e89d055_WhatsAppImage2024-04-01at102704.jpg", alt: "הצגת חזון" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/06621f912_WhatsAppImage2024-04-01at102735.jpg", alt: "חגיגת הפורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/1b5d8235b_WhatsAppImage2024-04-01at102736AM.jpg", alt: "קבלת פרסים" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/0c7703618_WhatsAppImage2024-04-03at15157PM.jpg", alt: "ישיבת פורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/e5416f513_WhatsAppImage2025-10-04at2336361.jpg", alt: "פעילות 2025" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/d81dacf65_Screenshot_20250211_094043_Chrome1.jpg", alt: "כנסת - ועדת עלייה" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/66878dbca_1492023-9769.jpg", alt: "אירוע פורום" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/35ae1e064_1492023-9635.jpg", alt: "פגישת מנהיגות" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/f37d9dd69_-8675.jpg", alt: "ישיבת הנהגה" },
  { url: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/41beadb4c_ChatGPTImageMay15202601_28_58PM.png", alt: "חמ\"ל פורום" },
];

export default function PhotoGalleryMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  const row1 = allPhotos.slice(0, Math.ceil(allPhotos.length / 2));
  const row2 = allPhotos.slice(Math.ceil(allPhotos.length / 2));

  return (
    <section className="py-16 bg-muted/30 overflow-hidden" aria-label="גלריית פעילות הפורום">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          הפורום <span className="text-secondary">בפעולה</span>
        </h2>
        <p className="text-muted-foreground">ישיבות, כנסים, ועדות כנסת, ופעילות קהילתית</p>
      </div>

      <div
        className="space-y-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Row 1 — scrolls right to left */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-4"
            style={{
              width: `${row1.length * 2 * 280}px`,
              animation: `marqueeRTL 60s linear infinite`,
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {[...row1, ...row1].map((photo, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-64 h-44 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls left to right (reverse) */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-4"
            style={{
              width: `${row2.length * 2 * 280}px`,
              animation: `marqueeRTLReverse 55s linear infinite`,
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {[...row2, ...row2].map((photo, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-64 h-44 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marqueeRTL {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRTLReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}