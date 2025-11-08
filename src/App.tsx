import './App.css'
import SplitTextComponent from './components/SplitText';
import NavMenu from './NavMenu';
import { Projects } from './components/Projects';

import ExploreAllButton from './components/ui/explore-all-button';
import { WobbleCardDemo } from "./components/wobbleCard";
import LandingPage from "./components/LandingPage";
import AboutMe from './components/aboutMe';
import Education from './components/Education';
import Research from './components/Research';
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import BackToTopButton from "./components/BackToTopButton";
import { ContactSection } from './components/ui/ContactSection';
import { Toaster } from "./components/ui/sonner"



function App() {

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1,
      effects: true,
    });

    return () => {
      smoother.kill();
    };
  }, []);


  return (
    <div id="smooth-wrapper">
      <NavMenu />
      <div id="smooth-content">
        <LandingPage />
        <div className="main-content">
          <AboutMe />
          <div id="work" className="min-h-screen">
            <SplitTextComponent 
              text="My Work" 
              className="text-6xl font-bold text-center text-white py-8"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />

            <Projects />
            <div className="flex justify-center mt-8 mb-20">
              <ExploreAllButton href="#" />
            </div>
            <WobbleCardDemo />
          </div>
          <div id="education">
            <Education />
          </div>
          <div id="research">
            <Research />
          </div>
          <div id="contact">
            <ContactSection />
          </div>
        </div>
      </div>
      <BackToTopButton />
      <Toaster />
    </div>
  )
}

export default App
