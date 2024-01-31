import { definePreset } from '@pandacss/dev';
import type { Preset } from '@pandacss/types';

import { globalCss } from './_global-styles';
import { textStyles } from './_text-styles';
import { layerStyles } from './_layer-styles';
import { breakpoints } from './_breakpoints';
import { colors } from './_colors';
import { tokens } from './_tokens';
import { semanticTokens } from './_semantic-tokens';

const bccPreset: Preset = definePreset({
  // Don't use default theme from PandaCSS.
  eject: true,

  globalCss: {
    ...globalCss,
  },
  theme: {
    textStyles: {
      ...textStyles,
    },
    layerStyles: {
      ...layerStyles,
    },
    breakpoints: {
      ...breakpoints,
    },
    extend: {
      tokens: {
        colors: {
          ...colors,
        },
        opacity: {
          ...tokens.opacity,
        },
        fonts: {
          ...tokens.fonts,
        },
        spacing: {
          ...tokens.spacing,
        },
        sizes: {
          ...tokens.sizes,
        },
        fontSizes: {
          ...tokens.fontSizes,
        },
        fontWeights: {
          ...tokens.fontWeights,
        },
        lineHeights: {
          ...tokens.lineHeights,
        },
        radii: {
          ...tokens.radii,
        },
        borders: {
          ...tokens.borders,
        },
        shadows: {
          ...tokens.shadows,
        },
        zIndex: {
          ...tokens.zIndex,
        },
        durations: {
          ...tokens.durations,
        },
        animations: {
          ...tokens.animations,
        },
      },
      semanticTokens: {
        colors: {
          ...semanticTokens.colors,
        },
      },
    },
  },
});

export default bccPreset;
