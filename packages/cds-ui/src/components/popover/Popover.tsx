import { Icon } from '@iconify/react';
import * as RadixPopover from '@radix-ui/react-popover';
import React from 'react';
import * as Styles from './Popover.css';

interface PopoverProps {
  /**
   * Content to be displayed in the popover
   */
  children: React.ReactNode;

  /**
   * Pass an svg icon as a trigger for the popover
   */
  icon?: React.ReactNode;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;
}

function Popover({ children, icon, ...props }: PopoverProps) {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger className={`${Styles.PopoverTrigger}`} asChild>
        <button aria-label="Update dimensions">{icon}</button>
      </RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content className={`${Styles.PopoverContent}`} side="top" sideOffset={2} {...props}>
          {children}
          <RadixPopover.Close className={`${Styles.PopoverClose}`} aria-label="Close">
            <Icon icon="mdi:close" />
          </RadixPopover.Close>
          <RadixPopover.Arrow className={`${Styles.PopoverArrow}`} />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
}

Popover.displayName = 'Popover';

export default Popover;
