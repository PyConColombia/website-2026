import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (!import.meta.env.VITE_GA_ID) return;

    window.gtag?.("config", import.meta.env.VITE_GA_ID, {
      page_path: location.pathname + location.search,
    });
  }, [location]);
}
