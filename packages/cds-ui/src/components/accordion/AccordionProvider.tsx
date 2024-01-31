import { PropsWithChildren, createContext, useContext, useState } from 'react';

type AccordionContextType = {
  disabled: boolean;
  openItemId: string | null;
  setOpenItemId: (id: string | null) => void;
};

// Define a separate type for AccordionProvider's props
type AccordionProviderProps = PropsWithChildren<{
  disabled: boolean;
}>;

export const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

export const AccordionProvider = ({ children, disabled }: AccordionProviderProps) => {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  return (
    <AccordionContext.Provider value={{ openItemId, setOpenItemId, disabled }}>{children}</AccordionContext.Provider>
  );
};

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordion must be used within a AccordionProvider');
  }
  return context;
};
