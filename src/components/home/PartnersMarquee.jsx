import React from "react";

const partners = [
  {
    name: "משרד העלייה והקליטה",
    logo: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/4387daf25____-_.png",
  },
  {
    name: "ג'וינט ישראל",
    logo: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/64a59de3b_logo-print.png",
  },
  {
    name: "המכון הישראלי לדמוקרטיה",
    logo: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/5990169dd_logo-newer.svg",
  },
  {
    name: "הקרן החדשה לישראל",
    logo: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/1490c10eb_nl2.jpg",
  },
  {
    name: "עמותת פידל",
    logo: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/00e34bf68_logo-mob.svg",
  },
  {
    name: "הסוכנות היהודית",
    logo: "https://upload.wikimedia.org/wikipedia/he/thumb/4/47/Jewish_Agency_for_Israel_logo.svg/200px-Jewish_Agency_for_Israel_logo.svg.png",
  },
  {
    name: "קרן קרב",
    logo: "https://www.kerenkarev.org.il/wp-content/uploads/2020/10/logo.png",
  },
  {
    name: "משרד ראש הממשלה",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Emblem_of_Israel.svg/120px-Emblem_of_Israel.svg.png",
  },
];

export default function PartnersMarquee() {
  return (
    <section className="py-16 bg-white border-y border-border overflow-hidden" aria-label="שותפים אסטרטגיים">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-center text-lg font-semibold text-muted-foreground">
          שותפים אסטרטגיים לדרך
        </h2>
      </div>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-white to-transparent" />

        <div
          className="flex items-center"
          style={{
            animation: "partnersScroll 30s linear infinite",
            width: "max-content",
          }}
        >
          {/* Duplicate 4x to ensure seamless loop at any screen width */}
          {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
            <div key={i} className="flex-shrink-0 mx-8 group cursor-default">
              <div className="bg-white rounded-xl px-6 py-4 border border-border group-hover:border-secondary/30 group-hover:shadow-md transition-all duration-300 flex items-center justify-center w-40 h-20">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-14 max-w-[140px] w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes partnersScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
      `}</style>
    </section>
  );
}