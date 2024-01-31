import { Icon } from '@iconify/react';
import clsx from 'clsx';
import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Avatar } from '../avatar';
import { Badge } from '../badge';
import { Box } from '../box';
import { Button } from '../button';
import { Divider } from '../divider';
import { Dropdown, DropdownMenu, DropdownMenuItem, DropdownTrigger } from '../dropdown';
import { Flex } from '../flex';
import { Image } from '../image';
import * as styles from './Navbar.css';

import strettoSymbol from '../../public/stretto-symbol.svg';

export interface NavbarProps extends ComponentPropsWithoutRef<'nav'> {
  /**
   * Specify the id for the navbar
   */
  id?: string;

  /**
   * Specify the logo to be displayed
   */
  logo?: ReactNode;

  /**
   * Specify the logo url
   */
  logoUrl: string;

  /**
   * Specify an array of links to be rendered in the navbar
   */
  links: Array<{ label: string; url: string; target?: string }>;

  /**
   * Specify the alert url
   */
  alertUrl?: string;

  /**
   * Specify the avatar to be displayed
   */
  avatar?: ReactNode;

  /**
   * Specify the image source
   */
  avatarUrl?: string;

  /**
   * Specify the username to be displayed
   */
  username?: string;

  /**
   * Specify a callback function to be called when the user logs out
   */
  onLogout?: () => void;

  /**
   * Specify a custom CSS class for the parent element
   */
  className?: string;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  logoUrl,
  id,
  logo,
  links,
  alertUrl,
  avatar,
  avatarUrl,
  username,
  onLogout,
  className,
  ...props
}) => {
  const Logo = <Image src={strettoSymbol} alt="stretto logo" />;

  return (
    <header className={`${styles.navStyles}`} id={id}>
      <nav className={`${styles.navStyles}`} {...props}>
        <a className={`${styles.navLogo}`} href={logoUrl} title="Best Case Bankruptcy">
          {Logo}
        </a>
        <ul className={clsx(className, `${styles.navLinks}`)}>
          {links.map((link) => (
            <li className={`${styles.navStyles}`} key={link.label}>
              <a className={`${styles.navStyles}`} href={link.url} target={link.target}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Flex alignItems="center" justifyContent="center">
          <div className={`${styles.alertContainer}`}>
            <Button variant="primary" fill="none" href={alertUrl}>
              <Icon width="24px" icon="mdi:bell" />
            </Button>
            <div className={`${styles.alertBadge}`}>
              <Badge variant="warning" color="warning">
                12
              </Badge>
            </div>
          </div>
          <div>
            <Button variant="primary" fill="none">
              <Icon width="24px" icon="mdi:plus-circle" />
            </Button>
          </div>

          <div className={`${styles.avatarContainer}`}>
            <Dropdown>
              <DropdownTrigger className={`${styles.avatarTrigger}`}>
                <div className={`${styles.navAvatar}`}>
                  <Avatar hasImage={false}>NP</Avatar>
                </div>
                <Icon width="24px" icon="mdi:menu-down" />
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownMenuItem>Account Information</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Help</DropdownMenuItem>
                <DropdownMenuItem>Remote Support</DropdownMenuItem>
                <Divider orientation="horizontal" thickness="thin" color="onLight" />
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" padding="24px">
                  <Button variant="primary" onClick={onLogout}>
                    Log Out
                  </Button>
                </Box>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Flex>
      </nav>
    </header>
  );
};

Navbar.displayName = 'Navbar';

export default Navbar;
