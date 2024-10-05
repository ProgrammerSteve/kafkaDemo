import type { Config } from 'tailwindcss'
// Import the theme definition.
import { theme } from './src/theme'

// Convert an ARWES theme breakpoints to a Tailwind screens settings.
const createTWScreens = (): Record<string, string> =>
  theme.breakpoints.settings
    .map(({ key, value }) => ({ [key]: value }))
    .reduce((t, i) => ({ ...t, ...i }), {})

// Convert an ARWES theme color to a Tailwind color palette settings.
const createTWPalette = (
  createColor: (i: number) => string,
  length: number
): Record<string, string> =>
  Array(length)
    .fill(null)
    .map((_, i) => ({ [i]: createColor(i) }))
    .reduce((t, i) => ({ ...t, ...i }), {})




export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx,md,mdx}"
  ],
  theme: {
    extend: {
      screens: createTWScreens(),
      colors: {
        ...theme.colors, // Spread the default colors
        primary: createTWPalette(theme.colors.primary, 10),
        secondary: createTWPalette(theme.colors.primary, 10)
      },
      // `fontFamily` can be passed just like this.
      fontFamily: theme.fontFamily

      // Tailwind `spacing` is the same as the theme `space` setting.
    }
  },
  plugins: [],
} satisfies Config













// export const tailwind: Config = {
//   content: [
//     "./index.html",
//     "./src/**/*.{html,js,ts,jsx,tsx,md,mdx}" // Ensure these paths include all relevant file types
//   ],
//   theme: {
//     extend: {
//       screens: createTWScreens(),
//       colors: {
//         ...theme.colors, // Spread the default colors
//         primary: createTWPalette(theme.colors.primary, 10),
//         secondary: createTWPalette(theme.colors.primary, 10)
//       },
//       // `fontFamily` can be passed just like this.
//       fontFamily: theme.fontFamily

//       // Tailwind `spacing` is the same as the theme `space` setting.
//     }
//   }
// }