import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  imgClassName?: string;
}

export default function Logo({ className = "", imgClassName = "h-20 md:h-24" }: LogoProps) {
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        // Detect if pixel is grayscale (text or background)
        const isGrayscale = Math.abs(r - g) < 30 && Math.abs(g - b) < 30 && Math.abs(r - b) < 30;
        
        if (isGrayscale) {
          // For grayscale, convert lightness to opacity (darker = more opaque)
          const lightness = (r + g + b) / 3;
          const alpha = 255 - lightness;
          
          // Set to pure white with calculated opacity
          data[i] = 255;
          data[i + 1] = 255;
          data[i + 2] = 255;
          data[i + 3] = alpha;
        } else {
          // For colored pixels (the red dot), invert them
          // (CSS hue-rotate-180 will restore the original color)
          data[i] = 255 - r;
          data[i + 1] = 255 - g;
          data[i + 2] = 255 - b;
        }
      }
      
      ctx.putImageData(imageData, 0, 0);
      setDataUrl(canvas.toDataURL());
    };
    img.src = "/images/luna-logo.webp";
  }, []);

  return (
    <Link to="/" className={`flex items-center gap-3 group ${className}`}>
      {dataUrl ? (
        <img 
          src={dataUrl} 
          alt="LUNA Innovation by RSB" 
          className={`${imgClassName} w-auto object-contain hue-rotate-180`}
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className={`${imgClassName} w-48 animate-pulse bg-white/5 rounded`}></div>
      )}
    </Link>
  );
}
