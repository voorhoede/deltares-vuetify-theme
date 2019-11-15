const { light, dark } = require('@voorhoede/deltares-design-tokens')

module.exports = {
  light: {
    primary: light.blue,
    secondary: light.blue40,
    accent: dark.blue60,
    error: light.error,
    info: light.informative,
    success: light.success,
    warning: light.warning,
  },
  dark: {
    primary: dark.blue,
    secondary: dark.blue40,
    accent: dark.blue60,
    error: dark.error,
    info: dark.informative,
    success: dark.success,
    warning: dark.warning,
  }
}