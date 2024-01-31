import { Ref } from 'react';

/**
 * @param {...Ref<Element>} refs List of React refs to merge.
 * @returns {Ref<Element>} Merged React ref.
 */
const mergeRefs =
  (...refs) =>
  (el) => {
    refs.forEach((ref) => {
      // https://github.com/facebook/react/issues/13029#issuecomment-410002316
      if (typeof ref === 'function') {
        ref(el);
      } else if (Object(ref) === ref) {
        ref.current = el;
      }
    });
  };

export default mergeRefs;
