import React, { ComponentPropsWithoutRef } from 'react';
import {
  ContainerTypeValues,
  FlexDisplayValues,
  GridAlignValues,
  GridDirectionValues,
  GridGapValues,
  GridJustifyValues,
  GridWrapValues,
} from '../../types/layout-properties';

export interface FlexProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Pass in content that will be rendered within
   * the `Flex` component
   */
  children: React.ReactNode;

  /**
   * Specify a custom className to be applied to
   * the `Flex` component
   */
  className?: string;

  /**
   * Set the `display` property of the flex component to `flex` or `inline-flex`.
   * Note: the default value is `flex`.
   */
  display?: FlexDisplayValues;

  /**
   * Specify a preset gap value to apply to the
   * children of the `Flex` component. Note: the default value is 24px.
   */
  gap?: GridGapValues;

  /**
   * Specify the align-items property to align the children
   * inside the `Flex` component
   */
  alignItems?: GridAlignValues;

  /**
   * Specify a justify-content property to justify the children
   * inside the `Flex` component
   */
  justifyContent?: GridJustifyValues;

  /**
   * Specify the flex-direction property to set how children
   * are placed inside the `Flex` component
   */
  flexDirection?: GridDirectionValues;

  /**
   * Specify the flex-wrap property to set how children
   * flow inside of the `Flex` component. Children can be forced onto
   * one line or can wrap onto multiple lines.
   */
  flexWrap?: GridWrapValues;

  /**
   * Specify the flex-basis property to set the initial main size of a child
   * inside of the `Flex` component. Note: This prop will only take
   * effect if the parent container
   * of the `Flex` component is also set to `display: flex`
   */
  flexBasis?: string;

  /**
   * Set the flex-grow property to specify how much of the `Flex` component's
   * remaining space should be assigned to the child's main size. Note: This prop
   * will only take effect if the parent container
   * of the `Flex` component is also set to `display: flex`
   */
  flexGrow?: number;

  /**
   * Specify the flex-shrink property to set the shrink factor of a child.
   * If the size of all flex items is larger than the `Flex` component,
   * items shrink to fit. Note: This prop will only take effect if the
   * parent container of the `Flex` component
   * is also set to `display: flex`
   */
  flexShrink?: number;

  /**
   * Specify the min-height property to set
   * the minimum height of the `Flex` component.
   */
  minHeight?: string;

  /**
   * Specify a custom container name to be applied
   * to the `Flex` component
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/container-name} to learn more.
   */
  containerName?: string;

  /**
   * Specify a custom container type to be applied
   * to the `Flex` component
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/container-type} to learn more.
   */
  containerType?: ContainerTypeValues;

  /**
   * Specify a custom automation id for testing purposes
   */
  ['automation-id']?: string;
}

/**
 * Flex is intended for use as a layout tool for positioning components and content.
 * It's default display property is set to `display: flex`
 * and renders a div element.
 */
const Flex = ({
  children,
  className,
  display = 'flex',
  gap = '24px',
  alignItems,
  justifyContent,
  flexDirection,
  flexWrap,
  flexBasis,
  flexGrow,
  flexShrink,
  minHeight,
  containerName,
  containerType,
  ...props
}: FlexProps) => {
  const style: React.CSSProperties = {
    display: display,
    gap: gap,
    alignItems: alignItems,
    justifyContent: justifyContent,
    flexDirection: flexDirection,
    flexWrap: flexWrap,
    flexBasis: flexBasis,
    flexGrow: flexGrow,
    flexShrink: flexShrink,
    minHeight: minHeight,
    containerName: containerName,
    containerType: containerType,
  };
  return (
    <div className={className} style={style} {...props}>
      {children}
    </div>
  );
};

Flex.displayName = 'Flex';

export default Flex;
