import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import VisiMisi from "./components/VisiMisi";
import PetaBanyumas from "./components/PetaBanyumas";
import SaluranKomunitas from "./components/SaluranKomunitas";
import Footer from "./components/Footer";
import PageSkeleton from "./components/PageSkeleton";
import { LanguageProvider } from "./i18n/LanguageContext";

function useAppReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const minDelay = new Promise((resolve) => setTimeout(resolve, 500));
    const fontsReady =
      typeof document !== "undefined" && document.fonts
        ? document.fonts.ready
        : Promise.resolve();

    Promise.all([minDelay, fontsReady]).then(() => {
      if (!cancelled) setReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return ready;
}

export default function App() {
  const ready = useAppReady();
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    if (!ready) return;
    const timeout = setTimeout(() => setShowSkeleton(false), 400);
    return () => clearTimeout(timeout);
  }, [ready]);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cream-100">
        {showSkeleton && (
          <div
            className={`fixed inset-0 z-[100] bg-cream-100 transition-opacity duration-[400ms] ease-out ${
              ready ? "opacity-0" : "opacity-100"
            }`}
            aria-hidden="true"
          >
            <PageSkeleton />
          </div>
        )}

        <div
          className={`transition-opacity duration-500 ease-out ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <VisiMisi />
            <PetaBanyumas />
            <SaluranKomunitas />
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}
