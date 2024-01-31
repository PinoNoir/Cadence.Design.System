export enum FileStatus {
  New,
  Uploading = 'uploading',
  Complete = 'complete',
  Failed = 'failed',
  Downloading = 'downloading',
  Deleted = 'deleted',
  ValidationFailed = 'validationFailed',
}

export enum FileValidationErrorType {
  FileSizeExceeded,
  FileTypeNotAccepted,
  MaxNumberOfFilesExceeded,
}

export interface FileWithStatus {
  file: File;
  status: FileStatus;
  progress: number;
  size: number;
}
