import { useState, useEffect } from 'react';

function Index() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Define the resize event handler
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener on mount
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth;
}

export default Index;
