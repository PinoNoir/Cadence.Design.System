import clsx from 'clsx';
import React from 'react';
import { useAnnouncer } from '../../utilities/use-announcer';
import { useNormalizedInputProps } from '../../utilities/use-normalized-input-props';
import * as styles from './TextInput.css';
import { textInputProps } from './util';

type ExcludedAttributes = 'defaultValue' | 'id' | 'value';

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, ExcludedAttributes> {
  /**
   * Specify an optional className to be applied to the `<input>` node
   */
  className?: string;

  /**
   * Optionally provide the default value of the `<input>`
   */
  defaultValue?: string | number;

  /**
   * Specify whether the `<input>` should be disabled
   */
  disabled?: boolean;

  /**
   * Specify whether to display the character counter
   */
  enableCounter?: boolean;

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText?: React.ReactNode;

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel?: boolean;

  /**
   * Specify a custom `id` for the `<input>`
   */
  id: string;

  /**
   * `true` to use the inline version
   */
  inline?: boolean;

  /**
   * Specify whether the control is currently invalid
   */
  invalid?: boolean;

  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText?: React.ReactNode;

  /**
   * Provide the text that will be read by a screen reader when visiting this
   */
  labelText: React.ReactNode;

  /**
   * Max character count allowed for the input. This is needed in order for enableCounter to display
   */
  maxCount?: number;

  /**
   * Optionally provide an `onChange` handler that is called whenever `<input>` is updated
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Optionally provide an `onClick` handler that is called whenever the `<input>` is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;

  /**
   * Specify the placeholder attribute for the `<input>`
   */
  placeholder?: string;

  /**
   * Whether the input should be read-only
   */
  readOnly?: boolean;

  /**
   * Specify the type of the `<input>`
   */
  type?: string;

  /**
   * Specify the value of the `<input>`
   */
  value?: string | number | undefined;

  /**
   * Specify whether the control is currently in warning state
   */
  warn?: boolean;

  /**
   * Provide the text that is displayed when the control is in warning state
   */
  warnText?: React.ReactNode;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;
}

/** Text input allow users to input, edit, and select text or numeric values.
 * Text fields validate input, provide suggestions, and help users fix errors.
 */
const TextInput = React.forwardRef(function TextInput(
  {
    className,
    disabled = false,
    helperText,
    hideLabel,
    id,
    inline = false,
    invalid = false,
    invalidText,
    labelText,
    onChange = () => {},
    onClick = () => {},
    placeholder,
    readOnly,
    type = 'text',
    warn = false,
    warnText,
    enableCounter = false,
    maxCount,
    ...props
  }: TextInputProps,
  ref,
) {
  const { defaultValue, value } = props;
  const [textCount, setTextCount] = React.useState(defaultValue?.toString().length || value?.toString().length || 0);

  const normalizedProps = useNormalizedInputProps({
    id,
    readOnly,
    disabled,
    invalid,
    invalidText,
    warn,
    warnText,
  });

  const textInputClasses = clsx(`${styles.textInput}`, {
    [`${styles.textInputInvalid}`]: normalizedProps.invalid,
    [`${styles.textInputWarning}`]: normalizedProps.warn,
  });

  const sharedTextInputProps = {
    id,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!normalizedProps.disabled) {
        setTextCount(event.target.value?.length);
        onChange(event);
      }
    },
    onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (!normalizedProps.disabled) {
        onClick(event);
      }
    },
    placeholder,
    type,
    ref,
    className: textInputClasses,
    title: placeholder,
    disabled: normalizedProps.disabled,
    readOnly,
    ['aria-describedby']: helperText && normalizedProps.helperId,
    ...props,
  };

  if (enableCounter) {
    sharedTextInputProps.maxLength = maxCount;
  }

  const inputWrapperClasses = clsx(className, `${styles.formItem}`, `${styles.textInputWrapper}`, {
    [`${styles.textInputWrapperInline}`]: inline,
    [`${styles.textInputWrapperInlineInvalid}`]: inline && normalizedProps.invalid,
  });
  const labelClasses = clsx(`${styles.label}`, {
    [`${styles.visuallyHidden}`]: hideLabel,
    [`${styles.labelInline}`]: inline,
  });
  const helperTextClasses = clsx(`${styles.formHelperText}`, {
    [`${styles.formHelperTextDisabled}`]: normalizedProps.disabled,
    [`${styles.formHelperTextInline}`]: inline,
  });
  const fieldOuterWrapperClasses = clsx(`${styles.textInputFieldOuterWrapper}`, {
    [`${styles.textInputFieldOuterWrapperInline}`]: inline,
  });
  const fieldWrapperClasses = clsx(`${styles.textInputFieldWrapper}`, {
    [`${styles.textInputFieldWrapperWarning}`]: normalizedProps.warn,
    [`${styles.textInputFieldWrapperInvalid}`]: normalizedProps.invalid,
  });
  const counterClasses = clsx(`${styles.label}`, {
    [`${styles.labelDisabled}`]: disabled,
    [`${styles.textInputLabelCounter}`]: true,
  });

  const counter = enableCounter && maxCount ? <div className={counterClasses}>{`${textCount}/${maxCount}`}</div> : null;

  const label = labelText ? (
    <label htmlFor={id} className={labelClasses}>
      {labelText}
    </label>
  ) : null;

  const labelWrapper = (
    <div className={`${styles.textInputLabelWrapper}`}>
      {label}
      {counter}
    </div>
  );

  const helper = helperText ? (
    <div id={normalizedProps.helperId} className={helperTextClasses}>
      {helperText}
    </div>
  ) : null;

  const input = (
    <input
      {...textInputProps({
        sharedTextInputProps,
        invalid: normalizedProps.invalid,
        invalidId: normalizedProps.invalidId,
        warn: normalizedProps.warn,
        warnId: normalizedProps.warnId,
      })}
    />
  );

  const ariaAnnouncement = useAnnouncer(textCount, maxCount);
  const Icon = normalizedProps.icon as any;

  return (
    <div className={inputWrapperClasses}>
      {!inline ? (
        labelWrapper
      ) : (
        <div className={`${styles.textInputLabelHelperWrapper}`}>
          {labelWrapper}
          {normalizedProps.validation || helper}
        </div>
      )}
      <div className={fieldOuterWrapperClasses}>
        <div className={fieldWrapperClasses} data-invalid={normalizedProps.invalid || null}>
          {Icon}
          {input}
          <span className={`${styles.textInputCounterAlert}`} role="alert">
            {ariaAnnouncement}
          </span>
          {inline ? normalizedProps.validation : false}
        </div>
        {!inline && (normalizedProps.validation || helper)}
      </div>
    </div>
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;
