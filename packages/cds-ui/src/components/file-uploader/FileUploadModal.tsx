import { Icon } from '@iconify/react';
import clsx from 'clsx';
import React, { ComponentPropsWithoutRef, useEffect, useRef } from 'react';
import { Box } from '../box';
import { Button } from '../button';
import * as styles from '../modal/Modal.css';

interface FileUploadModalProps extends ComponentPropsWithoutRef<'dialog'> {
  children: React.ReactNode;
  title: string;
  fileUploads?: number;
  open: boolean;
  onClose: () => void;
  initialFileName: string;
  onSave: () => void;
  ['automation-id']?: string;
}

const FileUploadModal: React.FC<FileUploadModalProps> = ({ children, title, fileUploads, open, onClose, onSave }) => {
  const firstFocusableElement = useRef(null); // Ref for the first focusable element in the modal
  const modalRef = useRef(null); // Ref for the modal container

  // Focus management and Escape key handling
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (open) {
      firstFocusableElement.current?.focus(); // Set focus to the first focusable element
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  // Function to handle focus trap inside the modal
  const handleTabKey = (e) => {
    const focusableModalElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableModalElements[0];
    const lastElement = focusableModalElements[focusableModalElements.length - 1];

    if (!e.shiftKey && document.activeElement === lastElement) {
      firstElement.focus();
      return e.preventDefault();
    }

    if (e.shiftKey && document.activeElement === firstElement) {
      lastElement.focus();
      e.preventDefault();
    }
  };

  if (!open) return null;

  const titleWithUploads = fileUploads !== undefined ? `${title} (${fileUploads})` : title;

  return (
    <div id="metaTagModal" className={styles.ModalOverlay}>
      <dialog
        className={clsx(styles.modalRecipe({ width: 'medium' }))}
        open={open}
        aria-modal="true"
        aria-labelledby="modalTitle"
        ref={modalRef}
        onKeyDown={handleTabKey}
      >
        <span id="modalTitle" className={styles.ModalTitle}>
          {titleWithUploads}
        </span>
        <button id="closeMetaTagModal" className={styles.ModalClose} onClick={onClose} ref={firstFocusableElement}>
          <Icon icon="mdi:close" width="24px" aria-label="Close" />
        </button>
        <div className={styles.ModalBody}>{children}</div>
        <footer className={styles.ModalFooter}>
          <Box display={'flex'} gap={'24px'} justifyContent={'flex-end'} flexWrap={'wrap'}>
            <Button variant="primary" onClick={onSave}>
              Save
            </Button>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
          </Box>
        </footer>
      </dialog>
    </div>
  );
};

export default FileUploadModal;
