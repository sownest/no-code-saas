'use client';
import { useEffect } from 'react';

const AdBannerRight = () => {
  useEffect(() => {
    const adDiv = document.createElement('div');
    adDiv.id = 'container-c554d3bda3b686090d0d4efbcb55552b';

    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = '//www.highperformanceformat.com/c554d3bda3b686090d0d4efbcb55552b/invoke.js';

    const container = document.getElementById('ad-right');
    if (container) {
      container.appendChild(adDiv);
      container.appendChild(script);
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
