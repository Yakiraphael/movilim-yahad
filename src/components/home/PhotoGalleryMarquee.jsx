import React, { useRef, useState } from "react";

// Home gallery — unique set (not duplicated in Activities gallery or Timeline)
const allPhotos = [
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
              width: "max-content",
              animation: `galleryRTL 60s linear infinite`,
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {/* 4x duplication ensures seamless loop at any viewport */}
            {[...row1, ...row1, ...row1, ...row1].map((photo, i) => (
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
              width: "max-content",
              animation: `galleryLTR 55s linear infinite`,
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {[...row2, ...row2, ...row2, ...row2].map((photo, i) => (
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
        @keyframes galleryRTL {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @keyframes galleryLTR {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}