import * as RadixTooltip from '@radix-ui/react-tooltip';
import React from 'react';
import * as Styles from './Tooltip.css';

interface TooltipProps {
  /**
   * Pass in the child to which the tooltip will be applied
   */
  children: React.ReactNode;

  /**
   * Provide the description to be rendered inside of the Tooltip. The
   * description will use `aria-describedby` and will describe the child node
   * in addition to the text rendered inside of the child. This means that if you
   * have text in the child node, it will be announced alongside the
   * description to the screen reader.
   */
  description?: React.ReactNode;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;
}

function Tooltip({ children, description, ...props }: TooltipProps) {
  return (
    <RadixTooltip.Provider delayDuration={100}>
      <RadixTooltip.Root {...props}>
        <RadixTooltip.Trigger className={`${Styles.TooltipTrigger}`} asChild>
          {children}
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content className={`${Styles.TooltipContent}`} sideOffset={5}>
            {description}
            <RadixTooltip.Arrow className={`${Styles.TooltipArrow}`} />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}

Tooltip.displayName = 'Tooltip';

export default Tooltip;
