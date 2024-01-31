/**
 * @typedef Key
 * @property key {Array<string>|string}
 * @property which {number}
 * @property keyCode {number}
 */

/**
 * Check to see if at least one key code matches the key code of the
 * given event.
 *
 * @example
 * import * as keys from '../keys';
 * import { matches } from '../match';
 *
 * function handleOnKeyDown(event) {
 *   if (matches(event, [keys.Enter, keys.Space]) {
 *     // ...
 *   }
 * }
 *
 * @param {Event|React.SyntheticEvent} event
 * @param {Array<Key>} keysToMatch
 * @returns {boolean}
 */
export function matches(event, keysToMatch) {
  for (let i = 0; i < keysToMatch.length; i++) {
    if (match(event, keysToMatch[i])) {
      return true;
    }
  }
  return false;
}

/**
 * Check to see if the given key matches the corresponding keyboard event. Also
 * supports passing in the value directly if you can't used the given event.
 *
 * @example
 * import * as keys from '../keys';
 * import { matches } from '../match';
 *
 * function handleOnKeyDown(event) {
 *   if (match(event, keys.Enter) {
 *     // ...
 *   }
 * }
 *
 * @param {React.SyntheticEvent|Event|number|string} eventOrCode
 * @param {Key} key
 * @returns {boolean}
 */
export function match(eventOrCode, { key = null, which = null, keyCode = null, code = null } = {}) {
  if (typeof eventOrCode === 'string') {
    return eventOrCode === key;
  }

  if (typeof eventOrCode === 'number') {
    return eventOrCode === which || eventOrCode === keyCode;
  }

  if (eventOrCode.key && Array.isArray(key)) {
    return key.indexOf(eventOrCode.key) !== -1;
  }

  return (
    eventOrCode.key === key ||
    eventOrCode.which === which ||
    eventOrCode.keyCode === keyCode ||
    eventOrCode.code === code
  );
}

/**
 * Get a string character for a given event or event code (useful for synthetic
 * events)
 *
 * @param {Event|number} eventOrCode
 * @returns {string}
 */
export function getCharacterFor(eventOrCode) {
  if (typeof eventOrCode === 'number') {
    return String.fromCharCode(eventOrCode);
  }

  return eventOrCode.key || String.fromCharCode(eventOrCode.which || eventOrCode.keyCode);
}
