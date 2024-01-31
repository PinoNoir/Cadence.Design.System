import * as RadixSwitch from '@radix-ui/react-switch';
import React from 'react';
import CdsComponentProps from './../../types/cds-component-props';
import * as styles from './Switch.css';

export interface CustomSwitchProps extends RadixSwitch.SwitchProps, CdsComponentProps {
  /**
   * Specify a unique identifier for the switch.
   */
  id?: string;

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @See {@link https://www.radix-ui.com/primitives/docs/guides/composition} Radix Composition Guide for more details.
   */
  asChild?: boolean;

  /**
   * An optional label that can be rendered above the switch switch
   */
  hasLabel?: boolean;

  /**
   * Switch text label
   */
  label?: React.ReactNode;

  /**
   * The controlled state of the switch. Must be used in conjunction with onCheckedChange.
   */
  checked?: boolean;

  /**
   * The state of the switch when it is initially rendered. Use when you do not need to control its state.
   */
  defaultChecked?: boolean;

  /**
   * Event handler called when the state of the switch changes.
   */
  onCheckedChange?: (checked: boolean) => void;

  /**
   * When true, prevents the user from interacting with the switch.
   */
  disabled?: boolean;

  /**
   * When true, indicates that the user must check the switch before the owning form can be submitted.
   */
  required?: boolean;

  /**
   * The name of the switch. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;

  /**
   * The value given as data when submitted with a name.
   */
  value?: string;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;
}

/**
 * A switch is used to toggle between UI states.
 * Switches should only be used for binary actions and are commonly used as “on/off” switches.
 */
const Switch = ({
  id,
  asChild = false,
  label,
  hasLabel = false,
  checked,
  defaultChecked = false,
  onCheckedChange,
  disabled = false,
  required = false,
  name,
  value,
  ...props
}: CustomSwitchProps) => {
  return (
    <div className={styles.switchBase}>
      {hasLabel ? (
        <div className={styles.switchLabel}>
          <label>{label}</label>
        </div>
      ) : null}
      <RadixSwitch.Root
        id={id}
        className={styles.switchRoot}
        disabled={disabled}
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
        {...props}
      >
        <RadixSwitch.Thumb className={styles.switchThumb} />
      </RadixSwitch.Root>
    </div>
  );
};

Switch.displayName = 'Switch';

export default Switch;
