/**
 * Generic utility to compose event handlers so that consumers can supply their
 * own event listeners on table components. The default heuristic here is to
 * iterate through the given functions until `preventDefault` is called on the
 * given event.
 *
 * @param {Array<Function|undefined>} fns array of functions to apply to the event
 * @returns {any}
 */
export const composeEventHandlers =
  (fns) =>
  (event, ...args) => {
    for (let i = 0; i < fns.length; i++) {
      if (event.defaultPrevented) {
        break;
      }
      const fn = fns[i];
      if (typeof fn === 'function') {
        fn(event, ...args);
      }
    }
  };
