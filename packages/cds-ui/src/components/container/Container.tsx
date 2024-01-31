import clsx from 'clsx';
import React, { ComponentPropsWithoutRef } from 'react';
import { ContainerTypeValues } from '../../types/layout-properties';
import { ContainerVariants, containerRecipe } from './Container.css';

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Pass in content that will be rendered within the `Container`
   */
  children?: React.ReactNode;

  /**
   * Specify a display property on the `Container`
   */
  display?: ContainerVariants['display'];

  /**
   * Specify a justify-content property on the `Container` to position the children.
   */
  justifyContent?: ContainerVariants['justifyContent'];

  /**
   * Specify an overflow property on the `Container` - Note: this is useful for scrollable content
   */
  overflow?: ContainerVariants['overflow'];

  /**
   * Specify a custom className to be applied to the `Container`
   */
  className?: string;

  /**
   * Specify a top margin to be applied to the `Container`
   */
  marginTop?: string;

  /**
   * Specify a bottom margin to be applied to the `Container`
   */
  marginBottom?: string;

  /**
   * Specify a custom container name to be applied to the `Container` component
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/container-name} to learn more.
   */
  containerName?: string;

  /**
   * Specify a custom container type to be applied to the `Container` component
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/container-type} to learn more.
   */
  containerType?: ContainerTypeValues;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;
}

/**
 * Container is intended to be used as a wrapper for components and content. It renders a HTML div element by default. Use the provided props to position the `children` inside of the container.
 */
const Container = ({
  children,
  className,
  display,
  justifyContent,
  overflow,
  marginTop,
  marginBottom,
  containerName,
  containerType,
  ...props
}: ContainerProps) => {
  const style: React.CSSProperties = {
    marginTop: marginTop,
    marginBottom: marginBottom,
  };

  return (
    <div className={clsx(containerRecipe({ display, justifyContent, overflow }))} style={style} {...props}>
      {children}
    </div>
  );
};

export default Container;
