import { KeyboardEvent, useCallback, useEffect } from 'react';
import { useAccordion } from '../components/accordion/AccordionProvider';
import { keys, match } from '../utilities/keyboard';

interface UseAccordionItemProps {
  id: string;
  open: boolean;
  onHeadingClick?: (isOpen: boolean, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const useAccordionItem = ({ id, open, onHeadingClick }: UseAccordionItemProps) => {
  const { openItemId, setOpenItemId } = useAccordion();

  useEffect(() => {
    if (open) {
      setOpenItemId(id);
    }
  }, [open, id, setOpenItemId]);

  const isOpen = openItemId === id;

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setOpenItemId(isOpen ? null : id);
      if (onHeadingClick) {
        onHeadingClick(!isOpen, event);
      }
    },
    [isOpen, id, onHeadingClick, setOpenItemId],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (isOpen && match(event, keys.Escape)) {
        setOpenItemId(null);
      }
    },
    [isOpen, setOpenItemId],
  );

  return { isOpen, handleClick, handleKeyDown };
};
