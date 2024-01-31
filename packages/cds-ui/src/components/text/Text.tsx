import clsx from 'clsx';
import React from 'react';
import CustomAttributes from '../../types/custom-attributes';
import { TextVariants, textRecipe } from './Text.css';

type TextElement = 'a' | 'span' | 'label' | 'legend' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TextProps extends CustomAttributes {
  /**
   * Use the as prop to
   * pecify which HTML text element to render: */
  as: TextElement;

  /**
   * Value prop for text
   * content: */
  children?: React.ReactNode;

  /**
   * Control the text size
   * with the size prop:
   */
  size?: TextVariants['size'];

  /**
   * Control the text color
   * with the color prop:
   */
  color?: TextVariants['color'];

  /**
   * Use the href prop to insert
   * a URL for hyperlinks:
   */
  href?: string;

  /**
   * Add a target attribute
   * to specify where/how the linked document will open:
   */
  target?: string;

  /**
   * Use the className prop
   * for additional styling:
   */
  className?: string;

  /**
   * Use the style prop for inline styling
   */
  style?: React.CSSProperties;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;
}

const Text: React.FC<TextProps> = ({ as: BaseComponent, children, className, style, size, color, ...props }) => {
  return (
    <BaseComponent style={style} className={clsx(className, textRecipe({ size, color }))} {...props}>
      {children}
    </BaseComponent>
  );
};

Text.displayName = 'Text';

export default Text;
