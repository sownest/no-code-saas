'use client';
import { useEffect } from 'react';

const AdBanner = () => {
  useEffect(() => {
    const leftScript = document.createElement('script');
    leftScript.type = 'text/javascript';
    leftScript.innerHTML = `
      atOptions = {
        'key' : '98446bbcee889028dfaec65a250dc039',
        'format' : 'iframe',
        'height' : 600,
        'width' : 160,
        'params' : {}
      };
    `;
    const leftSrc = document.createElement('script');
    leftSrc.type = 'text/javascript';
    leftSrc.src = '//www.highperformanceformat.com/98446bbcee889028dfaec65a250dc039/invoke.js';

    const leftContainer = document.getElementById('ad-left');
    if (leftContainer) {
      leftContainer.appendChild(leftScript);
      leftContainer.appendChild(leftSrc);
    }

    return () => {
      if (leftContainer) {
        leftContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="hidden lg:flex absolute top-40 left-4 z-10">
      <div id="ad-left" />
    </div>
  );
};

export default AdBanner;
