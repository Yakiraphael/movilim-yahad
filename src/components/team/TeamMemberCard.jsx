import React from "react";
import { motion } from "framer-motion";
import { Linkedin, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function TeamMemberCard({ member, onSelect, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      <button
        onClick={() => onSelect(member)}
        className="w-full text-right group bg-card rounded-2xl border border-border hover:border-secondary/40 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-secondary/5"
        aria-label={`${member.name} — ${member.title}`}
      >
        {/* Portrait */}
        <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
          {member.photo ? (
            <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <User className="w-20 h-20 text-muted-foreground/30" />
          )}
        </div>
        {/* Info */}
        <div className="p-5">
          <h3 className="font-bold text-foreground group-hover:text-secondary transition-colors">{member.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{member.title}</p>
          {member.badge && (
            <Badge className="mt-3 bg-secondary/10 text-secondary border-secondary/20 text-xs">
              {member.badge}
            </Badge>
          )}
        </div>
      </button>
    </motion.div>
  );
}