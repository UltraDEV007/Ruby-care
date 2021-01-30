import { useEffect } from "react";

export default function HandleResizeEvents({
  setLeftSearch,
  setIsMenuShowing,
}) {
  useEffect(() => {
    const changeSearchLocation = () => {
      const width = window?.innerWidth;
      if (width >= 960) {
        setLeftSearch(true);
      } else {
        setLeftSearch(false);
      }
      if (width >= 959) {
        setIsMenuShowing(false);
      }
    };
    changeSearchLocation();
    window.addEventListener("resize", changeSearchLocation);
    return () => {
      window.removeEventListener("resize", changeSearchLocation);
    };
  }, [setLeftSearch, setIsMenuShowing]);
  return null;
}
