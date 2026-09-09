import React from 'react';

// Official Riddhi Siddhi Emblem SVG
export function TrustLogoSvg({ className = "w-10 h-10", variant = "color" }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="Riddhi Siddhi Charitable Trust Emblem"
    >
      <defs>
        <linearGradient id="trustGradPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#CB2151" />
          <stop offset="50%" stopColor="#E11D48" />
          <stop offset="100%" stopColor="#3E4095" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#CB2151" floodOpacity="0.3"/>
        </filter>
      </defs>

      {/* Outer Circle Ring */}
      <circle cx="50" cy="50" r="46" stroke="url(#trustGradPrimary)" strokeWidth="3.5" strokeDasharray="3 2" fill="none" opacity="0.6"/>
      <circle cx="50" cy="50" r="41" fill={variant === 'light' ? 'rgba(255,255,255,0.1)' : '#FFF5F7'} />

      {/* Lotus Petals / Helping Hands Base */}
      <path 
        d="M26 65C32 74 44 76 50 76C56 76 68 74 74 65C70 68 62 71 50 71C38 71 30 68 26 65Z" 
        fill="url(#trustGradPrimary)" 
      />
      
      {/* Supporting Hands Shape */}
      <path 
        d="M32 58C36 50 42 46 50 46C58 46 64 50 68 58C62 60 56 61 50 61C44 61 38 60 32 58Z" 
        fill="url(#goldGrad)" 
        opacity="0.9"
      />

      {/* Central Heart of Compassion */}
      <path 
        d="M50 35C47.5 30 40 30 37 35C33 41 38 48 50 58C62 48 67 41 63 35C60 30 52.5 30 50 35Z" 
        fill="url(#trustGradPrimary)" 
        filter="url(#glow)"
      />

      {/* Radiant Sun Beams of Hope */}
      <circle cx="50" cy="22" r="3.5" fill="#F59E0B" />
      <line x1="50" y1="13" x2="50" y2="16" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      <line x1="42" y1="16" x2="44" y2="18" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      <line x1="58" y1="16" x2="56" y2="18" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      <line x1="37" y1="22" x2="40" y2="22" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      <line x1="63" y1="22" x2="60" y2="22" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Official Trust Golden Seal SVG with Registration
export function TrustSealSvg({ className = "w-28 h-28" }) {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <path id="sealPathTop" d="M 22,80 A 58,58 0 0,1 138,80" />
        <path id="sealPathBottom" d="M 138,80 A 58,58 0 0,1 22,80" />
        <linearGradient id="sealGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
      </defs>

      {/* Decorative Starburst Outer Rim */}
      <circle cx="80" cy="80" r="74" stroke="url(#sealGold)" strokeWidth="2" strokeDasharray="2 3" />
      <circle cx="80" cy="80" r="68" fill="#FFFBEB" stroke="url(#sealGold)" strokeWidth="2.5" />
      <circle cx="80" cy="80" r="50" fill="none" stroke="#D97706" strokeWidth="1" strokeDasharray="3 3" />

      {/* Circular Curving Text */}
      <text fontFamily="sans-serif" fontSize="8.5" fontWeight="bold" fill="#78350F" letterSpacing="1.2">
        <textPath href="#sealPathTop" startOffset="50%" textAnchor="middle">
          RIDDHI SIDDHI CHARITABLE TRUST
        </textPath>
      </text>
      <text fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#92400E" letterSpacing="1.2">
        <textPath href="#sealPathBottom" startOffset="50%" textAnchor="middle">
          ★ REG. NO. E30149 • ESTD 2014 ★
        </textPath>
      </text>

      {/* Central Emblem & 80G Verified Stamp */}
      <circle cx="80" cy="80" r="34" fill="#CB2151" />
      <path 
        d="M80 66C78 61 72 61 69 66C66 71 70 77 80 85C90 77 94 71 91 66C88 61 82 61 80 66Z" 
        fill="#FEF3C7" 
      />
      <text x="80" y="93" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontWeight="900" letterSpacing="0.5">
        SEC 80G
      </text>
      <text x="80" y="101" textAnchor="middle" fill="#FEF3C7" fontSize="6" fontWeight="bold">
        APPROVED
      </text>
    </svg>
  );
}

// Section 80G Tax Exemption Shield Badge SVG
export function Tax80GBadgeSvg({ className = "w-12 h-12" }) {
  return (
    <svg viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>
      {/* Shield Body */}
      <path 
        d="M40 4L10 16V42C10 62 23 79 40 86C57 79 70 62 70 42V16L40 4Z" 
        fill="url(#shieldGrad)" 
        stroke="#065F46" 
        strokeWidth="2" 
      />
      {/* Inner Highlight Line */}
      <path 
        d="M40 9L15 19V42C15 59 26 73 40 80C54 73 65 59 65 42V19L40 9Z" 
        fill="none" 
        stroke="#A7F3D0" 
        strokeWidth="1.5" 
        opacity="0.6" 
      />
      {/* Rupee & 50% Text */}
      <text x="40" y="38" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="900">
        80G
      </text>
      <text x="40" y="52" textAnchor="middle" fill="#FEF3C7" fontSize="10" fontWeight="bold">
        50% OFF
      </text>
      <text x="40" y="64" textAnchor="middle" fill="#D1FAE5" fontSize="7" fontWeight="bold" letterSpacing="0.5">
        TAX EXEMPT
      </text>
    </svg>
  );
}

// Form 10BE Compliance Stamp SVG
export function Form10BEBadgeSvg({ className = "w-12 h-12" }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="6" y="6" width="68" height="68" rx="12" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2.5" />
      <rect x="11" y="11" width="58" height="58" rx="8" fill="none" stroke="#93C5FD" strokeWidth="1" strokeDasharray="3 3" />
      <text x="40" y="31" textAnchor="middle" fill="#1E3A8A" fontSize="9" fontWeight="900" letterSpacing="0.5">
        FORM 10BE
      </text>
      <path d="M26 44L35 53L54 34" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <text x="40" y="64" textAnchor="middle" fill="#2563EB" fontSize="6.5" fontWeight="bold">
        IT COMPLIANT
      </text>
    </svg>
  );
}

// 100% Safe & Direct Bank Transfer Guarantee SVG
export function SafeDonationShieldSvg({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="32" cy="32" r="30" fill="#F0FDF4" stroke="#16A34A" strokeWidth="2" />
      <path d="M32 12L18 20V33C18 43 24 51 32 54C40 51 46 43 46 33V20L32 12Z" fill="#16A34A" />
      <path d="M26 33L30 37L38 29" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Instant Verification Certificate Badge SVG
export function VerifiedNgoSealSvg({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="verifiedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#CB2151" />
          <stop offset="100%" stopColor="#3E4095" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="#FFFFFF" stroke="url(#verifiedGrad)" strokeWidth="3" />
      <circle cx="50" cy="50" r="38" fill="none" stroke="#CB2151" strokeWidth="1" strokeDasharray="3 2" />
      <text x="50" y="32" textAnchor="middle" fill="#3E4095" fontSize="7" fontWeight="900" letterSpacing="0.8">
        VERIFIED NGO
      </text>
      <path d="M38 52L46 60L64 42" stroke="#10B981" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="50" y="74" textAnchor="middle" fill="#CB2151" fontSize="6.5" fontWeight="bold">
        ESTD 2014 • INDIA
      </text>
    </svg>
  );
}

// Traditional Mandala Vector Motif SVG
export function MandalaPatternSvg({ className = "w-full h-full opacity-5" }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="10" fill="currentColor" opacity="0.4" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 100 100)`}>
          <path d="M100 10 C110 40 110 60 100 70 C90 60 90 40 100 10 Z" fill="currentColor" opacity="0.3" />
          <circle cx="100" cy="25" r="3" fill="currentColor" />
        </g>
      ))}
    </svg>
  );
}
