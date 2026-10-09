import { Toaster } from "react-hot-toast";
import Experience from "./component/Experience";
import Footer from "./component/Footer";
import Header from "./component/header";
import Hero from "./component/Hero";
import Skills from "./component/Skills";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";


function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);


  useEffect(() => {
    toast("Need a converting Website?", {
      duration: 4000,
      icon: "💭",
    });
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");
    document.documentElement.dataset.motionReady = "true";

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return () => {
        delete document.documentElement.dataset.motionReady;
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      delete document.documentElement.dataset.motionReady;
    };
  }, []);

  return (
    <div className={`bg-stone-50 text-neutral-900 dark:bg-neutral-900 font-plex dark:text-gray-200  ${isDarkTheme ? 'dark' : ''}`}>
      <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <main>
        <Hero />
        <Experience />
        <Skills />
      </main>
      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          className: "bg-neutral-800 text-gray-200 border-2 border-gray-600",
          duration: 4000,
          // emoji: "🚀",
        }}
      />
    </div>
  );
}

export default App;
