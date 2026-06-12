import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 18, suffix: "", label: "פעילים חברתיים בפורום" },
  { value: 48, suffix: "", label: "מפגשי דיון" },
  { value: 14, suffix: "", label: "נציגויות בערים שונות" },
  { value: 17, suffix: "", label: "תמיכה ופעילות קהילתית חברתית" },
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-secondary">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsCounters() {
  return (
    <section className="py-20 bg-primary" aria-label="נתונים וסטטיסטיקות">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="text-primary-foreground/70 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}