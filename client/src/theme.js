// color design tokens export
export const tokensDark = {
  grey: {
    0: "#f7f7f8", // manually adjusted
    10: "#f3f4f4", // manually adjusted
    50: "#eff0f1", // manually adjusted
    100: "#ebeced",
    200: "#d7d9db",
    300: "#c2c6ca",
    400: "#aeb3b8",
    500: "#9aa0a6",
    600: "#7b8085",
    700: "#5c6064",
    800: "#3e4042",
    900: "#1f2021",
    1000: "#000000", // manually adjusted
  },

  white: {
    100: "#fbfbfb",
    200: "#f7f7f8",
    300: "#f3f4f4",
    400: "#eff0f1",
    500: "#ebeced",
    600: "#bcbdbe",
    700: "#8d8e8e",
    800: "#5e5e5f",
    900: "#2f2f2f",
  },

  primary: {
    // blue
    100: "#cecfd2",
    200: "#9c9fa6",
    300: "#6b6e79",
    400: "#393e4d",
    500: "#161F32",
    600: "#060b1a", // manually adjusted
    700: "#050813",
    800: "#03060d",
    900: "#020306",
  },

  secondary: {
    // green
    50: "#e0fbf0", // manually adjusted
    100: "#ccf8e6",
    200: "#99f1cd",
    300: "#66eab4",
    400: "#33e39b",
    500: "#00dc82",
    600: "#00b068",
    700: "#00844e",
    800: "#005834",
    900: "#002c1a",
  },
}

// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {}
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val)
    const values = Object.values(val)
    const length = keys.length
    const reversedObj = {}
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1]
    }
    reversedTokens[key] = reversedObj
  })
  return reversedTokens
}
export const tokensLight = reverseTokens(tokensDark)

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400],
              light: tokensDark.primary[500],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[300],
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.primary[600],
              alt: tokensDark.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.grey[50],
              light: tokensDark.grey[100],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.grey[0],
              alt: tokensDark.grey[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Mulish", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Mulish", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Mulish", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Mulish", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Mulish", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Mulish", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Mulish", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  }
}
