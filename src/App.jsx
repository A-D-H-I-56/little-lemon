import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import FeaturedSection from "./components/FeaturedSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AboutSection from "./components/AboutSection";
import "./App.css"

const app=()=>{

return(
  <>
  <Header />
  <HeroSection />
  <FeaturedSection />
  <TestimonialsSection />
  <AboutSection />
  <Footer />
  </>
)

}

export default app;