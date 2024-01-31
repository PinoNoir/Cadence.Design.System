import {
  AnchorHTMLAttributes,
  AriaAttributes,
  HTMLAttributeAnchorTarget,
  PropsWithChildren,
  ReactElement,
  forwardRef,
} from 'react';
import { useAutomationId } from '../../utilities/use-automation-id';
import { Box } from '../box';
import { linkStyle } from './Link.css';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Indicates the element that represents the
   *   current item within a container or set of related
   *   elements.
   */
  'aria-current'?: AriaAttributes['aria-current'];

  /**
   * Provide a custom className to be applied to
   *   the containing `<a>` node.
   */
  className?: string;

  /**
   * Specify if the control should be disabled, or not.
   */
  disabled?: boolean;

  /**
   * Provide the `href` attribute for the `<a>` node.
   */
  href?: string;

  /**
   * Specify whether you want the inline version of this control.
   */
  inline?: boolean;
  /**
   * Optional prop to render an icon next to the link.
   */
  icon?: ReactElement;

  /**
   * Specify the size of the Link. Currently supports either `sm`, 'md' (default) or 'lg` as an option.
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Specify the target attribute for the `<a>` node.
   */
  target?: HTMLAttributeAnchorTarget;

  /**
   * Specify whether you want the link to receive visited styles after the link has been clicked
   */
  visited?: boolean;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;
}

const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<LinkProps>>(function Link(
  { children, className, href, disabled = false, inline = false, visited = false, icon, size, target, ...props },
  ref,
) {
  const autoId = useAutomationId('link');
  const rel = target === '_blank' ? 'noopener' : undefined;
  const linkProps: AnchorHTMLAttributes<HTMLAnchorElement> = {
    className,
    rel,
    target,
  };
  // Reference for disabled links:
  // https://www.scottohara.me/blog/2021/05/28/disabled-links.html
  if (!disabled) {
    linkProps.href = href;
  } else {
    linkProps.role = 'link';
    linkProps['aria-disabled'] = true;
  }
  return (
    <a className={linkStyle} ref={ref} {...linkProps} {...props} id={autoId} automation-id={autoId}>
      {!inline && icon ? (
        <Box display="inline-flex" alignItems="center">
          {icon}
        </Box>
      ) : null}
      {children}
    </a>
  );
});

Link.displayName = 'Link';

export default Link;
