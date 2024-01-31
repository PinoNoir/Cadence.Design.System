import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import React, { createContext, useContext, useEffect, useState } from 'react';
import * as Styles from './Dropdown.css';

const DropdownContext = createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  open: false,
  setOpen: () => {},
});

interface DropdownProps {
  /**
   * Pass in the children for the `<Dropdown>`
   */
  children: React.ReactNode;

  /**
   * Optionally specify a custom CSS class to the `<Dropdown>`
   */
  className?: string;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;
}

/** A menu that allows users to choose a single action or option from a list */
export function Dropdown({ children, className, ...props }: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <RadixDropdownMenu.Root open={open} onOpenChange={setOpen} {...props}>
        {children}
      </RadixDropdownMenu.Root>
    </DropdownContext.Provider>
  );
}

Dropdown.displayName = 'Dropdown';

export default Dropdown;

interface DropdownTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function DropdownTrigger({ children, className }: DropdownTriggerProps) {
  return (
    <RadixDropdownMenu.Trigger className={clsx(className, `${Styles.DropdownTrigger}`)}>
      {children}
    </RadixDropdownMenu.Trigger>
  );
}

DropdownTrigger.displayName = 'DropdownTrigger';

const DropdownMenuContext = createContext({ closeMenu: () => {} });

export function DropdownMenu({ children }: { children: React.ReactNode }) {
  const { open, setOpen } = useContext(DropdownContext);
  const controls = useAnimationControls();

  async function closeMenu() {
    await controls.start('closed');
    setOpen(false);
  }

  useEffect(() => {
    if (open) {
      void controls.start('open');
    }
  }, [controls, open]);

  return (
    <DropdownMenuContext.Provider value={{ closeMenu }}>
      <AnimatePresence>
        {open && (
          <RadixDropdownMenu.Portal forceMount>
            <RadixDropdownMenu.Content align="start" className={`${Styles.DropdownMenuContent}`} asChild>
              <motion.div
                initial="closed"
                animate={controls}
                exit="closed"
                variants={{
                  open: {
                    opacity: 1,
                    transition: { ease: 'easeOut', duration: 0.1 },
                  },
                  closed: {
                    opacity: 0,
                    transition: { ease: 'easeIn', duration: 0.2 },
                  },
                }}
              >
                {children}
              </motion.div>
            </RadixDropdownMenu.Content>
          </RadixDropdownMenu.Portal>
        )}
      </AnimatePresence>
    </DropdownMenuContext.Provider>
  );
}

DropdownMenu.displayName = 'DropdownMenu';

export function DropdownMenuItem({
  children,
  onSelect = () => {},
}: {
  children: React.ReactNode;
  onSelect?: () => void;
}) {
  const controls = useAnimationControls();
  const { closeMenu } = useContext(DropdownMenuContext);

  return (
    <RadixDropdownMenu.Item
      onSelect={async (e) => {
        e.preventDefault();

        await controls.start({
          backgroundColor: '#fff',
          color: '#000',
          transition: { duration: 0.05 },
        });
        await controls.start({
          backgroundColor: '#029b97',
          color: '#fff',
          transition: { duration: 0.05 },
        });
        await sleep(0.075);

        closeMenu();
        onSelect();
      }}
      className={`${Styles.DropdownMenuItem}`}
      asChild
    >
      <motion.div animate={controls}>{children}</motion.div>
    </RadixDropdownMenu.Item>
  );
}

DropdownMenuItem.displayName = 'DropdownMenuItem';

const sleep = (s: number) => new Promise((resolve) => setTimeout(resolve, s * 1000));
