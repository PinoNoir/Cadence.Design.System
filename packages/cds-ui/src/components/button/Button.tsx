import { Icon as Loader } from '@iconify/react';
import clsx from 'clsx';
import React from 'react';
import { Box } from '../box';
import { buttonRecipe, ButtonVariants, Spinner } from './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Specify a custom id for the `<button>`
   */
  id?: string;

  /**
   * Can only be used when href is defined. Adds the download attribute to the the anchor element
   */
  download?: boolean | string;

  /**
   * The URL of the link to open when `<button>` is clicked
   */
  href?: string;

  /**
   * Specify a custom CSS class
   */
  className?: string;

  /**
   * Variant options for different application use cases
   */
  variant: ButtonVariants['variant'];

  /**
   * `<button>` size can be controlled with the size prop
   */
  size?: ButtonVariants['size'];

  /**
   * Choose a solid or transparent fill with an outline
   */
  fill?: ButtonVariants['fill'];

  /**
   * If true, the `<button>` will be disabled
   */
  isDisabled?: boolean;

  /**
   * If true, the `<button>` is selected
   */
  isSelected?: boolean;

  /**
   * If true, the loading glyph will be displayed
   */
  isLoading?: boolean;

  /**
   * Pass in the children for your `<button>`
   */
  children: React.ReactNode;

  /**
   * Pass in an optional icon for additional context
   */
  icon?: React.ReactNode;

  /**
   * Shape options based on app requirements
   */
  shape?: ButtonVariants['shape'];

  /**
   * Callback function when the `<button>` is clicked
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;
}

/**
 * Used to call attention, perform an action, or to navigate.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className,
    variant = 'primary',
    size,
    fill,
    isDisabled = false,
    isSelected = false,
    isLoading = false,
    children,
    icon,
    shape,
    onBlur,
    onClick,
    onFocus,
    onSubmit,
    onMouseEnter,
    onMouseLeave,
    ...props
  },
  forwardedRef,
) {
  return (
    <button
      ref={forwardedRef}
      className={clsx(className, buttonRecipe({ variant, size, fill, shape }))}
      onClick={onClick}
      onSubmit={onSubmit}
      disabled={isDisabled}
      {...props}
    >
      {icon ? (
        <Box display="flex" alignItems="center" marginRight="4px">
          {icon}
        </Box>
      ) : null}
      {isLoading ? <Loader icon="mdi:loading" className={Spinner} /> : children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
