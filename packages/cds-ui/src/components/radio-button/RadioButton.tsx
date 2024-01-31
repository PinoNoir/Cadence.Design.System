import clsx from 'clsx';
import React, { useRef } from 'react';
import mergeRefs from '../../utilities/merge-refs';
import { useId } from '../../utilities/use-id';
import Text from '../text/Text';
import * as styles from './RadioButton.css';

type ExcludedAttributes = 'onChange';

export interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, ExcludedAttributes> {
  /**
   * Specify whether the `<RadioButton>` is currently checked
   */
  checked?: boolean;

  /**
   * Provide an optional className to be applied to the containing node
   */
  className?: string;

  /**
   * Specify whether the `<RadioButton>` should be checked by default
   */
  defaultChecked?: boolean;

  /**
   * Specify whether the control is disabled
   */
  disabled?: boolean;

  /**
   * Specify whether the label should be hidden, or not
   */
  hideLabel?: boolean;

  /**
   * Provide a unique id for the underlying `<input>` node
   */
  id?: string;

  /**
   * Provide where label text should be placed
   */
  labelPosition?: keyof typeof styles.labelPosition;

  /**
   * Provide label text to be read by screen readers when interacting with the
   * control
   */
  labelText: React.ReactNode;

  /**
   * Provide a name for the underlying `<input>` node
   */
  name?: string;

  /**
   * Provide an optional `onChange` hook that is called each time the value of
   * the underlying `<input>` changes
   */
  onChange?: (value: string | number, name: string | undefined, event: any) => void;

  /**
   * Provide a handler that is invoked when a user clicks on the control
   */
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;

  /**
   * Specify the value of the `<RadioButton>`
   */
  value?: string | number;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;
}

const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      className,
      disabled,
      hideLabel,
      id,
      labelPosition,
      labelText = '',
      checked,
      name,
      onClick,
      onChange,
      value = '',
      ...props
    },
    forwardedRef,
  ) => {
    const uid = useId('radio-button');
    const uniqueId = id || uid;

    function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
      if (onChange) {
        onChange(value, name, event);
      }
    }

    const wrapperClasses = clsx(styles.radioButtonWrapper, {
      [styles.labelPosition[labelPosition]]: labelPosition === 'right',
    });

    const innerLabelClasses = clsx(styles.radioButtonLabelText, {
      [styles.visuallyHidden]: hideLabel,
    });

    const inputRef = useRef<HTMLInputElement>(null);

    return (
      <div className={wrapperClasses}>
        <input
          {...props}
          type="radio"
          className={styles.radioButton}
          onChange={handleOnChange}
          id={uniqueId}
          ref={mergeRefs(inputRef, forwardedRef)}
          disabled={disabled}
          value={value}
          name={name}
          checked={checked}
        />
        <label htmlFor={uniqueId} className={styles.radioButtonLabel}>
          <span className={styles.radioButtonAppearance} />
          {labelText && (
            <Text as="span" className={innerLabelClasses}>
              {labelText}
            </Text>
          )}
        </label>
      </div>
    );
  },
);

RadioButton.displayName = 'RadioButton';

export default RadioButton;
