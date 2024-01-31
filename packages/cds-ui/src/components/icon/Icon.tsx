import clsx from 'clsx';
import Icons from '../../public/bcc-icon-sprite.svg';
import { IconVariants, iconRecipe } from './Icon.css';
import { useAutomationId } from '../../utilities/use-automation-id';
import { iconNames } from '../../types/icon-names';

export interface IconProps {
  /**
   * Specify the name of the icon
   */
  name: (typeof iconNames)[number];

  /**
   * Specify the color of the icon
   */
  color?: IconVariants['color'];

  /**
   * Specify the size of the icon
   */
  size?: IconVariants['size'];

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;
}

const Icon = ({ name, color, size = 'default' }: IconProps) => {
  const autoId = useAutomationId(`icon-${name}`);
  return (
    <svg automation-id={autoId} className={clsx(iconRecipe({ color, size }))}>
      <use href={`${Icons}#${name}`} />
    </svg>
  );
};

Icon.displayName = 'Icon';

export default Icon;
