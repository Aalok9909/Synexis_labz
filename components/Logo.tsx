export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Gradient defs */}
      <defs>
        <linearGradient id="gradientBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#38bdf8', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0ea5e9', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="gradientPurple" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Main circle background */}
      <circle cx="24" cy="24" r="22" fill="url(#gradientBlue)" opacity="0.1" />

      {/* Left upward arrow/lightning bolt */}
      <path
        d="M 16 28 L 20 20 L 18 20 L 24 8 L 20 16 L 22 16 L 16 28"
        fill="url(#gradientBlue)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right upward arrow/lightning bolt */}
      <path
        d="M 32 28 L 28 20 L 30 20 L 24 8 L 28 16 L 26 16 L 32 28"
        fill="url(#gradientPurple)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center AI circle */}
      <circle cx="24" cy="32" r="4" fill="url(#gradientBlue)" />
      <circle cx="24" cy="32" r="2.5" fill="white" />

      {/* Top accent dots */}
      <circle cx="18" cy="12" r="1.5" fill="url(#gradientBlue)" opacity="0.6" />
      <circle cx="30" cy="12" r="1.5" fill="url(#gradientPurple)" opacity="0.6" />
    </svg>
  );
}
