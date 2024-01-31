import { Icon } from '@iconify/react';
import * as SelectPrimitive from '@radix-ui/react-select';
import clsx from 'clsx';
import React from 'react';
import * as styles from './Select.css';

export interface SelectProps {
  /**
   * Pass in children to be rendered within the Select
   */
  children?: React.ReactNode;

  /**
   * Provide the text that will be read by a screen reader when visiting this
   */
  labelText: React.ReactNode;

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel?: boolean;

  /**
   * The value of the select when initially rendered. Use when you do not need to control the state of the select.
   */
  defaultValue?: string;

  /**
   * The controlled value of the select. Should be used in conjunction with onValueChange.
   */
  value?: string;

  /**
   * Event handler called when the value changes.
   */
  onValueChange?: () => void;

  /**
   * The open state of the select when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultOpen?: boolean;

  /**
   * The controlled open state of the select. Must be used in conjunction with onOpenChange.
   */
  open?: boolean;

  /**
   * Specify a custom `id` for the `<Select>`
   */
  id?: string;

  /**
   * Event handler called when the open state of the select changes.
   */
  onOpenChange?: () => void;

  /** The reading direction of the select when applicable.
   * If omitted, inherits globally from DirectionProvider
   * or assumes LTR (left-to-right) reading mode.
   */
  dir?: 'ltr' | 'rtl';

  /**
   * The name of the select. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;

  /**
   * When true, prevents the user from interacting with select.
   */
  disabled?: boolean;

  /**
   * When true, indicates that the user must select a value before the owning form can be submitted.
   */
  required?: boolean;

  /**
   * Specify the placeholder attribute for the `<select>`
   */
  placeholder?: React.ReactNode;

  /**
   * Set to `true` to use the inline version
   */
  inline?: boolean;

  /**
   * Provide a custom CSS class
   */
  className?: string;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;
}

/** A menu that allows users to choose a single action or option from a list */
export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  ({ children, labelText, hideLabel = false, inline = false, placeholder, id, className, ...props }, forwardedRef) => {
    const selectWrapperClasses = clsx(className, `${styles.wrapper}`, {
      [`${styles.wrapperInline}`]: inline,
    });

    const labelClasses = clsx(`${styles.label}`, {
      [`${styles.visuallyHidden}`]: hideLabel,
      [`${styles.labelInline}`]: inline,
    });

    const label = labelText ? (
      <label htmlFor={id} className={labelClasses}>
        {labelText}
      </label>
    ) : null;

    return (
      <div className={selectWrapperClasses}>
        {label}
        <SelectPrimitive.Root {...props}>
          <SelectPrimitive.Trigger className={`${styles.trigger}`} ref={forwardedRef}>
            <SelectPrimitive.Value placeholder={placeholder} />
            <div className={`${styles.iconWrapper}`}>
              <Icon icon="mdi-chevron-down" />
            </div>
          </SelectPrimitive.Trigger>
          <SelectPrimitive.Portal>
            <SelectPrimitive.Content className={`${styles.content}`} position="popper">
              <SelectPrimitive.ScrollUpButton className={`${styles.selectScrollUpButton}`}>
                <Icon icon="mdi-chevron-up" />
              </SelectPrimitive.ScrollUpButton>
              <SelectPrimitive.Viewport className={`${styles.viewport}`}>{children}</SelectPrimitive.Viewport>
              <SelectPrimitive.ScrollDownButton className={`${styles.selectScrollDownButton}`}>
                <Icon icon="mdi-chevron-down" />
              </SelectPrimitive.ScrollDownButton>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
      </div>
    );
  },
);

Select.displayName = 'Select';

/** Select Item */
export interface SelectItemProps {
  children: React.ReactNode;

  /** The value given as data when submitted with a name. */
  value: string;

  /** Provide a label for the SelectItem group. */
  label?: React.ReactNode;

  /** When true, prevents the user from interacting with the item. */
  disabled?: boolean;

  /** Optional text used for typeahead purposes. By default the
   * typeahead behavior will use the .textContent of the Select.ItemText part.
   * Use this when the content is complex, or you have non-textual content inside.
   */
  textValue?: string;

  /** Provide a custom CSS class */
  className?: string;
}

export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ label, children, ...props }, forwardedRef) => {
    return (
      <SelectPrimitive.Item className={`${styles.item}`} {...props} ref={forwardedRef}>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        <SelectPrimitive.ItemIndicator>
          <Icon icon="mdi-check" />
        </SelectPrimitive.ItemIndicator>
      </SelectPrimitive.Item>
    );
  },
);

SelectItem.displayName = 'SelectItem';
