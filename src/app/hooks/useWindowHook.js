import {useEffect, useState } from 'react';

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    // const handleResize = () => setWidth(window.innerWidth);
    // window.addEventListener("resize", handleResize);
         
    // eslint-disable-next-line
    useEffect(() => {
      setWidth(window.innerWidth);
      return () => {
        // window.removeEventListener("resize", handleResize);
      };

    });
    console.log(width);
    return width;
  }
  export { useWindowWidth }