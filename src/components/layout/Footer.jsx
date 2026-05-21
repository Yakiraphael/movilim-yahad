import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram, Phone } from "lucide-react";

const LOGO_URL = "https://media.base44.com/images/public/user_68c7b2fde08fc5feb083ff75/5e8dd2737_.jpg";

const regulatoryLinks = [
  { label: "תעודת רישום עמותה", href: "#" },
  { label: "אישור ניהול תקין", href: "#" },
  { label: "אישור סעיף 46", href: "#" },
  { label: "דוחות כספיים", href: "#" },
  { label: "תקנון העמותה", href: "#" },
  { label: "הצהרת נגישות", href: "#" },
  { label: "מדיניות פרטיות", href: "#" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "פייסבוק" },
  { icon: Linkedin, href: "#", label: "לינקדאין" },
  { icon: Instagram, href: "#", label: "אינסטגרם" },
  { icon: Phone, href: "#", label: "וואטסאפ" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img src={LOGO_URL} alt="לוגו פורום מובילים יחד" className="h-12 mb-4" style={{ mixBlendMode: "screen", filter: "brightness(1.8) drop-shadow(0 0 8px rgba(197,165,90,0.4))" }} />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              פורום מובילים יחד (ע"ר 580795821) — פלטפורמה עצמאית להעצמת מנהיגות ציבורית ופוליטית של צעירים וצעירות יוצאי אתיופיה בישראל.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-secondary font-semibold mb-4">ניווט מהיר</h3>
            <nav className="space-y-2" aria-label="ניווט תחתון">
              <Link to="/" className="block text-sm text-primary-foreground/70 hover:text-secondary transition-colors">דף הבית</Link>
              <Link to="/about" className="block text-sm text-primary-foreground/70 hover:text-secondary transition-colors">אודותינו</Link>
              <Link to="/team" className="block text-sm text-primary-foreground/70 hover:text-secondary transition-colors">ההנהגה והצוות</Link>
              <Link to="/contact" className="block text-sm text-primary-foreground/70 hover:text-secondary transition-colors">צור קשר</Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-secondary font-semibold mb-4">עקבו אחרינו</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="mt-6 text-sm text-primary-foreground/60">
              <p>info@movilimyahad.org.il</p>
              <p className="mt-1">ישראל</p>
            </div>
          </div>
        </div>
      </div>

      {/* Regulatory / Transparency Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h4 className="text-xs text-secondary font-semibold mb-3">שקיפות ורגולציה</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {regulatoryLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-primary-foreground/50 hover:text-secondary transition-colors underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-primary-foreground/30 mt-4">
            © {new Date().getFullYear()} פורום מובילים יחד (ע"ר 580795821). כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}