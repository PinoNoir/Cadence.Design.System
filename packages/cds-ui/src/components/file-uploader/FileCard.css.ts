import { globalStyle, style } from '@vanilla-extract/css';
import { tokens } from '../../vanilla-extract';

export const fileCard = style({
  minHeight: '80px',
  width: '100%',
  display: 'grid',
  padding: `${tokens.space[16]} ${tokens.space[24]}`,
  alignItems: 'center',
  color: tokens.colors.neutral70,
  backgroundColor: tokens.colors.gray,
  border: `1px solid ${tokens.colors.neutral10}`,
  borderRadius: tokens.borderRadius[4],

  /**
   * Variants based on fileStatus (edit, uploading, complete, error)
   */
  selectors: {
    '&[data-status="uploading"]': {
      backgroundColor: tokens.colors.blue10,
      borderColor: tokens.colors.blue20,
      borderWidth: '2px',
      borderStyle: 'dashed',
    },
    '&[data-status="complete"]': {
      backgroundColor: tokens.colors.gray,
    },
    '&[data-status="failed"]': {
      backgroundColor: tokens.colors.red10,
      borderColor: tokens.colors.red30,
      borderWidth: '2px',
      borderStyle: 'dashed',
    },
    '&[data-status="validationFailed"]': {
      backgroundColor: tokens.colors.red10,
      borderColor: tokens.colors.red30,
      borderWidth: '2px',
      borderStyle: 'dashed',
    },
  },
});

export const fileCardStatusIcon = style({
  display: 'flex',
  alignItems: 'flex-end',
  selectors: {
    '&[data-status="uploading"]': {
      color: tokens.colors.blue50,
    },
    '&[data-status="complete"]': {
      color: tokens.colors.green50,
    },
    '&[data-status="failed"]': {
      color: tokens.colors.red50,
    },
    '&[data-status="validationFailed"]': {
      color: tokens.colors.red50,
    },
  },
});

export const cardInfoContainer = style({
  display: 'grid',
  gap: tokens.space[8],
  gridTemplateColumns: 'min-content 1fr 1fr 1fr 1fr',
  gridTemplateRows: '1fr',
  alignItems: 'center',
});

export const fileTypeIcon = style({
  display: 'inline-flex',
  alignItems: 'center',
  selectors: {
    '&[data-name="docx"]': {
      color: tokens.colors.blue80,
    },
    '&[data-name="doc"]': {
      color: tokens.colors.blue80,
    },
    '&[data-name="xlsx"]': {
      color: tokens.colors.green80,
    },
    '&[data-name="xls"]': {
      color: tokens.colors.green80,
    },
    '&[data-name="pdf"]': {
      color: tokens.colors.red80,
    },
    '&[data-name="image"]': {
      color: tokens.colors.neutral60,
    },
  },
});

export const fileTitle = style({
  fontWeight: tokens.fontWeight[700],
  marginInlineEnd: tokens.space[16],
  color: tokens.colors.neutral100,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});

export const fileMetaData = style({
  marginInlineEnd: tokens.space[16],
  color: tokens.colors.neutral80,
  fontSize: tokens.fontSize.body,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});

export const fileSize = style({
  marginInlineEnd: tokens.space[16],
  color: tokens.colors.neutral80,
  fontSize: tokens.fontSize.body,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});

export const fileCardProgressBarContainer = style({
  paddingBlockStart: tokens.space[4],
  width: '100%',
  position: 'relative',
});

export const documentContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: tokens.space[8],
  width: '100%',
});

export const fileTitleContainer = style({
  flexDirection: 'row',
  justifyContent: 'space-between',
  display: 'inline-flex',
});

export const menuContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  position: 'relative',
});

globalStyle(`[data-status="uploading"] ${menuContainer} > button`, {
  display: 'none',
});

export const statusIconContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
});

export const fileStatusIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginInlineEnd: tokens.space[8],
});

export const errorMessageContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  color: tokens.colors.red50,
  fontSize: tokens.fontSize.body,
  fontWeight: tokens.fontWeight[400],
  fontFamily: tokens.fontFamily.body,
  marginBlockStart: tokens.space[8],
});

export const retryButton = style({
  marginInline: tokens.space[8],
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '24px',
  padding: tokens.space[4],
  color: tokens.colors.neutral100,
  border: 'none',
  backgroundColor: tokens.colors.transparent,
  borderRadius: tokens.borderRadius.round,
  transition: `background-color 300ms ease-in, box-shadow 0.15s ease-in`,
  ':hover': {
    backgroundColor: tokens.colors.neutral20,
  },
  ':focus': {
    backgroundColor: tokens.colors.white,
    outline: '2px solid transparent',
    boxShadow: `0 0 0 3px rgba(139, 153, 155, .4)`,
  },
});

globalStyle(`${statusIconContainer} svg`, {
  width: '20px',
});

globalStyle(`${menuContainer} svg`, {
  width: '24px',
});
