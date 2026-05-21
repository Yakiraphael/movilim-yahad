import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { base44 } from "@/api/base44Client";

const contactReasons = [
  { value: "program", label: "הגשת מועמדות לתוכנית" },
  { value: "employers", label: "פניות למעסיקים" },
  { value: "donations", label: "תרומות ותמיכה" },
  { value: "media", label: "תקשורת ודוברות" },
  { value: "other", label: "אחר" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    reason: "",
    message: "",
  });
  const [cvFile, setCvFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    let cvUrl = null;
    if (cvFile) {
      const result = await base44.integrations.Core.UploadFile({ file: cvFile });
      cvUrl = result.file_url;
    }

    // Send notification email
    await base44.integrations.Core.SendEmail({
      to: "info@movilimyahad.org.il",
      subject: `פנייה חדשה מאתר הפורום — ${formData.name}`,
      body: `
שם: ${formData.name}
טלפון: ${formData.phone}
אימייל: ${formData.email}
נושא: ${contactReasons.find(r => r.value === formData.reason)?.label || formData.reason}
הודעה: ${formData.message}
${cvUrl ? `קורות חיים: ${cvUrl}` : ""}
      `.trim(),
    });

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">הפנייה נשלחה בהצלחה!</h3>
        <p className="text-muted-foreground">צוות הפורום יחזור אליכם בהקדם.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <Label htmlFor="name">שם מלא *</Label>
        <Input
          id="name"
          required
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="הכניסו את שמכם המלא"
          className="mt-1.5"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">טלפון *</Label>
          <Input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="050-0000000"
            className="mt-1.5"
            dir="ltr"
          />
        </div>
        <div>
          <Label htmlFor="email">אימייל *</Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="name@example.com"
            className="mt-1.5"
            dir="ltr"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="reason">נושא הפנייה *</Label>
        <Select
          value={formData.reason}
          onValueChange={(val) => handleChange("reason", val)}
          required
          dir="rtl"
        >
          <SelectTrigger className="mt-1.5">
            <SelectValue placeholder="בחרו נושא" />
          </SelectTrigger>
          <SelectContent>
            {contactReasons.map((r) => (
              <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Dynamic CV upload for program applicants */}
      <AnimatePresence>
        {formData.reason === "program" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <Label htmlFor="cv">צירוף קורות חיים (PDF)</Label>
            <Input
              id="cv"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setCvFile(e.target.files[0])}
              className="mt-1.5"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        <Label htmlFor="message">הודעה</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="ספרו לנו במה נוכל לעזור..."
          rows={4}
          className="mt-1.5"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold py-6 text-base rounded-xl"
      >
        {isSubmitting ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            <Send className="w-5 h-5 ml-2" />
            שליחה
          </>
        )}
      </Button>
    </form>
  );
}