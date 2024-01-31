import clsx from 'clsx';
import React, { ComponentPropsWithoutRef } from 'react';
import CdsComponentProps from '../../types/cds-component-props';
import { Divider } from '../divider';
import { Flex } from '../flex';
import { Text } from '../text';
import * as styles from './Panel.css';
import { useAutomationId } from '../../utilities/use-automation-id';
import { GridDirectionValues } from '../../types/layout-properties';

export interface PanelProps extends CdsComponentProps, ComponentPropsWithoutRef<'div'> {
  /**
   * Specify the header for the Panel rendered as an `<h2>` element by default
   */
  header?: React.ReactNode;

  /**
   * Specify an icon that renders to the left of the header
   */
  headerIcon?: React.ReactNode;

  /**
   * Specify the content for the Panel
   */
  panelContent: React.ReactNode;

  /**
   * Specify whether the footer should have a divider
   */
  footerDivider?: boolean;

  /**
   * Specify the footer for the Panel
   */
  footer?: React.ReactNode;

  /**
   * Specify the border for the Panel
   */
  border?: styles.PanelVariants['border'];

  /**
   * Specify an alert to be displayed at the top of the panel
   */
  sectionAlert?: React.ReactNode;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;

  /**
   * Optionally specify a direction for the Panel and PanelContent
   */
  flexDirection?: GridDirectionValues;
}

const Panel: React.FC<PanelProps> = ({
  header,
  headerIcon,
  panelContent,
  footerDivider,
  footer,
  border,
  sectionAlert,
  flexDirection,
  ...props
}) => {
  const autoId = useAutomationId('panel');
  const style: React.CSSProperties = {
    flexDirection: flexDirection,
  };
  return (
    <div className={clsx(styles.basePanelStyle, styles.PanelRecipe({ border }))} automation-id={autoId} {...props}>
      <div className={styles.panelHeader}>
        {sectionAlert ? <div className="error-container">{sectionAlert}</div> : null}
        <Flex gap="0px" justifyContent="flex-start">
          <div className={styles.panelHeaderText}>
            {header != null ? (
              <Text as="h2" size="h2" color="default">
                {header}
              </Text>
            ) : null}
          </div>
          <div className={styles.panelHeaderIcon}>{headerIcon ? headerIcon : null}</div>
        </Flex>
      </div>
      <div className={styles.panelContent} style={style}>
        {panelContent}
      </div>
      {footerDivider == true && footer ? <Divider thickness="thin" color="onLight" orientation="horizontal" /> : null}
      {footer && <div className={styles.panelFooter}>{footer}</div>}
    </div>
  );
};

Panel.displayName = 'Panel';

export default Panel;
