import { useEffect } from 'react';
import { FileStatus, FileWithStatus } from '../types/file-status';

const useFileUploadSimulation = (
  files: any,
  updateFileProgress: any,
  updateFileStatus: any,
  simulateFailureForFile = '',
  intervalDuration = 1000,
) => {
  useEffect(() => {
    const interval = setInterval(() => {
      files.forEach((fileWithStatus: FileWithStatus) => {
        if (fileWithStatus.status === FileStatus.Uploading) {
          const newProgress = Math.min(fileWithStatus.progress + 10, 100);
          updateFileProgress(fileWithStatus.file.name, newProgress);

          // Simulate a successful upload
          if (newProgress === 100) {
            updateFileStatus(fileWithStatus.file.name, FileStatus.Complete);
          }

          // Optionally, you can simulate a failed upload for some files
          if (fileWithStatus.file.name === simulateFailureForFile && newProgress >= 50) {
            updateFileStatus(fileWithStatus.file.name, FileStatus.Failed);
          }
        }
      });
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [files, updateFileProgress, updateFileStatus, simulateFailureForFile, intervalDuration]);
};

export default useFileUploadSimulation;
