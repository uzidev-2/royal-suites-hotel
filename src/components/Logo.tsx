import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'gold';
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8 w-8", variant = 'gold' }) => {
  const colors = {
    light: "#FFFFFF",
    dark: "#0A0A0A",
    gold: "#C5A059"
  };

  const color = colors[variant];

  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <circle cx="50" cy="50" r="48" stroke={color} strokeWidth="2" />
      <path 
        d="M35 30V70M35 30H55C60.5228 30 65 34.4772 65 40C65 45.5228 60.5228 50 55 50H35M50 50L65 70" 
        stroke={color} 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M75 35C75 35 70 30 60 30M40 70C40 70 45 75 55 75C65 75 70 70 70 65C70 60 65 55 55 55C45 55 40 50 40 45C40 40 45 35 55 35" 
        stroke={color} 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        style={{ display: 'none' }} /* The path above was for R, now S */
      />
      {/* Redesigning for a more elegant integrated RS monogram */}
      <path 
        d="M30 30V70H45M30 30H50C58 30 62 34 62 40C62 46 58 50 50 50H30M48 50L62 70" 
        stroke={color} 
        strokeWidth="5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M72 40C72 34 68 30 60 30M48 70C48 70 52 75 60 75C68 75 72 70 72 64C72 58 68 54 60 54C52 54 48 50 48 44C48 38 52 34 60 34" 
        stroke={color} 
        strokeWidth="5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="opacity-80"
      />
    </svg>
  );
};

export const LogoWithText: React.FC<{ variant?: 'light' | 'dark' }> = ({ variant = 'light' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-brand-charcoal';
  const subColor = variant === 'light' ? 'text-brand-gold' : 'text-brand-gold';

  return (
    <div className="flex items-center gap-3">
      <Logo variant={variant === 'light' ? 'gold' : 'dark'} className="h-10 w-10" />
      <div className="flex flex-col leading-none">
        <span className={`text-lg font-serif tracking-widest font-bold ${textColor}`}>ROYAL SUITES</span>
        <span className={`text-[10px] tracking-[0.3em] font-sans uppercase ${subColor}`}>Faisalabad</span>
      </div>
    </div>
  );
};
