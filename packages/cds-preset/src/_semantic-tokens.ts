import { defineSemanticTokens } from '@pandacss/dev';

export const semanticTokens = defineSemanticTokens({
  colors: {
    bcc: {
      text: {
        value: {
          _bccTheme: {
            _light: '{colors.neutral.100}',
            _dark: '{colors.neutral.10}',
          },
        },
      },
      background: {
        value: {
          _bccTheme: { _light: '{colors.gray}', _dark: '{colors.neutral.100}' },
        },
      },
      foreground: {
        value: {
          _bccTheme: { _light: '{colors.white}', _dark: '{colors.neutral.80}' },
        },
      },
      muted: {
        value: {
          _bccTheme: {
            _light: '{colors.neutral.30}',
            _dark: '{colors.neutral.90}',
          },
        },
      },
      border: {
        value: {
          _bccTheme: {
            _light: '{colors.neutral.20}',
            _dark: '{colors.neutral.70}',
          },
        },
      },
      primary: {
        value: {
          _bccTheme: { _light: '{colors.teal.50}', _dark: '{colors.teal.30}' },
        },
      },
      secondary: {
        value: {
          _bccTheme: {
            _light: '{colors.neutral.40}',
            _dark: '{colors.neutral.30}',
          },
        },
      },
      tertiary: {
        value: {
          _bccTheme: { _light: '{colors.blue.50}', _dark: '{colors.blue.30}' },
        },
      },
      accent: {
        value: {
          _bccTheme: {
            _light: '{colors.magenta.50}',
            _dark: '{colors.magenta.30}',
          },
        },
      },
      info: {
        value: {
          _bccTheme: { _light: '{colors.blue.50}', _dark: '{colors.blue.30}' },
        },
      },
      help: {
        value: {
          _bccTheme: {
            _light: '{colors.purple.50}',
            _dark: '{colors.purple.30}',
          },
        },
      },
      warning: {
        value: {
          _bccTheme: {
            _light: '{colors.yellow.50}',
            _dark: '{colors.yellow.30}',
          },
        },
      },
      success: {
        value: {
          _bccTheme: {
            _light: '{colors.green.50}',
            _dark: '{colors.green.30}',
          },
        },
      },
      error: {
        value: {
          _bccTheme: { _light: '{colors.red.50}', _dark: '{colors.red.30}' },
        },
      },
    },
  },
});
