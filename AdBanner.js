import { useEffect, useRef } from 'react';

const AdBanner = () => {
  const adRef = useRef(null);

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
    adRef.current?.appendChild(script);

    const srcScript = document.createElement('script');
    srcScript.type = 'text/javascript';
    srcScript.src = '//www.highperformanceformat.com/98446bbcee889028dfaec65a250dc039/invoke.js';
    adRef.current?.appendChild(srcScript);

    return () => {
      if (adRef.current) {
        adRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      ref={adRef}
      className="w-[160px] h-[600px] bg-gray-900 rounded-xl overflow-hidden"
    />
  );
};

export default AdBanner;
