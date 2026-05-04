'use client'

import { useState, useRef, useCallback } from 'react'

// ── Data ──────────────────────────────────────────────────────────────────────

const INITIAL_QUERY = 'level=error AND status=500'

const KEYS = ['level', 'status', 'method', 'path', 'duration', 'response']

const VALUES = {
  level:    ['debug', 'info', 'warn', 'error'],
  status:   ['200', '201', '400', '401', '404', '500', '503'],
  method:   ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  path:     ['/api/auth', '/api/users', '/api/health', '/api/metrics'],
  duration: ['<100', '<500', '>1000'],
  response: ['OK', 'Not Found', 'Error', 'Timeout'],
}

const LOG_LINES = [
  { id: 1, time: '12:04:32', level: 'error', method: 'POST', path: '/api/auth/login',  status: 500, duration: 234 },
  { id: 2, time: '12:04:35', level: 'error', method: 'GET',  path: '/api/users/data',  status: 500, duration: 1421 },
  { id: 3, time: '12:04:41', level: 'info',  method: 'GET',  path: '/api/health',      status: 200, duration: 3 },
  { id: 4, time: '12:04:45', level: 'error', method: 'POST', path: '/api/data/sync',   status: 500, duration: 89 },
  { id: 5, time: '12:04:52', level: 'warn',  method: 'GET',  path: '/api/sessions',    status: 403, duration: 12 },
  { id: 6, time: '12:04:58', level: 'error', method: 'PUT',  path: '/api/user/prefs',  status: 500, duration: 567 },
  { id: 7, time: '12:05:01', level: 'info',  method: 'GET',  path: '/api/metrics',     status: 200, duration: 45 },
]

// ── Tokenizer ─────────────────────────────────────────────────────────────────

function tokenize(text) {
  const tokens = []
  let i = 0
  while (i < text.length) {
    if (/\s/.test(text[i])) {
      let j = i + 1
      while (j < text.length && /\s/.test(text[j])) j++
      tokens.push({ type: 'ws', value: text.slice(i, j) })
      i = j
      continue
    }
    const logM = text.slice(i).match(/^(AND|OR)(?=\s|$)/i)
    if (logM) {
      tokens.push({ type: 'logical', value: logM[1].toUpperCase() })
      i += logM[1].length
      continue
    }
    const kvM = text.slice(i).match(/^(\w+)(=|!=|>=|<=)(\S*)/)
    if (kvM) {
      tokens.push({ type: 'key',    value: kvM[1] })
      tokens.push({ type: 'op',     value: kvM[2] })
      tokens.push({ type: /^\d+$/.test(kvM[3]) ? 'number' : 'string', value: kvM[3] })
      i += kvM[0].length
      continue
    }
    const wM = text.slice(i).match(/^\S+/)
    if (wM) {
      tokens.push({ type: 'partial', value: wM[0] })
      i += wM[0].length
      continue
    }
    tokens.push({ type: 'unknown', value: text[i] })
    i++
  }
  return tokens
}

const TOKEN_COLOR = {
  key:     '#2563eb',
  op:      '#9ca3af',
  string:  '#059669',
  number:  '#d97706',
  logical: '#7c3aed',
  partial: '#374151',
  ws:      'inherit',
  unknown: '#374151',
}

// ── Suggestions ───────────────────────────────────────────────────────────────

function getSuggestions(text, cursorPos) {
  const before = text.slice(0, cursorPos)
  const wsIdx = before.lastIndexOf(' ')
  const currentWord = before.slice(wsIdx + 1)

  // Typing a value — word contains '='
  if (currentWord.includes('=')) {
    const eqIdx = currentWord.indexOf('=')
    const key = currentWord.slice(0, eqIdx)
    const typedVal = currentWord.slice(eqIdx + 1)
    return (VALUES[key] ?? [])
      .filter(v => v.toLowerCase().startsWith(typedVal.toLowerCase()) && v !== typedVal)
      .slice(0, 4)
      .map(v => ({ label: v, type: 'value' }))
  }

  // Context from previous tokens
  const prevTokens = tokenize(before.slice(0, wsIdx + 1)).filter(t => t.type !== 'ws')
  const lastPrev = prevTokens[prevTokens.length - 1]

  if (!currentWord) {
    if (!lastPrev) return KEYS.slice(0, 5).map(k => ({ label: k, type: 'key' }))
    if (lastPrev.type === 'logical') return KEYS.slice(0, 5).map(k => ({ label: k, type: 'key' }))
    if (lastPrev.type === 'string' || lastPrev.type === 'number') {
      return [{ label: 'AND', type: 'logical' }, { label: 'OR', type: 'logical' }]
    }
    return []
  }

  const cw = currentWord.toLowerCase()
  const keyMatches = KEYS
    .filter(k => k.startsWith(cw) && k !== cw)
    .map(k => ({ label: k, type: 'key' }))
  const logicalMatches = ['AND', 'OR']
    .filter(l => l.toLowerCase().startsWith(cw) && l.toLowerCase() !== cw)
    .map(l => ({ label: l, type: 'logical' }))

  return [...keyMatches, ...logicalMatches].slice(0, 5)
}

// ── Query matcher ─────────────────────────────────────────────────────────────

function matchesQuery(log, query) {
  const conditions = query
    .split(/\s+(?:AND|OR)\s+/i)
    .map(p => p.trim().match(/^(\w+)=([\w\d/.]+)$/))
    .filter(Boolean)
    .map(m => ({ key: m[1].toLowerCase(), value: m[2].toLowerCase() }))

  if (!conditions.length) return true
  return conditions.every(c => String(log[c.key] ?? '').toLowerCase() === c.value)
}

// ── Static styles ─────────────────────────────────────────────────────────────

const MONO = "'SF Mono', 'Menlo', 'Monaco', 'Courier New', monospace"

const LEVEL_BADGE = {
  debug: { background: '#f3f4f6', color: '#6b7280' },
  info:  { background: '#dbeafe', color: '#1d4ed8' },
  warn:  { background: '#fef3c7', color: '#92400e' },
  error: { background: '#fee2e2', color: '#991b1b' },
}

const SUGGESTION_META = {
  key:     { label: 'FILTER', color: '#2563eb', bg: '#dbeafe' },
  value:   { label: 'VALUE',  color: '#059669', bg: '#d1fae5' },
  logical: { label: 'OP',     color: '#7c3aed', bg: '#ede9fe' },
}

// ── Component ─────────────────────────────────────────────────────────────────

export function FindSignalIllustration() {
  const [query, setQuery] = useState(INITIAL_QUERY)
  const [focused, setFocused] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [activeIdx, setActiveIdx] = useState(-1)
  const inputRef = useRef(null)

  const tokens = tokenize(query)
  const matched = LOG_LINES.filter(l => matchesQuery(l, query))

  const applySuggestion = useCallback((s) => {
    const input = inputRef.current
    const pos = input.selectionStart
    const before = query.slice(0, pos)
    const after = query.slice(pos)
    const wsIdx = before.lastIndexOf(' ')
    const wordStart = wsIdx + 1

    let insertFrom = wordStart
    let insertText

    if (s.type === 'value') {
      insertFrom = before.lastIndexOf('=') + 1
      insertText = s.label
    } else if (s.type === 'key') {
      insertText = s.label + '='
    } else {
      insertText = s.label + ' '
    }

    const newQuery = query.slice(0, insertFrom) + insertText + after.trimStart()
    const newCursor = insertFrom + insertText.length

    setQuery(newQuery)
    setSuggestions(getSuggestions(newQuery, newCursor))
    setActiveIdx(-1)

    requestAnimationFrame(() => {
      input.setSelectionRange(newCursor, newCursor)
      input.focus()
    })
  }, [query])

  const handleChange = (e) => {
    const q = e.target.value
    setQuery(q)
    setSuggestions(getSuggestions(q, e.target.selectionStart))
    setActiveIdx(-1)
  }

  const handleKeyDown = (e) => {
    if (!suggestions.length) return
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIdx(i => Math.min(i + 1, suggestions.length - 1)) }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setActiveIdx(i => Math.max(i - 1, 0)) }
    if (e.key === 'Enter' && activeIdx >= 0) { e.preventDefault(); applySuggestion(suggestions[activeIdx]) }
    if (e.key === 'Escape') { setSuggestions([]); setActiveIdx(-1) }
  }

  const showDropdown = focused && suggestions.length > 0

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{
        flex: 1,
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        overflow: 'hidden',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
      }}>

        {/* Title bar */}
        <div style={{
          background: '#f9fafb', borderBottom: '1px solid #e5e7eb',
          padding: '10px 16px', display: 'flex', alignItems: 'center',
          gap: '6px', flexShrink: 0,
        }}>
          {['#ff5f57', '#ffbd2e', '#28c840'].map((c, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
          ))}
          <span style={{
            marginLeft: 'auto', marginRight: 'auto',
            fontSize: '11px', color: '#9ca3af', fontWeight: 500,
          }}>
            application.log
          </span>
        </div>

        {/* Search bar */}
        <div style={{
          position: 'relative', padding: '8px 12px',
          borderBottom: '1px solid #e5e7eb', flexShrink: 0,
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            background: '#f9fafb',
            border: `1px solid ${focused ? '#a5b4fc' : '#e5e7eb'}`,
            borderRadius: '8px', padding: '6px 10px',
            transition: 'border-color 0.15s ease',
          }}>
            {/* Search icon */}
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
              <circle cx="6.5" cy="6.5" r="5" stroke="#9ca3af" strokeWidth="1.5" />
              <path d="M10 10L13.5 13.5" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" />
            </svg>

            {/* Mirror container: overlay + transparent input stacked */}
            <div style={{ position: 'relative', flex: 1, height: '20px' }}>
              {/* Syntax-highlighted overlay */}
              <div
                aria-hidden
                style={{
                  position: 'absolute', inset: 0,
                  fontFamily: MONO, fontSize: '12px', lineHeight: '20px',
                  whiteSpace: 'pre', pointerEvents: 'none', overflow: 'hidden',
                }}
              >
                {tokens.map((t, i) => (
                  <span key={i} style={{ color: TOKEN_COLOR[t.type] }}>{t.value}</span>
                ))}
              </div>

              {/* Actual input — transparent text, visible caret */}
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                onFocus={() => {
                  setFocused(true)
                  requestAnimationFrame(() => {
                    const pos = inputRef.current?.selectionStart ?? query.length
                    setSuggestions(getSuggestions(query, pos))
                  })
                }}
                onBlur={() => {
                  setTimeout(() => {
                    setFocused(false)
                    setSuggestions([])
                    setActiveIdx(-1)
                  }, 150)
                }}
                style={{
                  position: 'absolute', inset: 0,
                  fontFamily: MONO, fontSize: '12px', lineHeight: '20px',
                  color: 'transparent', caretColor: '#111827',
                  background: 'transparent', border: 'none', outline: 'none',
                  padding: 0, margin: 0, width: '100%',
                  WebkitAppearance: 'none',
                }}
              />
            </div>
          </div>

          {/* Suggestion dropdown */}
          {showDropdown && (
            <div style={{
              position: 'absolute',
              top: 'calc(100% - 2px)',
              left: 12, right: 12,
              background: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
              zIndex: 10,
              overflow: 'hidden',
            }}>
              {suggestions.map((s, i) => {
                const meta = SUGGESTION_META[s.type]
                const tokenColor = s.type === 'key' ? TOKEN_COLOR.key
                  : s.type === 'value' ? TOKEN_COLOR.string
                  : TOKEN_COLOR.logical
                return (
                  <div
                    key={s.label + i}
                    onMouseDown={(e) => { e.preventDefault(); applySuggestion(s) }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      padding: '7px 10px', cursor: 'default',
                      background: i === activeIdx ? '#f9fafb' : 'transparent',
                      borderBottom: i < suggestions.length - 1 ? '1px solid #f3f4f6' : 'none',
                    }}
                  >
                    <span style={{
                      fontSize: '9px', fontWeight: 700, letterSpacing: '0.06em',
                      padding: '1px 5px', borderRadius: '3px',
                      color: meta.color, background: meta.bg, flexShrink: 0,
                    }}>
                      {meta.label}
                    </span>
                    <span style={{ fontFamily: MONO, fontSize: '12px', color: tokenColor }}>
                      {s.label}
                    </span>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Match count */}
        <div style={{
          padding: '4px 14px', borderBottom: '1px solid #f3f4f6',
          fontSize: '10px', color: '#9ca3af', flexShrink: 0,
          display: 'flex', alignItems: 'center', gap: '4px',
        }}>
          <span style={{ fontWeight: 600, color: '#374151' }}>{matched.length}</span>
          <span>of {LOG_LINES.length} lines</span>
        </div>

        {/* Log rows */}
        <div style={{ overflowY: 'auto', flex: 1 }}>
          {matched.length === 0 ? (
            <div style={{
              padding: '24px', textAlign: 'center',
              color: '#9ca3af', fontSize: '12px', fontFamily: MONO,
            }}>
              No matching log lines
            </div>
          ) : matched.map(log => (
            <div
              key={log.id}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '5px 14px', borderBottom: '1px solid #f9fafb',
                fontFamily: MONO, fontSize: '11px',
              }}
            >
              <span style={{ color: '#9ca3af', flexShrink: 0 }}>{log.time}</span>
              <span style={{
                ...LEVEL_BADGE[log.level],
                padding: '1px 5px', borderRadius: '4px',
                fontSize: '9px', fontWeight: 700, letterSpacing: '0.05em',
                textTransform: 'uppercase', flexShrink: 0,
              }}>
                {log.level}
              </span>
              <span style={{ color: '#2563eb', fontWeight: 600, flexShrink: 0 }}>{log.method}</span>
              <span style={{
                color: '#374151', flex: 1,
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>
                {log.path}
              </span>
              <span style={{
                color: log.status >= 500 ? '#dc2626' : log.status >= 400 ? '#d97706' : '#059669',
                flexShrink: 0,
              }}>
                {log.status}
              </span>
              <span style={{ color: '#9ca3af', flexShrink: 0 }}>{log.duration}ms</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
