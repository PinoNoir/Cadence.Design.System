import { Icon } from '@iconify/react';
import clsx from 'clsx';
import React, {
  AriaAttributes,
  KeyboardEvent,
  MouseEventHandler,
  PropsWithChildren,
  ReactElement,
  useContext,
  useRef,
} from 'react';
import { useAccordionItem } from '../../hooks/useAccordionItem';
import { useAutomationId } from '../../utilities/use-automation-id';
import * as styles from './Accordion.css';
import { AccordionContext } from './AccordionProvider';

interface AccordionItemProps {
  /**
   * The id of the accordion item.
   */
  id: string;
  /**
   * The content to display in the accordion item.
   */
  children?: React.ReactNode;
  /**
   * Specify an optional className to be
   * applied to the container node.
   */
  className?: string;

  /**
   * Specify whether an individual `AccordionItem` should
   * be disabled (overrides the parent accordion state). If undefined,
   * this value will be managed by the parent Accordion.
   */
  disabled?: boolean;

  /**
   * The handler of the massaged `click` event.
   */
  onClick?: MouseEventHandler<HTMLLIElement>;

  /**
   * The accordion title.
   */
  title: React.ReactNode;

  /**
   * Pass a custom link to the accordion item.
   */
  link?: React.ReactNode;

  /**
   * The description of the content to be displayed in the accordion item.
   */
  description?: string;

  /**
   * Pass a custom context menu to the accordion item.
   */
  contextMenu?: React.ReactNode;

  /**
   * `true` to open the expand.
   */
  open: boolean;

  /**
   * The callback function to render the expand button.
   * Can be a React component class.
   */
  renderToggle?: (props: PropsWithChildren<AccordionToggleProps>) => ReactElement;

  /**
   * The callback function to run on the `onTransitionEnd`
   * event for the list item.
   */
  handleTransitionEnd?: React.TransitionEventHandler<HTMLDivElement>;

  /**
   * The callback function to run on the `onHeadingClick`
   * event for the list item.
   */
  onHeadingClick?: () => void;
}

interface AccordionToggleProps {
  'aria-controls'?: AriaAttributes['aria-controls'];
  'aria-expanded'?: AriaAttributes['aria-expanded'];
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onKeyDown?: (event: KeyboardEvent<HTMLDivElement>) => void;
  role?: 'button';
  children?: React.ReactNode;
}

const defaultRenderToggle = (props: AccordionToggleProps) => <div role="button" {...props} />;

const AccordionItem = ({
  id,
  children,
  className,
  open,
  renderToggle = defaultRenderToggle,
  title,
  link,
  description,
  contextMenu,
  disabled: controlledDisabled,
  handleTransitionEnd,
  onHeadingClick,
  ...props
}: AccordionItemProps) => {
  const { isOpen, handleClick, handleKeyDown } = useAccordionItem({ id, open, onHeadingClick });
  const autoId = useAutomationId();
  const accordionState = useContext(AccordionContext);
  const contentRef = useRef<HTMLDivElement>(null);

  const disabled = controlledDisabled ?? accordionState.disabled;
  const Toggle = renderToggle;

  return (
    <li className={clsx(className, styles.accordionItem)} {...props} id={autoId}>
      <Toggle
        disabled={disabled}
        aria-controls={id}
        aria-expanded={isOpen}
        className={clsx(styles.accordionHeader)}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        data-state={isOpen ? 'open' : 'closed'}
      >
        <button className={styles.accordionTrigger} aria-expanded={isOpen}>
          <Icon icon="mdi:chevron-down" className={styles.accordionChevron} />
        </button>
        <div className={styles.accordionTitle}>{title}</div>
        <div className={styles.accordionLink}>{link}</div>
        <div className={styles.accordionDescription}>{description}</div>
        {contextMenu && <div className={styles.accordionContextMenu}>{contextMenu}</div>}
      </Toggle>
      {isOpen && (
        <div id={id} ref={contentRef} className={styles.accordionContent} onTransitionEnd={handleTransitionEnd}>
          <div>{children}</div>
        </div>
      )}
    </li>
  );
};

AccordionItem.displayName = 'AccordionItem';

export default AccordionItem;
