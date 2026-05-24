import React from "react";
import { Mail, MapPin, Facebook, Linkedin, Instagram, Phone } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php/?id=100094705007552", label: "פייסבוק", color: "hover:bg-blue-600" },
  { icon: Instagram, href: "#", label: "אינסטגרם", color: "hover:bg-pink-600" },
  { icon: Phone, href: "https://wa.me/972525090179", label: "וואטסאפ", color: "hover:bg-green-600" },
];

const EMAIL = "forum.movilim@gmail.com";
const PHONE = "052-509-0179";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold text-foreground mb-6">פרטי התקשרות</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">אימייל</p>
              <a href={`mailto:${EMAIL}`} className="text-foreground hover:text-secondary transition-colors font-medium" dir="ltr">
                {EMAIL}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">טלפון / וואטסאפ</p>
              <a href="https://wa.me/972525090179" className="text-foreground hover:text-secondary transition-colors font-medium" dir="ltr">{PHONE}</a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">כתובת</p>
              <p className="text-foreground font-medium">ישראל</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social */}
      <div>
        <h3 className="text-lg font-bold text-foreground mb-4">עקבו אחרינו</h3>
        <div className="flex gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-white ${social.color} transition-all duration-300`}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="rounded-2xl overflow-hidden border border-border h-64 bg-muted flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <MapPin className="w-8 h-8 mx-auto mb-2" />
          <p className="text-sm">מפה אינטראקטיבית</p>
          <p className="text-xs">תתעדכן בקרוב</p>
        </div>
      </div>
    </div>
  );
}