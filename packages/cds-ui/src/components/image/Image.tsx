import React, { ImgHTMLAttributes } from 'react';
import { useAutomationId } from '../../utilities/use-automation-id';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Specify the image source
   */
  src: string;

  /**
   * Specify the alt text for the image
   */
  alt: string;

  /**
   * Specify a custom CSS class for the parent element
   */
  className?: string;

  /**
   * Specify the width of the image
   * @default 'auto'
   */

  width?: string | number;

  /**
   * Specify the height of the image
   * @default 'auto'
   */
  height?: string | number;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, width, height, className, ...props }) => {
  const autoId = useAutomationId('image');
  return (
    <img
      id={autoId}
      automation-id={autoId}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...props}
    />
  );
};

Image.displayName = 'Image';

export default Image;
