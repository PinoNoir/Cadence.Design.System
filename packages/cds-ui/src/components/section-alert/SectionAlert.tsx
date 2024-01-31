import { Icon } from '@iconify/react';
import clsx from 'clsx';
import React, { ComponentPropsWithoutRef } from 'react';
import { ControlState } from '../../types/control-state';
import * as Styles from './SectionAlert.css';
import { SectionAlertVariants, sectionAlertRecipe } from './SectionAlert.css';

export interface SectionAlertProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * CSS variant of SectionAlert (Warning, Success, Info, error)
   */
  variant: SectionAlertVariants['variant'];

  /**
   * State of SectionAlert (Warning, Success, Info, error)
   */
  state: ControlState;

  /**
   * Message displayed inside of section alert
   */
  message: React.ReactNode;

  /**
   * Additional text for SectionAlert, always displayed as bold text (optional)
   */
  additionalBoldMessage?: string;

  /**
   * URL associated with Link text (optional)
   */
  link?: string;

  /**
   * Text for link (optional)
   */
  linkText?: string;

  /**
   * h5 text for SectionAlert(optional)
   */
  header?: string;

  /**
   * tab for link to reference in URL (optional)
   */
  linkCurrentTab?: boolean;

  /**
   * additional className for SectionAlert render(optional)
   */
  className?: string;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;
}

const getIcon = (state: ControlState): React.ReactElement => {
  switch (state) {
    case 'Error':
      return <Icon icon="mdi:alert-rhombus" width="24" color="#E12339" />;
    case 'Info':
      return <Icon icon="mdi:information" width="24" color="#2A7AB7" />;
    case 'Success':
      return <Icon icon="mdi:check-circle" width="24" color="#16A550" />;
    case 'Warning':
      return <Icon icon="mdi:alert" width="24" color="#8D6613" />;
    default:
      return <></>; // Provide a default case to handle any unexpected values
  }
};

const SectionAlert: React.FC<SectionAlertProps> = ({
  variant,
  state,
  message,
  additionalBoldMessage,
  link,
  linkText,
  header,
  linkCurrentTab,
  className,
  ...props
}) => {
  return (
    <div className={clsx(className, sectionAlertRecipe({ variant }), `${state}`)} data-qa="section-alert" {...props}>
      <div className={`${Styles.sectionAlertIcon}`}>{getIcon(state)}</div>
      <div className={`${Styles.sectionAlertMessage}`} style={{ marginTop: '3px' }}>
        {header ? <h5 className={`${Styles.sectionAlertMessageHeader}`}>{header}</h5> : null}
        {message}
        {additionalBoldMessage ? (
          <div className={`${Styles.sectionAlertAdditionalMessage}`}>{additionalBoldMessage}</div>
        ) : null}

        {link && linkText ? (
          <a className={`${Styles.sectionAlertMessageLink}`} href={link} target={linkCurrentTab ? '' : 'blank'}>
            {linkText}
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default SectionAlert;
