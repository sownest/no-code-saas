'use client';
import { useEffect } from 'react';

const HorizontalAdBanner = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//pl26481561.profitableratecpm.com/7d9ed3506a4271dc29e4853ad15fde79/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");

    document.getElementById("container-7d9ed3506a4271dc29e4853ad15fde79")?.appendChild(script);
  }, []);

  return (
    <div className="w-full flex justify-center mt-8">
      <div id="container-7d9ed3506a4271dc29e4853ad15fde79" className="w-full max-w-5xl" />
    </div>
  );
};

export default HorizontalAdBanner;
