import React, { useEffect } from "react";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  // this for animation
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes />
    </>
  );
};

export default App;
