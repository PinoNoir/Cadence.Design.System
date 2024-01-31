import React from 'react';

interface SlotProps extends React.ComponentPropsWithoutRef<'slot'> {
  children: React.ReactNode;
}

const Slot: React.FC<SlotProps> = ({ children }) => <Slot>{children}</Slot>;

export default Slot;
