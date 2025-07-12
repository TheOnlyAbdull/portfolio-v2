import { Toaster } from "react-hot-toast";
import Experience from "./component/Experience";
import Footer from "./component/Footer";
import Header from "./component/header";
import Hero from "./component/Hero";
import Skills from "./component/Skills";
import { useEffect } from "react";
import toast from "react-hot-toast";

function App() {
  useEffect(() => {
    toast("Need a converting Website?", {
      duration: 2000,
      icon: "💭",
    });
  }, []);

  return (
    <div className="bg-neutral-900 font-plex text-gray-200">
      <Header />
      <Hero />
      <Experience />
      <Skills />
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
