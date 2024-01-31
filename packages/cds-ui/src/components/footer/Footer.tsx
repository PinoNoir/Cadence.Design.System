import { Icon } from '@iconify/react';
import React, { ComponentPropsWithoutRef } from 'react';
import { Stack } from '../stack';
import * as Styles from './Footer.css';

export interface FooterProps extends ComponentPropsWithoutRef<'footer'> {
  /**
   * Specify a custom CSS class
   */
  className?: string;

  /**
   * An array of link objects for the <footer>
   */
  links: Array<{ label: string; url: string; target?: string }>;

  /**
   * Accepts a string for a customer support phone number.
   * Each object should have a label (text to display), a URL (destination of the link), and optional target.
   */
  supportPhone: string;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;
}

/**
 * Represents the footer section of standard Best Case Cloud webpage.
 */
const Footer: React.FC<FooterProps> = ({ links, supportPhone, ...rest }) => {
  const year = new Date().getFullYear();

  return (
    <footer className={Styles.footerStyles} {...rest}>
      <Stack flexDirection="column" gap="16px">
        <div className={Styles.contactSection}>
          <Icon className={Styles.footerIcons} icon="mdi:headphones" style={{ color: '#173237' }} />
          <Icon className={Styles.footerIcons} icon="mdi:heart" style={{ color: '#b21876' }} />
          <Icon className={Styles.footerIcons} icon="mdi:account-group" style={{ color: '#173237' }} />
          <div>Need assistance? We&apos;d love to help.</div>
          <div>{'Contact Support at ' + supportPhone}</div>
        </div>
        <div className={`${Styles.footerLinks}`}>
          {links.map((link) => (
            <li className={`${Styles.footerList}`} key={link.label}>
              <a className={`${Styles.footerLink}`} href={link.url} target={link.target}>
                {link.label}
              </a>
            </li>
          ))}
        </div>
        <div className={Styles.copyrightSection}>{'© ' + year + ' STRETTO. All rights reserved.'}</div>
        <Stack flexDirection="row" justifyContent="center" gap="8px">
          <a className={`${Styles.socialLinks}`} href="https://twitter.com/BestCaseTweet/">
            <Icon className={Styles.footerIcons} icon="mdi:twitter" />
          </a>
          <a className={`${Styles.socialLinks}`} href="https://www.linkedin.com/showcase/bestcase/">
            <Icon className={Styles.footerIcons} icon="mdi:linkedin" />
          </a>
        </Stack>
      </Stack>
    </footer>
  );
};

export default Footer;
