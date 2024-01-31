import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import * as styles from './Accordion.css';
import { AccordionProvider } from './AccordionProvider';

export interface AccordionProps {
  /**
   * Specify an optional className to be applied to
   * the container node.
   */
  className?: string;

  /**
   * Specify whether an individual AccordionItem
   * should be disabled.
   */
  disabled?: boolean;

  /**
   * The color mode of the accordion.
   */
  colorMode?: 'light' | 'dark';
}

/**
 * The accordion component is used to display a list of items that can be
 * expanded or collapsed to show or hide additional content.
 */
const Accordion: React.FC<PropsWithChildren<AccordionProps>> = ({
  className,
  children,
  disabled = false,
  colorMode = 'light',
  ...props
}) => {
  const containerClasses = clsx(styles.accordionContainer, {
    [styles.dark]: colorMode === 'dark',
  });

  return (
    <AccordionProvider disabled={disabled}>
      <ul className={clsx(containerClasses, className)} {...props}>
        {children}
      </ul>
    </AccordionProvider>
  );
};

Accordion.displayName = 'Accordion';

export default Accordion;
