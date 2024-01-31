import { Icon } from '@iconify/react';
import clsx from 'clsx';
import React, { ReactNode, createContext, useEffect, useRef, useState } from 'react';
import mergeRefs from '../../utilities/merge-refs';
import setupGetInstanceId from '../../utilities/setup-get-instance-id';
import { Text } from '../text';
import { RadioButtonProps } from './RadioButton';
import * as styles from './RadioButton.css';

const getInstanceId = setupGetInstanceId();

export const RadioButtonGroupContext = createContext(null);

type ExcludedAttributes = 'onChange';

export interface RadioButtonGroupProps
  extends Omit<React.InputHTMLAttributes<HTMLFieldSetElement>, ExcludedAttributes> {
  /**
   * Provide a collection of `<RadioButton>` components to render in the group
   */
  children?: ReactNode;

  /**
   * Provide an optional className to be applied to the container node
   */
  className?: string;

  /**
   * Specify the `<RadioButton>` to be selected by default
   */
  defaultSelected?: string | number;

  /**
   * Specify whether the group is disabled
   */
  disabled?: boolean;

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText?: ReactNode;

  /**
   * Specify whether the control is currently invalid
   */
  invalid?: boolean;

  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText?: ReactNode;

  /**
   * Provide where label text should be placed
   */
  labelPosition?: keyof typeof styles.labelPosition;

  /**
   * Provide a legend to the RadioButtonGroup input that you are
   * exposing to the user
   */
  legendText?: ReactNode;

  /**
   * Specify the name of the underlying `<input>` nodes
   */
  name: string;

  /**
   * Provide an optional `onChange` hook that is called whenever the value of
   * the group changes
   */
  onChange?: (selection: unknown, name: string, event: unknown) => void;

  /**
   * Provide where radio buttons should be placed
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Whether the RadioButtonGroup should be read-only
   */
  readOnly?: boolean;

  /**
   * Specify whether the control is currently in warning state
   */
  warn?: boolean;

  /**
   * Provide the text that is displayed when the control is in warning state
   */
  warnText?: ReactNode;

  /**
   * Specify the value that is currently selected in the group
   */
  valueSelected?: string | number;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;
}

const RadioButtonGroup = React.forwardRef<HTMLDivElement, RadioButtonGroupProps>(
  (
    {
      children,
      className,
      defaultSelected,
      disabled,
      helperText,
      invalid = false,
      invalidText,
      labelPosition = 'right',
      legendText,
      name,
      onChange,
      orientation = 'horizontal',
      readOnly,
      valueSelected,
      warn = false,
      warnText,
      ...props
    },
    ref,
  ) => {
    const [selected, setSelected] = useState(valueSelected ?? defaultSelected);
    const radioButtonGroupInstanceId = useRef(getInstanceId()).current;
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      setSelected(valueSelected ?? defaultSelected);
    }, [valueSelected, defaultSelected]);

    function handleOnChange(newSelection, value, event) {
      if (!readOnly && newSelection !== selected) {
        setSelected(newSelection);
        onChange?.(newSelection, name, event);
      }
    }

    const getRadioButtons = () =>
      React.Children.map(children, (child) => {
        if (React.isValidElement<RadioButtonProps>(child)) {
          const { value } = child.props;
          return React.cloneElement(child, {
            name: name,
            key: value,
            value: value,
            onChange: handleOnChange,
            checked: value === selected,
          });
        }

        return child;
      });

    const showWarning = !readOnly && !invalid && warn;
    const showHelper = !invalid && !disabled && !warn;

    const wrapperClasses = clsx(styles.formItem, className);

    const fieldsetClasses = clsx(styles.radioButtonGroup, {
      [styles.radioButtonGroupVertical]: orientation === 'vertical',
      [styles.labelPosition[labelPosition]]: labelPosition,
      [styles.radioButtonGroupReadonly]: readOnly,
      [styles.radioButtonGroupInvalid]: invalid,
      [styles.radioButtonGroupWarning]: showWarning,
    });
    const helperId = !helperText ? undefined : `radio-button-group-helper-text-${radioButtonGroupInstanceId}`;

    return (
      <div className={wrapperClasses} ref={mergeRefs(divRef, ref)}>
        <fieldset
          className={fieldsetClasses}
          disabled={disabled}
          data-invalid={invalid ? true : undefined}
          aria-describedby={showHelper && helperText ? helperId : undefined}
          {...props}
        >
          {legendText && (
            <Text as="legend" className={styles.groupLabel}>
              {legendText}
            </Text>
          )}
          {getRadioButtons()}
        </fieldset>
        <ValidationMessage
          readOnly={readOnly}
          invalid={invalid}
          invalidText={invalidText}
          warn={warn}
          warnText={warnText}
        />
        {showHelper && <HelperText helperText={helperText} helperId={helperId} />}
      </div>
    );
  },
);

RadioButtonGroup.displayName = 'RadioButtonGroup';

const HelperText = ({ helperText, helperId }) => (
  <div id={helperId} className={styles.formHelperText}>
    {helperText}
  </div>
);

const ValidationMessage = ({ readOnly, invalid, invalidText, warn, warnText }) => (
  <div className={styles.radioButtonValidationMsg}>
    {!readOnly && invalid && (
      <>
        <Icon icon="mdi:alert-rhombus" className={styles.radioButtonInvalidIcon} />
        <div className={styles.formRequirement}>{invalidText}</div>
      </>
    )}
    {warn && (
      <>
        <Icon icon="mdi:alert" className={clsx(styles.radioButtonInvalidIcon, styles.radioButtonInvalidIconWarning)} />
        <div className={styles.formRequirement}>{warnText}</div>
      </>
    )}
  </div>
);

export default RadioButtonGroup;
