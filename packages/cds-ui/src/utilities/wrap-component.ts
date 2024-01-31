import React from 'react';
import clsx from 'clsx';

/**
 * @param {{ name: string, type: string, className?: string }} props
 * @returns
 */
const wrapComponent = ({ name, className: getClassName, type }) => {
  /**
   *
   * @param {{ className?: string, [x: string]: any}} param0
   * @returns
   */
  function Component({ className: baseClassName, ...other }) {
    const componentClass = clsx(typeof getClassName === 'function' ? getClassName() : getClassName, baseClassName);

    return React.createElement(type, {
      ...other,
      // Prevent Weird quirk where `cx` will evaluate to an empty string, '',
      // and so we have empty `class` attributes in the resulting markup
      // eslint-disable-next-line no-extra-boolean-cast
      className: !!componentClass ? componentClass : undefined,
    });
  }

  Component.displayName = name;

  return Component;
};

export default wrapComponent;
