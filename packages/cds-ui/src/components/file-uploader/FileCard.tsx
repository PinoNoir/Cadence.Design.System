import { Icon } from '@iconify/react';
import clsx from 'clsx';
import React, { ComponentPropsWithRef, useRef } from 'react';
import { FileStatus, FileWithStatus } from '../../types/file-status';
import { useAutomationId } from '../../utilities/use-automation-id';
import { Dropdown, DropdownMenu, DropdownMenuItem, DropdownTrigger } from '../dropdown';
import { ProgressBar } from '../progress-bar';
import * as styles from './FileCard.css';

interface FileCardProps extends ComponentPropsWithRef<'div'> {
  id?: string;
  children?: React.ReactNode;
  fileWithStatus: FileWithStatus;
  metaData?: string;
  onEdit?: (newFileName: any) => void;
  onDelete?: (file: File) => void;
  onDownload?: (file: File) => void;
  onRetry?: (file: File) => void;
  ['automation-id']?: string;
}

const FileCard: React.FC<FileCardProps> = ({
  id,
  fileWithStatus,
  onEdit,
  onDelete,
  metaData,
  onDownload,
  onRetry,
  ...props
}) => {
  const { file, status, progress, size } = fileWithStatus;
  const showProgressBar = status === FileStatus.Uploading;
  const showErrorMessage = status === FileStatus.Failed || status === FileStatus.ValidationFailed;
  const fileCardRef = useRef(null);
  const autoId = useAutomationId('file-card');

  const getFileSize = (size: number) => {
    if (size < 1024) {
      return size + ' bytes';
    } else if (size >= 1024 && size < 1048576) {
      return (size / 1024).toFixed(1) + ' KB';
    } else if (size >= 1048576) {
      return (size / 1048576).toFixed(1) + ' MB';
    }
  };

  const getFileIcon = (fileName: string): string => {
    const extension = fileName.split('.').pop()?.toLowerCase();

    switch (extension) {
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return 'mdi:image';
      case 'pdf':
        return 'mdi:file-pdf-box';
      case 'doc':
      case 'docx':
        return 'mdi:file-word-box';
      case 'xls':
      case 'xlsx':
        return 'mdi:file-excel-box';
      // Add more cases as needed
      default:
        return 'mdi:file'; // A generic file icon for unknown types
    }
  };

  const getFileTypeIcon = (fileName: string) => {
    const iconName = getFileIcon(fileName);
    const fileExtension = fileName.split('.').pop().toLowerCase();
    return <Icon icon={iconName} width="24px" data-name={fileExtension} className={styles.fileTypeIcon} />;
  };

  const getFileStatusIcon = (status: FileStatus): React.ReactElement => {
    switch (status) {
      case FileStatus.Failed:
      case FileStatus.ValidationFailed:
        return (
          <>
            <Icon icon="mdi:alert-rhombus" width="20px" color="var(--cds-icon-color-error)" />
            <button onClick={handleRetry} className={styles.retryButton}>
              <Icon icon="mdi:reload" width="20px" />
            </button>
          </>
        );
      default:
        return <></>; // Provide a default case to handle any unexpected values
    }
  };

  const handleRetry = () => {
    if (status === FileStatus.Failed || status === FileStatus.ValidationFailed) {
      onRetry(file);
    }
  };

  const handleEdit = () => {
    onEdit(fileWithStatus.file.name);
  };

  const handleDelete = () => {
    onDelete(file);
  };

  const handleDownload = () => {
    onDownload(file);
  };

  const baseStyles = clsx(styles.fileCard),
    cardStyle = clsx(baseStyles, styles[status]);

  return (
    <div className={cardStyle} ref={fileCardRef} id={autoId} data-status={status} automation-id={autoId} {...props}>
      <div className={styles.cardInfoContainer}>
        <span className={styles.fileTypeIcon}>{getFileTypeIcon(file.name)}</span>
        <div className={styles.fileTitle}>{file.name}</div>
        <div className={styles.fileMetaData}>{metaData}</div>
        <div className={styles.fileSize}>{getFileSize(size)}</div>
        <div className={styles.statusIconContainer}>
          <div className={styles.fileStatusIcon}>{getFileStatusIcon(status)}</div>
          <div className={styles.menuContainer}>
            <Dropdown>
              <DropdownTrigger className={styles.menuContainer}>
                <Icon width="24px" icon="mdi:dots-vertical" />
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownMenuItem onSelect={handleEdit}>
                  <Icon icon="mdi:pencil" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={handleDelete}>
                  <Icon icon="mdi:delete" />
                  Delete
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={handleDownload}>
                  <Icon icon="mdi:download" />
                  Download
                </DropdownMenuItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
      {showProgressBar && (
        <div className={styles.fileCardProgressBarContainer}>
          <ProgressBar variant="info" size="sm" value={progress} max={100} showProgress={true} />
        </div>
      )}
      {showErrorMessage && (
        <div className={styles.errorMessageContainer}>
          <span>
            {status === FileStatus.Failed
              ? 'Something went wrong. Please try again.'
              : `${file.type} files are not accepted. Please check the file extension and try again.`}
          </span>
        </div>
      )}
    </div>
  );
};

export default FileCard;
