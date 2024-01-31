import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { DividerRecipe, DividerVariants } from './Divider.css';

export interface DividerProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Optionally apply a custom CSS class to the `<Divider>`.
   */
  className?: string;

  /**
   * Specify a color for the `<Divider>`.
   */
  color?: DividerVariants['color'];

  /**
   * Specify a thickness for the `<Divider>`.
   */
  thickness?: DividerVariants['thickness'];

  /**
   * Specify an orientation for the `<Divider>`.
   */
  orientation?: DividerVariants['orientation'];

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;
}

const Divider = ({
  className,
  color = 'onLight',
  thickness = 'medium',
  orientation = 'horizontal',
  ...props
}: DividerProps) => {
  return <div className={clsx(className, DividerRecipe({ color, thickness, orientation }))} {...props} />;
};

Divider.displayName = 'Divider';

export default Divider;
