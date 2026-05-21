import React from "react";

const partners = [
  "משרד העלייה והקליטה",
  "משרד ראש הממשלה",
  "הסוכנות היהודית",
  "ג'וינט ישראל",
  "קרן קרב",
  "עמותת פידל",
  "המכון למדיניות העם היהודי",
  "קרן גנדלר",
  "הקרן החדשה לישראל",
];

export default function PartnersMarquee() {
  return (
    <section className="py-16 bg-background border-y border-border overflow-hidden" aria-label="שותפים אסטרטגיים">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-center text-lg font-semibold text-muted-foreground">
          שותפים אסטרטגיים לדרך
        </h2>
      </div>
      <div className="relative">
        <div className="flex animate-marquee" style={{ width: "200%" }}>
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 group cursor-default"
            >
              <div className="bg-muted rounded-xl px-8 py-4 border border-border group-hover:border-secondary/30 group-hover:bg-secondary/5 transition-all duration-300">
                <span className="text-muted-foreground group-hover:text-secondary font-medium whitespace-nowrap transition-colors duration-300">
                  {partner}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}