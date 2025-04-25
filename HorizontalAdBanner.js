'use client';
import { useEffect } from 'react';

const HorizontalAdBanner = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//pl26481561.profitableratecpm.com/7d9ed3506a4271dc29e4853ad15fde79/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");

    const container = document.getElementById("container-7d9ed3506a4271dc29e4853ad15fde79");
    if (container) container.appendChild(script);
  }, []);

  return (
    <div className="w-full flex justify-center mt-12 px-4">
      <div
        id="container-7d9ed3506a4271dc29e4853ad15fde79"
        className="w-full max-w-5xl min-h-[100px]"
      />
    </div>
  );
};

export default HorizontalAdBanner;
