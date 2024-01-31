/* eslint-disable no-console */
import clsx from 'clsx';
import React, { useCallback, useRef } from 'react';
import { FileStatus, FileValidationErrorType, FileWithStatus } from '../../types/file-status';
import { Button } from '../button';
import { useFileContext } from './FileContext';
import * as styles from './FileUploader.css';

interface FileUploaderProps {
  /**
   * Specify any content to be rendered in the `<FileUploader>`
   * For example, this can be used to render `<FileCard>` components
   */
  children?: React.ReactNode;

  /**
   * Label for the `<FileUploader>` button
   */
  buttonLabel: string;

  /**
   * Specify the description text of the `<FileUploader>`
   */
  labelDescription?: string;

  /**
   * Specify the helper text for the `<FileUploader>`
   */
  helperText: string;

  /**
   * Allow multiple files to be uploaded
   * @default true
   */
  multiple?: boolean;

  /**
   * Specify the types of files that this input should be able to receive
   */
  accept?: string[];

  /**
   * Specify whether the `<FileUploader>` button is disabled
   */
  disabled?: boolean;

  /**
   * Specify the maximum file size allowed
   */
  maxFileSize?: number;

  /**
   * Specify the maximum number of files allowed
   */
  maxFiles?: number;

  /**
   * Callback function for allowing users to add a file to the list of files
   */
  handleFileAdd?: (file: File) => void;

  /**
   * Callback function for allowing users to upload a file
   */
  onUpload?: (file: File) => void;

  /**
   * Callback function for allowing users to open the modal to edit file metadata
   */
  onOpen?: (file: File) => void;

  /**
   * Callback function for when a file is successfully uploaded
   */
  onUploadSuccess?: (file: File, status: FileStatus) => void;

  /**
   * Callback function for when a file upload fails
   */
  onUploadFailure?: (file: File, error: Error) => void;

  /**
   * Callback function for when a file upload is in progress
   */
  onUploadProgress?: (file: File, progress: number) => void;

  /**
   * Callback function for when a file fails validation
   */
  onFileValidationFailure?: (errorType: FileValidationErrorType, fileName?: string) => void;

  /**
   * Callback function for when a file is selected and it has already been uploaded
   */
  onSelectedFileAlreadyUploaded?: (fileName: string) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  children,
  buttonLabel,
  helperText,
  multiple = true,
  accept,
  labelDescription,
  disabled,
  onUpload,
  onUploadProgress,
  onUploadSuccess,
  onUploadFailure,
  onFileValidationFailure,
  onSelectedFileAlreadyUploaded,
  handleFileAdd,
  maxFileSize,
  maxFiles,
  ...props
}) => {
  const { files, addFile, updateFileStatus } = useFileContext();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const fileList = event.target.files;
      if (!fileList) return;

      // Validate the number of files if `maxFiles` is set
      if (maxFiles && (files.length > maxFiles || files.length + files.length > maxFiles)) {
        onFileValidationFailure?.(FileValidationErrorType.MaxNumberOfFilesExceeded);
        return;
      }

      for (let i = 0; i < fileList.length; i++) {
        const file: File = fileList[i]; // Explicitly type the file variable as File

        // Validate the file type if `accept` is set
        if (!isFileTypeAccepted(file, accept)) {
          updateFileStatus(file.name, FileStatus.ValidationFailed);
          onFileValidationFailure?.(FileValidationErrorType.FileTypeNotAccepted, file.name);
          continue;
        }

        // Validate the file size if `maxFileSize` is set
        if (maxFileSize && file.size > maxFileSize) {
          updateFileStatus(file.name, FileStatus.ValidationFailed);
          onFileValidationFailure?.(FileValidationErrorType.FileSizeExceeded, file.name);
          continue;
        }

        // Check if the file is already in the list by name and size
        if (files.some((f) => f.file.name === file.name && f.size === file.size)) {
          onSelectedFileAlreadyUploaded?.(file.name); // Invoke the callback with the fileName
          continue;
        } else {
          addFile(file); // Add the file to the context/state
        }

        // Update file status to 'Uploading'
        updateFileStatus(file.name, FileStatus.Uploading);

        try {
          await onUpload?.(file); // Call the onUpload prop function
          updateFileStatus(file.name, FileStatus.Complete);
          onUploadSuccess?.(file, FileStatus.Complete);
        } catch (error) {
          // On failure, update the file status to 'Failed'
          updateFileStatus(file.name, FileStatus.Failed);
          onUploadFailure?.(file, error as Error);
        }
      }
    },
    [
      files,
      accept,
      maxFileSize,
      maxFiles,
      addFile,
      updateFileStatus,
      onUpload,
      onUploadSuccess,
      onUploadFailure,
      onFileValidationFailure,
      onSelectedFileAlreadyUploaded,
    ],
  );

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const fileList = event.dataTransfer.files;
      if (!fileList) return;

      // Validate the number of files if `maxFiles` is set
      if (maxFiles && fileList.length > maxFiles) {
        console.error(`Only a maximum of ${maxFiles} files can be uploaded.`);
        return;
      }

      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];

        // Validate the file size if `maxFileSize` is set
        if (maxFileSize && file.size > maxFileSize) {
          console.error(`File size should not exceed ${maxFileSize} bytes.`);
          continue;
        }

        addFile(file); // Add the file to the context/state
      }
    },
    [maxFileSize, maxFiles, addFile],
  );

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  /**
   * The File Uploader allows users to upload several
   * different file types/documents to a database from their computer's file system.
   */
  return (
    <div className={styles.fileUploader} {...props}>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className={clsx(styles.fileDropContainer, { [styles.disabled]: disabled })}
        aria-disabled={disabled}
      >
        <Button variant="primary" disabled={disabled} onClick={openFileDialog} style={{ marginRight: '8px' }}>
          {buttonLabel}
        </Button>
        {labelDescription}
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        multiple={multiple}
        accept={accept?.join(',')}
        disabled={disabled}
        style={{ display: 'none' }}
      />
      <p className={styles.fileDescription}>{helperText}</p>
      <div className={styles.fileContainer}>{children}</div>
    </div>
  );
};

// Utility function to check accepted file extensions
const isFileExtensionAccepted = (file: File, accept: string[] | undefined) => {
  if (!accept || accept.length === 0) {
    return true; // If no accept prop is provided, accept all file extensions
  }

  const acceptedExtensions = accept.map((ext) => ext.toLowerCase());

  const fileExtension = file.name.split('.').pop()?.toLowerCase();

  return acceptedExtensions.includes(`.${fileExtension}`);
};

// Updated isFileTypeAccepted function
const isFileTypeAccepted = (file: File, accept: string[] | undefined) => {
  if (!accept || accept.length === 0) {
    return true; // If no accept prop is provided, accept all file types
  }

  return isFileExtensionAccepted(file, accept);
};

export default FileUploader;
