import { defineTextStyles } from '@pandacss/dev';
import type { TextStyles } from '@pandacss/types';

export const textStyles: TextStyles = defineTextStyles({
  base: {
    description: 'The Roboto font used for all of strettos products',
    value: {
      fontSize: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontFamily: 'body',
    },
  },
  headings: {
    h1: {
      description: 'Used for h1 tags',
      value: {
        fontSize: 'h1',
        lineHeight: 'headings',
        fontWeight: 'headings',
        fontFamily: 'headings',
      },
    },
    h2: {
      description: 'Used for h2 tags',
      value: {
        fontSize: 'h2',
        lineHeight: 'headings',
        fontWeight: 'headings',
        fontFamily: 'headings',
      },
    },
    h3: {
      description: 'Used for h3 tags',
      value: {
        fontSize: 'h3',
        lineHeight: 'headings',
        fontWeight: 'headings',
        fontFamily: 'headings',
      },
    },
    h4: {
      description: 'Used for h4 tags',
      value: {
        fontSize: 'h4',
        lineHeight: 'headings',
        fontWeight: 'body',
        fontFamily: 'headings',
      },
    },
    h5: {
      description: 'Used for h5 tags',
      value: {
        fontSize: 'h5',
        lineHeight: 'headings',
        fontWeight: 'body',
        fontFamily: 'headings',
      },
    },
    h6: {
      description: 'Used for h6 tags',
      value: {
        fontSize: 'h6',
        lineHeight: 'headings',
        fontWeight: 'body',
        fontFamily: 'headings',
      },
    },
  },
  body: {
    description: 'The body text style used for paragraphs',
    value: {
      fontSize: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontFamily: 'body',
    },
  },
});
