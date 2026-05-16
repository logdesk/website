import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'

const themeComponents = getThemeComponents()

export function useMDXComponents(components) {
  return {
    ...themeComponents,
    h1: ({ style, ...props }) => <h1 {...props} style={{ fontWeight: 500, letterSpacing: '-0.02em', ...style }} />,
    h2: ({ style, ...props }) => <h2 {...props} style={{ fontWeight: 500, letterSpacing: '-0.01em', ...style }} />,
    h3: ({ style, ...props }) => <h3 {...props} style={{ fontWeight: 500, ...style }} />,
    h4: ({ style, ...props }) => <h4 {...props} style={{ fontWeight: 500, ...style }} />,
    strong: ({ style, ...props }) => <strong {...props} style={{ fontWeight: 500, ...style }} />,
    ...components
  }
}
