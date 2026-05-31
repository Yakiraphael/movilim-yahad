import React from "react";
import HeroSection from "../components/home/HeroSection";
import PillarsSection from "../components/home/PillarsSection";
import TimelineSection from "../components/home/TimelineSection";
import PartnersMarquee from "../components/home/PartnersMarquee";
import PhotoGalleryGrid from "../components/home/PhotoGalleryGrid";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PillarsSection />
      <TimelineSection />
      <PhotoGalleryGrid />
      <PartnersMarquee />
    </div>
  );
}