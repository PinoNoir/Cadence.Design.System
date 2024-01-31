import clsx from 'clsx';
import { animate, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import CdsComponent from '../../types/cds-component';
import CdsComponentProps from '../../types/cds-component-props';
import * as styles from './ProgressBar.css';
import { ProgressBarRecipe, ProgressBarVariants } from './ProgressBar.css';

export interface ProgressBarProps extends CdsComponentProps {
  /**
   * Set the progress bar style.
   */
  variant: ProgressBarVariants['variant'];

  /**
   * Set the state of the progress bar.
   */
  state?: boolean | ('determinate' | 'indeterminate');

  /**
   * The progress bar starting value.
   */
  min?: number;

  /**
   * The progress bar ending value.
   */
  max: number;

  /**
   * The progress bar current value.
   */
  value: number;

  /**
   * Set external styling to the progress bar.
   */
  className?: string;

  /**
   * Determine the progress bar height
   */
  size?: ProgressBarVariants['size'];

  /**
   * Show progress bar progression in percentages
   */
  showProgress?: boolean;

  /**
   * ARIA description for the progress bar
   */
  ['aria-label']?: string;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;
}

const ProgressBar: CdsComponent<ProgressBarProps, HTMLDivElement> = React.forwardRef(
  (
    { variant, size = 'md', state = 'determinate', id, value, min = 0, max = 100, className, showProgress, ...props },
    forwardedRef,
  ) => {
    const progressTextRef = useRef<HTMLSpanElement>(null);
    const shouldAnimate = value < 100;

    useEffect(() => {
      if (showProgress && progressTextRef.current) {
        animate(0, value, {
          duration: 0.5,
          onUpdate: (cv) => {
            if (progressTextRef.current) {
              progressTextRef.current.textContent = cv.toFixed(0);
            }
          },
        });
      }
    }, [value, showProgress]);

    return (
      <div className={styles.progressBarContainer}>
        <div
          {...props}
          ref={forwardedRef}
          aria-roledescription="progress bar"
          aria-label={id}
          className={styles.progressBar}
        >
          <motion.div
            className={clsx(
              className,
              ProgressBarRecipe({ variant, size }),
              shouldAnimate ? styles.base : styles.stopAnimation,
            )}
            animate={{ width: `${value}%` }}
            transition={{ ease: 'easeOut', duration: 0.65 }}
          />
        </div>
        {showProgress !== false && ( // Conditionally render this block
          <div className={styles.progressBarTextContainer}>
            <span ref={progressTextRef}>0</span>
            <span>%</span>
          </div>
        )}
      </div>
    );
  },
);

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
