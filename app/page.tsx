"use client";
import Outer from "@/components/Outer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Team from "@/components/Team";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { scroller } from "react-scroll";
import Loader from "@/components/Loader";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  // Handle smooth scrolling for hash navigation
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash.substring(1);

      if (hash) {
        // Clear the hash from URL to prevent browser's default behavior
        const url = new URL(window.location.href);
        url.hash = "";
        window.history.replaceState({}, "", url.toString());

        // Function to attempt scrolling
        const attemptScroll = (attempts = 0) => {
          const element = document.getElementsByName(hash)[0];

          if (element) {
            // Element found, scroll to it
            scroller.scrollTo(hash, {
              duration: 1000,
              delay: 0,
              smooth: "easeInOutQuart",
              offset: hash === "features" ? -152 : hash === "team" ? -48 : -48,
            });
          } else if (attempts < 10) {
            // Element not found yet, try again after a short delay
            setTimeout(() => attemptScroll(attempts + 1), 100);
          }
        };

        // Start attempting to scroll after a brief delay
        setTimeout(() => attemptScroll(), 200);
      }
    };

    // Handle both initial load and hash changes
    handleHashScroll();

    // Listen for hash changes (for browser back/forward)
    window.addEventListener("hashchange", handleHashScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, []);

  return (
    <>
      <Loader hidden={!loading} />
      <Outer>
        <Header />
        <Hero onLoadindComplete={() => setLoading(false)} />
        <Features />
        {/* <Team /> */}
        <Faq />
        <Testimonials />
        <Projects />
        <Footer />
      </Outer>
    </>
  );
}
