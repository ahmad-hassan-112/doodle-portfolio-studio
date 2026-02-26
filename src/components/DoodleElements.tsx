export const PaperPlane = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 40L65 10L45 70L35 45L10 40Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M35 45L65 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M45 70L35 45L10 40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" />
  </svg>
);

export const DoodleStar = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 5L35 22L52 22L38 33L43 50L30 40L17 50L22 33L8 22L25 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const DoodleArrow = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 20C15 15 30 25 45 18C60 11 70 22 85 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M78 10L87 17L78 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const DoodleCircle = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 5C45 5 55 15 55 30C55 45 45 55 30 55C15 55 5 45 5 30C5 15 16 4 30 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const DoodleSpiral = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 30C30 27 33 24 36 24C42 24 45 30 45 36C45 45 36 51 27 51C15 51 9 42 9 30C9 15 18 6 33 6C51 6 57 18 57 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const DoodleLightbulb = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 5C14 5 8 14 8 22C8 30 14 34 16 40H34C36 34 42 30 42 22C42 14 36 5 25 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 45H32M19 50H31M22 55H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M17 10L13 6M33 10L37 6M7 22H3M47 22H43M13 34L9 38M37 34L41 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const DoodleRocket = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 5C30 5 15 25 15 50L22 60L30 55L38 60L45 50C45 25 30 5 30 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="30" cy="32" r="5" stroke="currentColor" strokeWidth="2" />
    <path d="M15 40C10 38 6 42 5 48L15 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M45 40C50 38 54 42 55 48L45 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M25 65L27 75M30 65L30 77M35 65L33 75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const DoodleCoffee = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20H42V48C42 52 38 56 34 56H18C14 56 10 52 10 48V20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M42 26H48C52 26 55 30 55 34C55 38 52 42 48 42H42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M18 8C18 8 20 12 18 16M26 6C26 6 28 10 26 14M34 8C34 8 36 12 34 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const DoodleBrackets = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 5L5 30L20 55" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M60 5L75 30L60 55" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M48 8L32 52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
