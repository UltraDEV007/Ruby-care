import { useEffect } from "react";

export default function SearchBarLocation({ setLeftSearch, setMiddleSearch }) {
  useEffect(() => {
    const changeSearchLocation = () => {
      const width = window?.innerWidth;
      if (width >= 960) {
        setLeftSearch(true);
        setMiddleSearch(false);
      } else {
        setLeftSearch(false);
        setMiddleSearch(true);
      }
      if (width <= 404) {
        setLeftSearch(false);
        setMiddleSearch(false);
      }
    };
    changeSearchLocation();
    window.addEventListener("resize", changeSearchLocation);
    return () => {
      window.removeEventListener("resize", changeSearchLocation);
    };
  }, [setLeftSearch, setMiddleSearch]);
  return null;
}
