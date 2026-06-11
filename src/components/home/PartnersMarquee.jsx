import React from "react";

const partners = [
{
  name: "משרד העלייה והקליטה",
  logo: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/4387daf25____-_.png"
},
{
  name: "ג'וינט ישראל",
  logo: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/64a59de3b_logo-print.png"
},
{
  name: "המכון הישראלי לדמוקרטיה",
  logo: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/0c6f029c5_Logo_Large_101731_du3cv4k.png"
},
{
  name: "הקרן החדשה לישראל",
  logo: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/1490c10eb_nl2.jpg"
},
{
  name: "עמותת פידל",
  logo: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/00e34bf68_logo-mob.svg"
},
{
  name: "הסוכנות היהודית",
  logo: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/aa96daab8_untitled_WA.jpg"
},
{
  name: "קרן קרב",
  logo: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/3e704e039_R.jpg"
},
{
  name: "משרד ראש הממשלה",
  logo: "https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/36c806d4c_-120-90-01-1.png"
}];


export default function PartnersMarquee() {
  return (
    <section className="py-16 bg-white border-y border-border" aria-label="שותפים אסטרטגיים">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-foreground mb-10">
          שותפים <span className="text-secondary">אסטרטגיים</span> לדרך
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {partners.map((partner, i) =>
          <div
            key={i}
            className="flex flex-col items-center justify-center gap-3 bg-white rounded-2xl border border-border hover:border-secondary/30 hover:shadow-md transition-all duration-300 p-6 group">
            
              <div className="flex items-center justify-center h-16">
                <img src="https://media.base44.com/images/public/6a0ee0cfd572440ff8443041/1490c10eb_nl2.jpg"

              alt={partner.name}
              className="max-h-16 max-w-[120px] w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
              
              </div>
              <p className="text-xs text-center text-muted-foreground font-medium">{partner.name}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}