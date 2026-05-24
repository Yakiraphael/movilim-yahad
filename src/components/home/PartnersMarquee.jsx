import React from "react";

const partners = [
  {
    name: "משרד העלייה והקליטה",
    logo: "https://upload.wikimedia.org/wikipedia/he/thumb/3/3a/Ministry_of_Aliyah_and_Integration.svg/200px-Ministry_of_Aliyah_and_Integration.svg.png",
  },
  {
    name: "משרד ראש הממשלה",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Emblem_of_Israel.svg/120px-Emblem_of_Israel.svg.png",
  },
  {
    name: "הסוכנות היהודית",
    logo: "https://upload.wikimedia.org/wikipedia/he/thumb/4/47/Jewish_Agency_for_Israel_logo.svg/200px-Jewish_Agency_for_Israel_logo.svg.png",
  },
  {
    name: "ג'וינט ישראל",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/JDC_logo.svg/200px-JDC_logo.svg.png",
  },
  {
    name: "קרן קרב",
    logo: "https://www.kerenkarev.org.il/wp-content/uploads/2020/10/logo.png",
  },
  {
    name: "עמותת פידל",
    logo: "https://fidel.org.il/wp-content/uploads/2021/03/fidel-logo.png",
  },
  {
    name: "המכון למדיניות העם היהודי",
    logo: "https://jppi.org.il/wp-content/uploads/2018/04/jppi-logo.png",
  },
  {
    name: "קרן גנדלר",
    logo: "https://www.gandyrfoundation.org/wp-content/uploads/2020/01/gandyr-logo.png",
  },
  {
    name: "הקרן החדשה לישראל",
    logo: "https://www.nif.org/wp-content/uploads/2017/01/nif-logo-he.png",
  },
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
        <div className="flex animate-marquee items-center" style={{ width: "200%" }}>
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 group cursor-default"
            >
              <div className="bg-white rounded-xl px-6 py-4 border border-border group-hover:border-secondary/30 group-hover:shadow-md transition-all duration-300 flex flex-col items-center gap-2 min-w-[140px]">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                <span className="text-xs text-muted-foreground group-hover:text-secondary font-medium text-center transition-colors duration-300 hidden">
                  {partner.name}
                </span>
                <span className="text-xs text-muted-foreground group-hover:text-secondary font-medium text-center transition-colors duration-300">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}