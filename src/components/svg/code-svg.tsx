export default function CodeSVG() {
  return (
    <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Animated code brackets */}
      <g className="animate-float">
        <path
          d="M200 150 L150 200 L200 250"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.3"
        />
        <path
          d="M1000 150 L1050 200 L1000 250"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.3"
        />
      </g>

      {/* Animated code lines */}
      <g className="animate-pulse" style={{ animationDuration: "3s" }}>
        <line x1="300" y1="300" x2="500" y2="300" stroke="currentColor" strokeWidth="2" opacity="0.2" />
        <line x1="300" y1="350" x2="600" y2="350" stroke="currentColor" strokeWidth="2" opacity="0.2" />
        <line x1="300" y1="400" x2="450" y2="400" stroke="currentColor" strokeWidth="2" opacity="0.2" />
      </g>

      {/* Animated circles */}
      <g className="animate-float" style={{ animationDelay: "1s" }}>
        <circle cx="800" cy="500" r="30" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.2" />
        <circle cx="400" cy="600" r="40" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.2" />
      </g>

      {/* Grid pattern */}
      <defs>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
        </pattern>
      </defs>
      <rect width="1200" height="800" fill="url(#grid)" />
    </svg>
  )
}
