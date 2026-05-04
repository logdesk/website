const ROWS = [
  { source: 'nginx',  color: '#10b981', bg: '#d1fae5', text: '#065f46', w: 174 },
  { source: 'docker', color: '#3b82f6', bg: '#dbeafe', text: '#1d4ed8', w: 140 },
  { source: 'rails',  color: '#ef4444', bg: '#fee2e2', text: '#991b1b', w: 198, highlight: true },
  { source: 'nginx',  color: '#10b981', bg: '#d1fae5', text: '#065f46', w: 116 },
  { source: 'docker', color: '#3b82f6', bg: '#dbeafe', text: '#1d4ed8', w: 162 },
  { source: 'custom', color: '#8b5cf6', bg: '#ede9fe', text: '#5b21b6', w: 132 },
  { source: 'rails',  color: '#ef4444', bg: '#fee2e2', text: '#991b1b', w: 150 },
  { source: 'nginx',  color: '#10b981', bg: '#d1fae5', text: '#065f46', w: 186 },
]

const ROW_H = 26
const CONTENT_START_Y = 64

export function StackRecognisedIllustration() {
  return (
    <svg
      viewBox="0 0 400 296"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
      aria-label="Log viewer showing nginx, docker, rails and custom log lines being recognised"
    >
      <defs>
        <clipPath id="src-win-clip">
          <rect x="12" y="12" width="376" height="272" rx="12" />
        </clipPath>
        <style>{`
          @keyframes src-log-in {
            from { opacity: 0; }
            to   { opacity: 1; }
          }
          .src-lr {
            animation: src-log-in 0.4s ease both;
            cursor: default;
          }
          .src-row-bg {
            fill: transparent;
            transition: fill 0.12s ease;
          }
          .src-lr:hover .src-row-bg {
            fill: #f3f4f6;
          }
          .src-lr.src-hl:hover .src-row-bg {
            fill: #fee2e2;
          }
        `}</style>
      </defs>

      {/* Drop shadow */}
      <rect x="14" y="18" width="376" height="272" rx="12" fill="black" opacity="0.045" />

      {/* Window frame */}
      <rect x="12" y="12" width="376" height="272" rx="12" fill="white" stroke="#e5e7eb" strokeWidth="1" />

      <g clipPath="url(#src-win-clip)">
        {/* Title bar background */}
        <rect x="12" y="12" width="376" height="40" fill="#f9fafb" />

        {/* Title bar bottom border */}
        <line x1="12" y1="52" x2="388" y2="52" stroke="#e5e7eb" strokeWidth="1" />

        {/* Traffic lights */}
        <circle cx="36" cy="32" r="5" fill="#ff5f57" />
        <circle cx="55" cy="32" r="5" fill="#ffbd2e" />
        <circle cx="74" cy="32" r="5" fill="#28c840" />

        {/* Window title */}
        <text
          x="200" y="36"
          textAnchor="middle"
          fontSize="11"
          fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          fill="#9ca3af"
          fontWeight="500"
        >
          application.log
        </text>

        {/* Log rows */}
        {ROWS.map((row, i) => {
          const ry = CONTENT_START_Y + i * ROW_H
          const cy = ry + ROW_H / 2

          return (
            <g
              key={i}
              className={`src-lr${row.highlight ? ' src-hl' : ''}`}
              style={{ animationDelay: `${i * 0.13}s` }}
            >
              {/* Hover + highlight background — transparent rect makes the whole row hoverable */}
              <rect className="src-row-bg" x="12" y={ry} width="376" height={ROW_H} />

              {/* Persistent highlight background for the pre-highlighted row */}
              {row.highlight && (
                <rect x="12" y={ry} width="376" height={ROW_H} fill={row.bg} opacity="0.4" />
              )}

              {/* Left accent strip for highlighted row */}
              {row.highlight && (
                <rect x="12" y={ry} width="3" height={ROW_H} fill={row.color} />
              )}

              {/* Source dot */}
              <circle cx="32" cy={cy} r="3.5" fill={row.color} />

              {/* Source badge */}
              <rect x="42" y={cy - 8} width="42" height="16" rx="3" fill={row.bg} />
              <text
                x="63"
                y={cy + 4}
                textAnchor="middle"
                fontSize="8.5"
                fontFamily="'SF Mono', 'Menlo', 'Monaco', 'Courier New', monospace"
                fill={row.text}
                fontWeight="600"
              >
                {row.source}
              </text>

              {/* Log content bar */}
              <rect
                x="92" y={cy - 4} width={row.w} height="8" rx="2"
                fill={row.highlight ? '#fca5a5' : '#e5e7eb'}
                opacity={row.highlight ? 0.55 : 1}
              />

              {/* Trailing fragment bar (every other row, adds depth) */}
              {i % 2 === 0 && (
                <rect x={92 + row.w + 6} y={cy - 4} width={Math.round(row.w * 0.28)} height="8" rx="2" fill="#f3f4f6" />
              )}
            </g>
          )
        })}
      </g>
    </svg>
  )
}
