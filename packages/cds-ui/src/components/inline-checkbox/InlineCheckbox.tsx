/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { HTMLAttributes, forwardRef, useRef } from 'react';
import { useMergedRefs } from '../../utilities/use-merged-refs';
import * as styles from '../data-table/styles/DataTable.css';

export interface InlineCheckboxProps extends HTMLAttributes<HTMLInputElement> {
  /**
   * Specify the aria-label for the checkbox
   */
  ['aria-label']: string;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;

  /**
   * Specify the id for the checkbox
   */
  id: string;

  /**
   * Specify the title for the checkbox
   */
  title?: string;

  /**
   * Specify whether the checkbox is checked
   */
  checked?: boolean;

  /**
   * Specify whether the checkbox is disabled
   */
  disabled?: boolean;

  /**
   * Specify whether the checkbox is indeterminate
   */
  indeterminate?: boolean;

  /**
   * Specify the name for the checkbox
   */
  name: string;

  /**
   * Specify the onChange function for the checkbox
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Specify the onClick function for the checkbox
   */
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const InlineCheckbox = forwardRef<HTMLInputElement, InlineCheckboxProps>(
  ({ 'aria-label': ariaLabel, checked, onChange = () => {}, ...otherProps }, forwardRef) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const ref = useMergedRefs([inputRef, forwardRef]);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event);
      }
    };

    return (
      <div className={styles.checkboxInline}>
        <input
          {...otherProps}
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
          ref={ref}
          aria-label={ariaLabel}
        />
        <label
          htmlFor={otherProps.id}
          className={styles.checkboxLabel}
          title={otherProps.title}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <span className={styles.visuallyHidden}>{ariaLabel}</span>
        </label>
      </div>
    );
  },
);

InlineCheckbox.displayName = 'InlineCheckbox';

export default InlineCheckbox;
