import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import type { VariantSelection } from '../../utilities/type-utils';
import { tokens } from '../../vanilla-extract/tokens.css';

export const containerStyle = style({
  padding: tokens.space[16],
  margin: 'auto',
});

const containerVariants = {
  display: {
    flex: {
      display: 'flex',
    },
    Inlineflex: {
      display: 'inline-flex',
    },
    block: {
      display: 'block',
    },
    inlineBlock: {
      display: 'inline-block',
    },
    grid: {
      display: 'grid',
    },
    none: {
      display: 'none',
    },
  },
  justifyContent: {
    center: {
      justifyContent: 'center',
    },
    spaceAround: {
      justifyContent: 'space-around',
    },
    spaceBetween: {
      justifyContent: 'space-between',
    },
    stretch: {
      justifyContent: 'stretch',
    },
    flexEnd: {
      justifyContent: 'flex-end',
    },
    flexStart: {
      justifyContent: 'flex-start',
    },
  },
  overflow: {
    hidden: {
      overflow: 'hidden',
    },
    clip: {
      overflow: 'clip',
    },
    visible: {
      overflow: 'visible',
    },
    scroll: {
      overflow: 'scroll',
    },
    auto: {
      overflow: 'auto',
    },
    unset: {
      overflow: 'unset',
    },
  },
};

export type ContainerVariants = VariantSelection<typeof containerVariants>;

export const containerRecipe = recipe({
  base: containerStyle,
  variants: containerVariants,
  defaultVariants: {
    display: 'flex',
    overflow: 'visible',
    justifyContent: 'flexStart',
  },
});
