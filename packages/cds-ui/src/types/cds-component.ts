import React from 'react';

type CdsComponent<T, P = HTMLElement> = React.ForwardRefExoticComponent<T & React.RefAttributes<P>>;

export default CdsComponent;
