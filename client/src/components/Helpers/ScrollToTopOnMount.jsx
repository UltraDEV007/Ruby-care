import { useEffect } from "react";
// got this from https://reactrouter.com/web/guides/scroll-restoration
export default function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
