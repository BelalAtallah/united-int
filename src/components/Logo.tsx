export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#8B6F3F', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#5A4527', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      <rect
        x="5"
        y="5"
        width="90"
        height="90"
        rx="15"
        fill="url(#logoGradient)"
      />

      <rect
        x="10"
        y="10"
        width="80"
        height="80"
        rx="12"
        fill="none"
        stroke="white"
        strokeWidth="2"
        opacity="0.3"
      />

      <text
        x="50"
        y="45"
        fontSize="32"
        fontWeight="900"
        fill="white"
        textAnchor="middle"
        fontFamily="Tajawal, sans-serif"
      >
        UI
      </text>

      <text
        x="50"
        y="72"
        fontSize="14"
        fontWeight="700"
        fill="white"
        textAnchor="middle"
        fontFamily="Tajawal, sans-serif"
        opacity="0.9"
      >
        F.Z.E
      </text>

      <path
        d="M 25 20 L 35 20 M 65 20 L 75 20 M 25 80 L 35 80 M 65 80 L 75 80"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
