'use client';
import { useEffect } from 'react';

const AdBannerRight = () => {
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
    const srcScript = document.createElement('script');
    srcScript.type = 'text/javascript';
    srcScript.src = '//www.highperformanceformat.com/98446bbcee889028dfaec65a250dc039/invoke.js';

    const adContainer = document.getElementById('ad-right');
    if (adContainer) {
      adContainer.appendChild(script);
      adContainer.appendChild(srcScript);
    }

    return () => {
      if (adContainer) adContainer.innerHTML = '';
    };
  }, []);

  return (
    <div className="hidden lg:flex absolute top-40 right-4 z-10">
      <div id="ad-right" />
    </div>
  );
};

export default AdBannerRight;
