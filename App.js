import React from "react";
import GlobalStyles from "./styles/globalStyles";
import AnimatedBackground from "./components/AnimatedBackground";
import HeroSection from "./components/HeroSection";
import InteractiveCards from "./components/InteractiveCards";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer"; // ✅ Add Footer

const App = () => {
  return (
    <>
      <GlobalStyles />
      <AnimatedBackground />
      <Navbar />
      <CustomCursor />
      <HeroSection />
      <InteractiveCards />
      <Footer />  {/* ✅ Add Footer at the bottom */}
    </>
  );
};

export default App;