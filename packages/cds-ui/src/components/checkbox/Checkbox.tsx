import { Icon } from '@iconify/react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import React from 'react';
import { Label } from '../label';
import * as styles from './Checkbox.css';

type CheckedState = boolean | 'indeterminate';

export interface CheckboxProps {
  /**
   * Pass in children for the `<Checkbox>`.
   */
  children: React.ReactNode;

  /**
   * Specify a custom id for the `<Checkbox>`.
   */
  id?: string;

  /**
   * If true, the checkbox will have a label.
   */
  hasLabel: boolean;

  /**
   * If true, the checkbox will be initially checked.
   */
  defaultChecked?: CheckedState;

  /**
   * If true, the checkbox will be checked.
   */
  checked?: CheckedState;

  /**
   * Function called when the checkbox is checked or unchecked.
   */
  onCheckedChange?: (checked: CheckedState) => void;

  /**
   * If true, the checkbox will be disabled.
   */
  disabled?: boolean;

  /**
   * If true, the checkbox will be required.
   */
  required?: boolean;

  /**
   * Specify a name for the `<Checkbox>`.
   */
  name?: string;

  /**
   * Specify a value for the `<Checkbox>`.
   */
  value?: string;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;
}

/** Allows users to select one or more options from a number of choices */
const Checkbox = ({
  checked,
  disabled = false,
  onCheckedChange,
  children,
  hasLabel = false,
  ...props
}: CheckboxProps) => {
  return (
    <>
      <RadixCheckbox.Root
        className={styles.checkbox}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        data-qa="checkbox"
        {...props}
      >
        <RadixCheckbox.Indicator>
          <Icon icon="mdi:check" />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      {hasLabel ? (
        <Label className={styles.checkboxLabel} htmlFor="c1">
          {children}
        </Label>
      ) : null}
    </>
  );
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
