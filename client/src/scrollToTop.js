import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// scroll to top of page on route change

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
