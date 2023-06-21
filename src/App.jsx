import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Preloader from "./components/Preloader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <BrowserRouter>
      <AnimatedCursor
  innerSize={8}
  outerSize={35}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  innerStyle={{
    backgroundColor: '#fff'
  }}
  outerStyle={{
    border: '3px solid #fff',
    mixBlendMode: 'exclusion'

  }}
  clickables={[
    '.cursor-pointer'
  ]}
      />

      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <div className="relative z-0 bg-gradient-to-b from-primary-gradient to-secondary-gradient">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            {/* <Feedbacks /> */}
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
