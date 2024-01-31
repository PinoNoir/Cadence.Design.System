import React, { ComponentPropsWithoutRef } from 'react';
import { AlignValues, GridDirectionValues, GridGapValues, JustifyValues } from '../../types/layout-properties';

export interface StackProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Pass in content that will be rendered within the `Stack` component
   */
  children: React.ReactNode;

  /**
   * Specify a custom className to be applied to the `Stack` component
   */
  className?: string;

  /**
   * Specify a preset gap value to apply to the children of the `Stack` component. Note: the default value is 24px.
   */
  gap?: GridGapValues;

  /**
   * Specify the align-items property to align the children inside the `Stack` component
   */
  alignItems?: AlignValues;

  /**
   * Specify the flex-direction property to set how children are placed inside the `Stack` component
   */
  flexDirection?: GridDirectionValues;

  /**
   * Specify a justify-content property to justify the children inside the `Stack` component
   */
  justifyContent?: JustifyValues;

  /**
   * Specify a custom automation id for testing purposes
   */
  ['automation-id']?: string;
}

/**
 * Stack is intended to be used as a wrapper for components and content that you
 * want to "stack" vertically or horizontally.
 * The Stack component's default properties are set to
 * `display: flex` and `flex-direction: column`.
 * It renders a HTML div element by default. Use the provided props to
 * adjust the `children` rendered within.
 */
const Stack = ({
  children,
  className,
  gap = '24px',
  alignItems,
  justifyContent,
  flexDirection = 'column',
  ...props
}: StackProps) => {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        gap: gap,
        alignItems: alignItems,
        justifyContent: justifyContent,
        flexDirection: flexDirection,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

Stack.displayName = 'Stack';

export default Stack;
