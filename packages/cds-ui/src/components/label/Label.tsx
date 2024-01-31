import * as RadixLabel from '@radix-ui/react-label';
import { PrimitiveLabelProps } from '@radix-ui/react-label';
import React, { ReactNode } from 'react';
import { Box } from '../box';
import { styledLabel } from './Label.css';

export interface LabelProps extends PrimitiveLabelProps {
  /**
   * Pass in children (the label text)
   */
  children: ReactNode;

  /**
   * Specify a custom CSS class for the parent element
   */
  className?: string;

  /**
   * Specify whether the label has an icon
   */
  hasIcon?: boolean;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;
}

const Label: React.FC<LabelProps> = ({ hasIcon, children, ...props }) => {
  return (
    <Box display="flex">
      <RadixLabel.Root className={styledLabel} {...props}>
        {children}
      </RadixLabel.Root>
      {!hasIcon ? <Box alignItems={'center'}>{hasIcon}</Box> : null}
    </Box>
  );
};

Label.displayName = 'Label';

export default Label;
