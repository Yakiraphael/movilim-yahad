import React from "react";
import HeroSection from "../components/home/HeroSection";
import PillarsSection from "../components/home/PillarsSection";
import ActivitiesSection from "../components/home/ActivitiesSection";
import PartnersMarquee from "../components/home/PartnersMarquee";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PillarsSection />
      <ActivitiesSection />
      <PartnersMarquee />
    </div>
  );
}