import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScrollToSection(sectionId) {
  const location = useLocation();

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location, sectionId]);

  return null;
}

export default useScrollToSection;