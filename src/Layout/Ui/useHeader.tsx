import React, { useEffect } from 'react'

const useHeader = () => { 
    useEffect(() => {
        const handleScroll = () => {
          const header = document.querySelector('.Header');
          if (header) {
            const scrollPosition = window.scrollY;
            const headerHeight = window.innerHeight;
    
            if (scrollPosition <= 100) {
              header.classList.add('HeaderStart');
            } else {
              header.classList.remove('HeaderStart');
            }
            if (scrollPosition >= headerHeight) { 
              header.classList.add('Scrolled');
            } else {
              header.classList.remove('Scrolled');
            }
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
}

export default useHeader