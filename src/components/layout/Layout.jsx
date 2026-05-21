import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AccessibilityWidget from "../shared/AccessibilityWidget";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-rubik" dir="rtl">
      <Navbar />
      <main className="flex-1" id="main-content">
        <Outlet />
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
}