import { createBox } from '@dessert-box/react';
import { atoms } from '../../vanilla-extract';

/** Box is a polymorphic component that renders a HTML div element by default. */
const Box = createBox({
  atoms,
});

export default Box;
