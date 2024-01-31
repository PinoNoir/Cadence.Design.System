import clsx from 'clsx';
import React, { forwardRef, HTMLAttributes } from 'react';
import { BadgeRecipe, BadgeVariants, iconContainer } from './Badge.css';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Variant options to indicate system status
   */
  variant: BadgeVariants['variant'];

  /**
   * Shape options based on app requirements
   */
  shape?: BadgeVariants['shape'];

  /**
   * Pass in the children for the `<Badge>`
   */
  children: React.ReactNode;

  /**
   * Badges can also contain an optional icon for added context
   */
  icon?: React.ReactElement;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;
}

/** A badge is a highly visual way to draw attention to content. */
const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', shape = 'round', children, icon, ...props }, forwardedRef) => {
    return (
      <span ref={forwardedRef} className={clsx(className, BadgeRecipe({ variant, shape }))} {...props}>
        {icon ? <span className={`${iconContainer}`}>{icon}</span> : null}
        {children}
      </span>
    );
  },
);

Badge.displayName = 'Badge';

export default Badge;
