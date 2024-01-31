import { Icon } from '@iconify/react';
import clsx from 'clsx';
import React, {
  HTMLAttributes,
  memo,
  useRef,
  useState,
  type ComponentType,
  type KeyboardEvent,
  type MouseEvent,
} from 'react';
import { composeEventHandlers } from '../../utilities/events';
import { focus } from '../../utilities/focus';
import { keys, match } from '../../utilities/keyboard';
import { useId } from '../../utilities/use-id';
import { useMergedRefs } from './../../utilities/use-merged-refs';
import * as styles from './Search.css';
import { SearchInputVariants, searchInputRecipe } from './Search.css';

type InputPropsBase = Omit<HTMLAttributes<HTMLInputElement>, 'onChange'>;

export interface SearchProps extends InputPropsBase {
  /**
   * Specify an optional value for the `autocomplete` property on the underlying `<input>`, defaults to "off"
   */
  borderRadius?: SearchInputVariants['borderRadius'];

  /**
   * Specify an optional variant
   */
  variant?: SearchInputVariants['variant'];

  /**
   * Specify an optional value for the `autocomplete` property on the underlying `<input>`, defaults to "off"
   */
  autoComplete?: string;

  /**
   * Specify an optional className to be applied to the container node
   */
  className?: string;

  /**
   * Specify a label to be read by screen readers on the "close" button
   */
  closeButtonLabelText?: string;

  /**
   * Optionally provide the default value of the `<input>`
   */
  defaultValue?: string | number;

  /**
   * Specify whether the `<input>` should be disabled
   */
  disabled?: boolean;

  /**
   * Specify whether or not ExpandableSearch should render expanded or not
   */
  isExpanded?: boolean;

  /**
   * Specify a custom `id` for the input
   */
  id?: string;

  /**
   * Provide the label text for the Search icon
   */
  labelText: React.ReactNode;

  /**
   * Optional callback called when the search value changes.
   */
  onChange?(event: { target: HTMLInputElement; type: 'change' }): void;

  /**
   * Optional callback called when the search value is cleared.
   */
  onClear?(): void;

  /**
   * Optional callback called when the magnifier icon is clicked in ExpandableSearch
   */
  onExpand?(event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>): void;

  /**
   * Provide an optional placeholder text for the Search. Note: if the label and placeholder differ, VoiceOver on Mac will read both
   */
  placeholder?: string;

  /**
   * Rendered icon for the Search. Can be a React component class
   */
  renderIcon?: ComponentType | React.ReactNode;

  /**
   * Specify the role for the underlying `<input>`, defaults to `searchbox`
   */
  role?: string;

  /**
   * Optional prop to specify the type of the `<input>`
   */
  type?: string;

  /**
   * Specify the value of the `<input>`
   */
  value?: string | number;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;
}

const Search = React.forwardRef<HTMLInputElement, SearchProps>(function Search(
  {
    borderRadius = 'default',
    variant = 'default',
    autoComplete = 'off',
    className,
    closeButtonLabelText = 'Clear search input',
    defaultValue,
    disabled,
    isExpanded = true,
    id,
    labelText,
    onChange = () => {},
    onClear = () => {},
    onExpand,
    placeholder = 'Search',
    renderIcon,
    role = 'searchbox',
    type = 'text',
    value,
    ...props
  },
  forwardRef,
) {
  const hasPropValue = value || defaultValue ? true : false;
  const inputRef = useRef<HTMLInputElement>(null);
  const ref = useMergedRefs<HTMLInputElement>([forwardRef, inputRef]);
  const expandButtonRef = useRef<HTMLDivElement>(null);
  const inputId = useId('search-input');
  const uniqueId = id || inputId;
  const searchId = `${uniqueId}-search`;
  const [hasContent, setHasContent] = useState(hasPropValue || false);
  const [prevValue, setPrevValue] = useState(value);
  const searchClasses = clsx(
    {
      [`${styles.search}`]: true,
      [`${styles.searchDisabled}`]: disabled,
    },
    className,
  );

  const clearClasses = clsx({
    [`${styles.searchClose}`]: true,
    [`${styles.searchCloseHidden}`]: !hasContent || !isExpanded,
  });

  if (value !== prevValue) {
    setHasContent(!!value);
    setPrevValue(value);
  }

  function clearInput() {
    if (!value && inputRef.current) {
      inputRef.current.value = '';
    }

    const inputTarget = Object.assign({}, inputRef.current, { value: '' });
    const clearedEvt = { target: inputTarget, type: 'change' } as const;

    onChange(clearedEvt);
    onClear();
    setHasContent(false);
    focus(inputRef);
  }

  function handleChange(event: { target: { value: string } }) {
    setHasContent(event.target.value !== '');
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (match(event, keys.Escape)) {
      event.stopPropagation();
      if (inputRef.current?.value) {
        clearInput();
      }
      // ExpandableSearch closes on escape when isExpanded, focus search activation button
      else if (onExpand && isExpanded) {
        expandButtonRef.current?.focus();
      }
    }
  }

  function handleExpandButtonKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (match(event, keys.Enter) || match(event, keys.Space)) {
      event.stopPropagation();
      if (onExpand) {
        onExpand(event);
      }
    }
  }

  return (
    <div role="search" aria-label={placeholder} className={`${searchClasses}`}>
      <div
        className={`${styles.searchMagnifier}`}
        aria-labelledby={onExpand ? uniqueId : undefined}
        role={onExpand ? 'button' : undefined}
        onClick={onExpand}
        onKeyDown={handleExpandButtonKeyDown}
        tabIndex={onExpand && !isExpanded ? 1 : -1}
        ref={expandButtonRef}
        aria-expanded={onExpand && isExpanded ? true : undefined}
        aria-controls={onExpand ? uniqueId : undefined}
      >
        <Icon icon="mdi:magnify" />
      </div>
      <label id={searchId} htmlFor={uniqueId} className={styles.searchLabel}>
        {labelText}
      </label>
      <input
        autoComplete={autoComplete}
        className={clsx(className, searchInputRecipe({ variant, borderRadius }))}
        defaultValue={defaultValue}
        disabled={disabled}
        role={role}
        ref={ref}
        id={uniqueId}
        onChange={composeEventHandlers([onChange, handleChange])}
        onKeyDown={composeEventHandlers([handleKeyDown])}
        placeholder={placeholder}
        type={type}
        value={value}
        tabIndex={onExpand && !isExpanded ? -1 : undefined}
        {...props}
      />
      <button
        aria-label={closeButtonLabelText}
        className={clearClasses}
        disabled={disabled}
        onClick={clearInput}
        title={closeButtonLabelText}
        type="button"
      >
        <Icon icon="mdi:close" />
      </button>
    </div>
  );
});

Search.displayName = 'Search';

export default memo(Search);
