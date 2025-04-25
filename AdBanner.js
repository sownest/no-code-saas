// components/AdBanner.js
import { useEffect } from 'react';

const AdBanner = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      atOptions = {
        'key' : '98446bbcee889028dfaec65a250dc039',
        'format' : 'iframe',
        'height' : 600,
        'width' : 160,
        'params' : {}
      };
    `;
    document.body.appendChild(script);

    const srcScript = document.createElement('script');
    srcScript.type = 'text/javascript';
    srcScript.src = '//www.highperformanceformat.com/98446bbcee889028dfaec65a250dc039/invoke.js';
    document.body.appendChild(srcScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(srcScript);
    };
  }, []);

  return null; // You can also return a placeholder div if needed
};

export default AdBanner;
