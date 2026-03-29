import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  imgClassName?: string;
}

export default function Logo({ className = "", imgClassName = "h-20 md:h-24" }: LogoProps) {
  return (
    <Link to="/" className={`flex items-center gap-3 group ${className}`}>
      <img 
        src="https://res.cloudinary.com/dbe6ruqre/image/upload/v1774536850/luna-logo_ivw43t.webp" 
        alt="LUNA Innovation by RSB" 
        className={`${imgClassName} w-auto object-contain`}
        referrerPolicy="no-referrer"
      />
    </Link>
  );
}
