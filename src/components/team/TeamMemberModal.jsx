import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Linkedin, User } from "lucide-react";

export default function TeamMemberModal({ member, open, onClose }) {
  if (!member) return null;
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-xl">{member.name}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center text-center">
          <div className="w-28 h-28 rounded-full bg-muted flex items-center justify-center mb-4">
            <User className="w-14 h-14 text-muted-foreground/30" />
          </div>
          <p className="text-secondary font-medium">{member.title}</p>
          {member.badge && (
            <Badge className="mt-2 bg-secondary/10 text-secondary border-secondary/20">
              {member.badge}
            </Badge>
          )}
          <p className="text-muted-foreground text-sm leading-relaxed mt-4">
            {member.bio}
          </p>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-secondary hover:underline"
              aria-label={`פרופיל לינקדאין של ${member.name}`}
            >
              <Linkedin className="w-5 h-5" />
              צפייה בפרופיל לינקדאין
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}