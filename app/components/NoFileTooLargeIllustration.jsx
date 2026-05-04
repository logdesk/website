const ROWS = [
  { w: 178, w2: null },
  { w: 218, w2: 44 },
  { w: 148, w2: null },
  { w: 202, w2: null },
  { w: 162, w2: 58 },
  { w: 214, w2: null },
  { w: 132, w2: null },
  { w: 188, w2: 36 },
]

export function NoFileTooLargeIllustration() {
  return (
    <svg
      viewBox="0 0 400 296"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
      aria-label="Large log file being indexed quickly with streaming log lines below"
    >
      <defs>
        {/* Fade-out mask for log lines — implies infinite data below */}
        <linearGradient id="ntl-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="white" stopOpacity="1" />
          <stop offset="60%"  stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id="ntl-mask">
          <rect x="12" y="144" width="376" height="140" fill="url(#ntl-fade)" />
        </mask>

        <style>{`
          @keyframes ntl-fade-in {
            from { opacity: 0; }
            to   { opacity: 1; }
          }
          @keyframes ntl-progress {
            from { transform: scaleX(0); }
            to   { transform: scaleX(1); }
          }
          .ntl-progress-fill {
            transform-box: fill-box;
            transform-origin: left center;
            animation: ntl-progress 1.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both;
          }
          .ntl-stats {
            animation: ntl-fade-in 0.5s ease 2.1s both;
          }
          .ntl-line {
            animation: ntl-fade-in 0.35s ease both;
          }
        `}</style>
      </defs>

      {/* Drop shadow */}
      <rect x="14" y="18" width="376" height="272" rx="12" fill="black" opacity="0.045" />

      {/* Window frame */}
      <rect x="12" y="12" width="376" height="272" rx="12" fill="white" stroke="#e5e7eb" strokeWidth="1" />

      {/* Title bar */}
      <rect x="12" y="12" width="376" height="40" fill="#f9fafb" />
      <line x1="12" y1="52" x2="388" y2="52" stroke="#e5e7eb" strokeWidth="1" />

      {/* Traffic lights */}
      <circle cx="36" cy="32" r="5" fill="#ff5f57" />
      <circle cx="55" cy="32" r="5" fill="#ffbd2e" />
      <circle cx="74" cy="32" r="5" fill="#28c840" />

      {/* Window title bar — abstract name bar */}
      <rect x="168" y="27" width="64" height="8" rx="3" fill="#e5e7eb" />

      {/* ── File info row ── */}

      {/* Document icon */}
      <g transform="translate(24, 64)">
        <rect x="0" y="0" width="18" height="22" rx="2" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1" />
        <path d="M11 0v7h7" stroke="#d1d5db" strokeWidth="1" fill="none" />
        <line x1="3" y1="11" x2="15" y2="11" stroke="#e5e7eb" strokeWidth="1.5" />
        <line x1="3" y1="14.5" x2="13" y2="14.5" stroke="#e5e7eb" strokeWidth="1.5" />
        <line x1="3" y1="18" x2="15" y2="18" stroke="#e5e7eb" strokeWidth="1.5" />
      </g>

      {/* Filename — abstract bar */}
      <rect x="50" y="72" width="118" height="8" rx="3" fill="#d1d5db" />
      <rect x="174" y="72" width="52" height="8" rx="3" fill="#e5e7eb" />

      {/* File size badge — abstract bar inside */}
      <rect x="316" y="68" width="52" height="20" rx="4" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="1" />
      <rect x="326" y="76" width="32" height="6" rx="2" fill="#d1d5db" />

      {/* ── Progress bar ── */}

      {/* Track */}
      <rect x="24" y="106" width="352" height="6" rx="3" fill="#f3f4f6" />

      {/* Animated fill */}
      <rect
        x="24" y="106" width="352" height="6" rx="3"
        fill="#111827"
        className="ntl-progress-fill"
      />

      {/* ── Stats — abstract bars ── */}
      <g className="ntl-stats">
        <rect x="24" y="120" width="96" height="6" rx="2" fill="#e5e7eb" />
        <rect x="128" y="120" width="6" height="6" rx="1" fill="#e5e7eb" />
        <rect x="142" y="120" width="64" height="6" rx="2" fill="#e5e7eb" />
      </g>

      {/* ── Separator ── */}
      <line x1="12" y1="138" x2="388" y2="138" stroke="#e5e7eb" strokeWidth="1" />

      {/* ── Log lines (masked to fade out at bottom) ── */}
      <g mask="url(#ntl-mask)">
        {ROWS.map((row, i) => {
          const y = 148 + i * 16
          const cy = y + 3.5
          const altFill = i % 3 === 1 ? '#d1d5db' : '#e5e7eb'
          return (
            <g
              key={i}
              className="ntl-line"
              style={{ animationDelay: `${0.15 + i * 0.09}s` }}
            >
              {/* Timestamp bar */}
              <rect x="24" y={y} width="32" height="7" rx="2" fill="#e5e7eb" />
              {/* Content bar */}
              <rect x="64" y={y} width={row.w} height="7" rx="2" fill={altFill} />
              {/* Optional trailing segment */}
              {row.w2 && (
                <rect x={64 + row.w + 6} y={y} width={row.w2} height="7" rx="2" fill="#f3f4f6" />
              )}
            </g>
          )
        })}
      </g>
    </svg>
  )
}
