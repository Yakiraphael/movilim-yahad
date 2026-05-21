import React from "react";
import { ExternalLink, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GuideStarBanner() {
  return (
    <section className="bg-gradient-to-r from-secondary/10 to-secondary/5 border-t border-b border-secondary/20 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 flex-wrap">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
            <div>
              <p className="text-foreground font-semibold text-sm">עמותה מוסמכת ורשומה</p>
              <p className="text-muted-foreground text-xs">בדקו את מטבע הניהול והשקיפות שלנו ב-GuideStar</p>
            </div>
          </div>
          <a
            href="https://www.guidestar.org.il/organization/580795821"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              variant="outline" 
              size="sm"
              className="border-secondary/30 text-secondary hover:bg-secondary/5"
            >
              צפייה בפרופיל GuideStar
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}