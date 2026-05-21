import React from "react";
import HeroSection from "../components/home/HeroSection";
import PillarsSection from "../components/home/PillarsSection";
import TimelineSection from "../components/home/TimelineSection";
import PartnersMarquee from "../components/home/PartnersMarquee";
import PhotoGalleryMarquee from "../components/home/PhotoGalleryMarquee";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PillarsSection />
      <TimelineSection />
      <PhotoGalleryMarquee />
      <PartnersMarquee />
    </div>
  );
}