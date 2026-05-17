export function StaysLocalIllustration() {
  return (
    <svg
      viewBox="0 0 400 296"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
      aria-label="Your log data stays on your machine"
    >
      <defs>
        <style>{`
          @keyframes sl-breathe {
            0%, 100% { opacity: 0.07; }
            50% { opacity: 0.13; }
          }
          .sl-glow { animation: sl-breathe 3s ease-in-out infinite; }
        `}</style>
      </defs>

      {/* Drop shadow */}
      <rect x="14" y="18" width="376" height="272" rx="12" fill="black" opacity="0.045" />

      {/* Window frame */}
      <rect x="12" y="12" width="376" height="272" rx="12" fill="white" stroke="#e5e7eb" strokeWidth="1" />

      {/* Title bar */}
      <rect x="12" y="12" width="376" height="40" fill="#f9fafb" />
      <line x1="12" y1="52" x2="388" y2="52" stroke="#e5e7eb" strokeWidth="1" />
      <circle cx="36" cy="32" r="5" fill="#ff5f57" />
      <circle cx="55" cy="32" r="5" fill="#ffbd2e" />
      <circle cx="74" cy="32" r="5" fill="#28c840" />
      <rect x="162" y="27" width="76" height="8" rx="3" fill="#e5e7eb" />

      {/* Vertical divider */}
      <line x1="210" y1="52" x2="210" y2="284" stroke="#f3f4f6" strokeWidth="1" />

      {/* ── LEFT: Log lines ── */}

      {/* File info row */}
      <g transform="translate(24, 66)">
        <rect x="0" y="0" width="16" height="20" rx="2" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="1" />
        <path d="M10 0v6h6" stroke="#e5e7eb" strokeWidth="1" fill="none" />
        <line x1="3" y1="9" x2="13" y2="9" stroke="#e5e7eb" strokeWidth="1.25" />
        <line x1="3" y1="12.5" x2="11" y2="12.5" stroke="#e5e7eb" strokeWidth="1.25" />
        <line x1="3" y1="16" x2="13" y2="16" stroke="#e5e7eb" strokeWidth="1.25" />
      </g>
      <rect x="48" y="72" width="80" height="6" rx="2" fill="#d1d5db" />
      <rect x="134" y="72" width="36" height="6" rx="2" fill="#e5e7eb" />
      <line x1="24" y1="94" x2="202" y2="94" stroke="#f3f4f6" strokeWidth="1" />

      {/* Log rows */}
      {[
        [30, 110],
        [30, 126],
        [20, 96],
        [30, 114],
        [20, 88],
        [30, 104],
        [30, 118],
        [20, 92],
        [30, 108],
        [30, 120],
        [20, 84],
        [30, 98],
      ].map(([tsW, lineW], i) => {
        const y = 100 + i * 15
        const dim = i > 9
        return (
          <g key={i}>
            <rect x="24" y={y} width={tsW} height="6" rx="2" fill={dim ? '#f3f4f6' : '#e5e7eb'} />
            <rect x="62" y={y} width={lineW} height="6" rx="2" fill={dim ? '#f9fafb' : i % 2 === 0 ? '#e5e7eb' : '#d1d5db'} />
          </g>
        )
      })}

      {/* ── RIGHT: Padlock ── */}

      {/* Soft glow behind lock */}
      <circle cx="305" cy="172" r="68" fill="#d1d5db" className="sl-glow" />

      {/* Shackle — drawn first so body covers entry points */}
      <path
        d="M284 166 L284 130 A21 21 0 0 1 326 130 L326 166"
        stroke="#d1d5db"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />

      {/* Lock body — painted over shackle base */}
      <rect x="272" y="158" width="66" height="52" rx="10" fill="#d1d5db" />

      {/* Keyhole */}
      <circle cx="305" cy="181" r="7" fill="white" fillOpacity="0.7" />
      <rect x="301.5" y="181" width="7" height="9" rx="2" fill="white" fillOpacity="0.7" />

      {/* "Local" status pill — soft, bottom right of lock area */}
      <rect x="271" y="222" width="68" height="18" rx="9" fill="#f3f4f6" />
      <circle cx="284" cy="231" r="4" fill="#4ade80" />
      <rect x="292" y="227" width="36" height="7" rx="2" fill="#d1d5db" />
    </svg>
  )
}
