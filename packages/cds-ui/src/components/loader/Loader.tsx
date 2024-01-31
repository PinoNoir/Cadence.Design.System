import clsx from 'clsx';
import React, { useMemo } from 'react';
import { ReactAttr } from '../../types/common';
import * as styles from './Loader.css';

export interface LoaderProps extends ReactAttr<HTMLDivElement> {
  /**
   * Specify whether you want the loading indicator to be spinning or not
   */
  active?: boolean;

  /**
   * Provide an optional className to be applied to the containing node
   */
  className?: string;

  /**
   * Specify a description that would be used to best describe the loading state
   */
  description?: string;

  /**
   * Specify whether you would like the small variant of `<Loading>`
   */
  small?: boolean;

  /**
   * Specify whether you want the loader to be applied with an overlay
   */
  withOverlay: boolean;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;
}

const Loader: React.FC<LoaderProps> = ({
  active = true,
  className,
  withOverlay = true,
  small = false,
  description = 'loading',
  ...props
}) => {
  const loadingClassName = useMemo(() => {
    return clsx(styles.base, {
      [styles.loader]: true,
      [styles.small]: small,
      [styles.loadingStop]: !active,
    });
  }, [small, active]);

  const overlayClassName = useMemo(() => {
    return clsx({
      [styles.loadingOverlay]: true,
      [styles.loadingOverlayStop]: !active,
    });
  }, [active]);

  const loader = useMemo(
    () => (
      <div {...props} aria-atomic="true" aria-live={active ? 'assertive' : 'off'} className={loadingClassName}>
        <svg viewBox="0 0 100 100" className={styles.loadingSvg}>
          <title>{description}</title>
          <circle className={styles.loadingStroke} cx="50" cy="50" r="44" />
        </svg>
      </div>
    ),
    [active, description, props, loadingClassName],
  );

  return withOverlay ? <div className={overlayClassName}>{loader}</div> : loader;
};

export default React.memo(Loader);
