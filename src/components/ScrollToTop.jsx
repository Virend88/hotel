import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ScrollToTop component automatically scrolls the window to top on every page change
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  return null;
}
