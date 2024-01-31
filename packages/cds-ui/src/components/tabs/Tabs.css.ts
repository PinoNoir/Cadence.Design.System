import { style } from '@vanilla-extract/css';
import { tokens } from '../../vanilla-extract/tokens.css';

export const tabGroupContainer = style({
  width: '100%',
  selectors: {
    '&[aria-orientation="vertical"]': {
      flexDirection: 'row',
    },
  },
});

export const tabGroup = style({
  width: '100%',
  minWidth: '900px',
  overflow: 'hidden',
  margin: 'auto',
});

export const tabHeaders = style({
  display: 'flex',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});

export const tab = style({
  all: 'unset',
  display: 'inline-block',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  marginBottom: '-1px',
  paddingInline: tokens.space[24],
  paddingBlock: tokens.space[12],
  borderBottomColor: tokens.colors.teal50,
  backgroundColor: tokens.colors.neutral10,
  marginInlineEnd: tokens.space[2],
  transition: 'background-color 150ms ease-in-out, border-color 150ms ease-in-out',
  /**************************************************
					Hover
  **************************************************/
  ':hover': {
    backgroundColor: tokens.colors.neutral40,
    borderColor: tokens.colors.neutral40,
  },
  ':active': {
    backgroundColor: tokens.colors.teal90,
  },
  /**************************************************
					Selected State
  **************************************************/
  selectors: {
    '&[aria-pressed="true"]': {
      color: tokens.colors.teal50,
      backgroundColor: tokens.colors.white,
      border: `${tokens.borderWidth[1]} solid ${tokens.colors.teal50}`,
      borderBottom: `${tokens.borderWidth[1]} solid ${tokens.colors.transparent}`,
    },
    '&[aria-pressed="false"]': {
      backgroundColor: tokens.colors.neutral10,
      border: `${tokens.borderWidth[1]} solid `,
      borderTopColor: tokens.colors.neutral20,
      borderRightColor: tokens.colors.neutral20,
      borderLeftColor: tokens.colors.neutral20,
      borderBottomColor: tokens.colors.teal50,
    },
  },
});

export const tabBar = style({
  width: `100%`,
});

export const tabScroller = style({
  display: 'flex',
  maxWidth: '900px',
  overflowY: 'hidden',
});

export const tabScrollerScroll = style({
  overflowX: 'scroll',
});

export const tabScrollerScrollArea = style({
  overflowX: 'scroll',
  display: 'flex',
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

export const tabScrollerScrollContent = style({
  position: 'relative',
  display: 'flex',
  flex: '1 0 auto',
  transform: 'none',
  willChange: 'transform',
});

export const tabList = style({
  borderBottom: `${tokens.borderWidth[1]} solid ${tokens.colors.teal50}`,
});

export const tabContent = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'inherit',
});

export const tabScrollArrows = style({
  all: 'unset',
  alignSelf: 'center',
  float: 'left',
  cursor: 'pointer',
  color: tokens.colors.neutral100,
  fontSize: '20px',
});

export const contentContainer = style({
  display: 'flex',
  paddingBlock: tokens.space[24],
  width: '100%',
  minWidth: '900px',
});

export const contentArea = style({
  marginTop: tokens.space[8],
  paddingBlock: tokens.space[8],
});
