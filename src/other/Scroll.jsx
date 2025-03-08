import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    console.log("Navigated to:", pathname, "Hash:", hash);

    // Force disable scroll restoration on mobile
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Extra check: if it's mobile, nuke any scroll persistence
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }, 10); // Small delay to override browser's auto-scroll
    }

  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
