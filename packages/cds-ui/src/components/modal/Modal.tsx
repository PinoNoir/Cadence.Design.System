import { Icon } from '@iconify/react';
import * as Dialog from '@radix-ui/react-dialog';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import React, { Fragment } from 'react';
import { Box } from '../box';
import { Button } from '../button';
import { ModalBody, ModalClose, ModalFooter, ModalOverlay, ModalTitle, ModalVariants, modalRecipe } from './Modal.css';

interface ModalProps extends Dialog.DialogProps {
  /**
   * Specify the title for the modal
   */
  title: string;

  /**
   * Pass in children to the modal
   */
  children: React.ReactNode;

  /**
   * Specify modal width
   */
  width?: ModalVariants['width'];

  /**
   * Specify a custom CSS class for the parent element
   */
  className?: string;

  /**
   * Specify an array of buttons to be rendered in the footer
   */
  buttons: React.ReactNode[];

  /**
   * Specify the label for the close button
   */
  closeButtonLabel?: string;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;

  /**
   * Optionally specify an onClose handler
   */
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  className,
  title,
  children,
  width,
  buttons,
  closeButtonLabel = 'Cancel',
  ...props
}) => {
  return (
    <Dialog.Root modal {...props}>
      <Dialog.Trigger asChild>
        <Button variant="primary">Click Me!</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={`${ModalOverlay}`} />
        <Dialog.Content className={clsx(className, modalRecipe({ width }))}>
          <Dialog.Close className={`${ModalClose}`} asChild>
            <Icon icon="mdi:close" width="24px" aria-label="Close" />
          </Dialog.Close>
          <Dialog.Title className={`${ModalTitle}`}>{title}</Dialog.Title>
          <Dialog.Description className={`${ModalBody}`}>{children}</Dialog.Description>
          <Slot className={`${ModalFooter}`}>
            <footer>
              <Box display="flex" gap="24px" justifyContent="flex-end" flexWrap="wrap">
                {buttons?.map((buttons, index) => {
                  return <Fragment key={index}>{buttons}</Fragment>;
                })}
                <Dialog.Close asChild>
                  <Button variant="secondary">{closeButtonLabel}</Button>
                </Dialog.Close>
              </Box>
            </footer>
          </Slot>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

Modal.displayName = 'Modal';

export default Modal;
