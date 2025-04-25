'use client';
import { useEffect } from 'react';

const AdBannerRight = () => {
  useEffect(() => {
    const setupScript = document.createElement('script');
    setupScript.type = 'text/javascript';
    setupScript.innerHTML = `
      atOptions = {
        'key' : 'c554d3bda3b686090d0d4efbcb55552b',
        'format' : 'iframe',
        'height' : 600,
        'width' : 160,
        'params' : {}
      };
    `;

    const srcScript = document.createElement('script');
    srcScript.type = 'text/javascript';
    srcScript.src = '//www.highperformanceformat.com/c554d3bda3b686090d0d4efbcb55552b/invoke.js';

    const container = document.getElementById('ad-right');
    if (container) {
      container.appendChild(setupScript);
      container.appendChild(srcScript);
    }

    return () => {
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <div className="hidden lg:flex absolute top-40 right-4 z-10">
      <div id="ad-right" />
    </div>
  );
};

export default AdBannerRight;
