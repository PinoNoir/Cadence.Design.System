import clsx from 'clsx';
import React, { ComponentPropsWithoutRef } from 'react';
import { AvatarVariants, avatarPlaceholder, avatarRecipe, placeholderText } from './Avatar.css';
import { useAutomationId } from '../../utilities/use-automation-id';

type AvatarProps = ComponentPropsWithoutRef<'img'> &
  (
    | {
        /**
         * If `true`, then an image src is required.
         */
        hasImage: true;
        src: string;
      }
    | {
        /**
         * If `false`, then an image src is NOT required.
         */
        hasImage: false;
        src?: null;
      }
  ) & {
    /**
     * Specify the size of the `<Avatar>`. Default is `md`.
     */
    size?: AvatarVariants['size'];
    /**
     * Optionally apply a custom CSS class to the `<Avatar>`.
     */
    className?: string;

    /**
     * Optionally render children within the `<Avatar>` when hasImage is set to `false`.
     */
    children?: React.ReactNode;

    /**
     * Optionally specify an automation id for testing purposes.
     */
    ['automation-id']?: string;
  };

const Avatar: React.FC<AvatarProps> = ({ size = 'md', children, className, src, hasImage, ...props }) => {
  const autoId = useAutomationId('avatar');
  // Render an image if `hasImage` is true and `src` is provided
  if (hasImage) {
    return (
      <img
        className={clsx(className, avatarRecipe({ size }))}
        src={src}
        alt="Avatar"
        automation-id={autoId}
        {...props}
      />
    );
  }

  // Otherwise, render a placeholder div
  return (
    <div className={clsx(className, avatarPlaceholder, avatarRecipe({ size }))} automation-id={autoId}>
      <span className={placeholderText}>{children}</span>
    </div>
  );
};

Avatar.displayName = 'Avatar';

export default Avatar;
