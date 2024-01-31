import { Meta } from '@storybook/react';
import { FileStatus, FileValidationErrorType } from '../../types/file-status';
import FileCard from './FileCard';
import { FileContextProvider, useFileContext } from './FileContext';
import FileUploader from './FileUploader';
import useFileUploadSimulation from '../../hooks/useFileUploadSimulation';

const meta: Meta<typeof FileUploader> = {
  title: 'Components/File Uploader',
  component: FileUploader,
  decorators: [
    (Story) => (
      <FileContextProvider>
        <div style={{ maxWidth: '800px' }}>
          <Story />
        </div>
      </FileContextProvider>
    ),
  ],
  argTypes: {
    buttonLabel: {
      control: { type: 'text' },
    },
    labelDescription: {
      control: { type: 'text' },
    },
    helperText: {
      control: { type: 'text' },
    },
    multiple: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    accept: {
      control: { type: 'object' },
    },
    maxFileSize: {
      control: { type: 'number' },
    },
    maxFiles: {
      control: { type: 'number' },
    },
    onUploadSuccess: {
      control: { type: 'function' },
    },
    onUploadFailure: {
      control: { type: 'function' },
    },
    onUploadProgress: {
      control: { type: 'function' },
    },
    onUpload: {
      control: { type: 'function' },
    },
    onFileValidationFailure: {
      control: { type: 'function' },
    },
  },
};
export default meta;

export const Success = () => {
  const { files, addFile, updateFileStatus, updateFileProgress } = useFileContext();

  useFileUploadSimulation(files, updateFileProgress, updateFileStatus);

  const mockUpload = async (file: File) => {
    return new Promise<void>((resolve) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        if (progress <= 100) {
          updateFileProgress(file.name, progress);
          mockUploadProgress(file, progress);
        } else {
          clearInterval(interval);
          updateFileStatus(file.name, FileStatus.Complete);
          mockUploadSuccess(file);
          resolve();
        }
      }, 300); // Adjust interval as needed
    });
  };

  const mockUploadProgress = (file: File, progress: number) => {
    console.log(`Upload progress for ${file.name}: ${progress}%`);
  };

  const mockUploadSuccess = (file: File) => {
    console.log(`Upload successful for ${file.name}`);
  };

  return (
    <>
      <FileUploader
        buttonLabel="Select Files"
        labelDescription="or drag files here."
        accept={['application/pdf', '.pdf', '.docx', '.doc']}
        helperText="50 files max per upload, each file size cannot exceed 25MB, total upload size cannot exceed 95MB."
        handleFileAdd={addFile}
        onUpload={mockUpload}
        onUploadProgress={mockUploadProgress}
        onUploadSuccess={mockUploadSuccess}
      >
        {files.map((fileWithStatus, index) => (
          <FileCard
            key={`${fileWithStatus.file.name}-${fileWithStatus.file.lastModified}-${index}`}
            fileWithStatus={fileWithStatus}
            onEdit={() => {}}
            onDelete={() => {}}
            onDownload={() => {}}
            onRetry={() => {}}
          />
        ))}
      </FileUploader>
    </>
  );
};

export const Failed = () => {
  const { files, addFile, updateFileStatus, updateFileProgress } = useFileContext();

  const mockUpload = async (file: File) => {
    return new Promise<void>((resolve, reject) => {
      let progress = 0;
      const progressIncrement = 5; // Smaller increment
      const intervalDuration = 100; // Shorter interval

      const interval = setInterval(() => {
        progress += progressIncrement;
        updateFileProgress(file.name, progress);

        if (progress >= 90) {
          clearInterval(interval);
          // Simulate a short delay before failure
          setTimeout(() => {
            updateFileStatus(file.name, FileStatus.Failed);
            mockUploadFailure(file); // Pass the file object to the failure handler
            reject(new Error('Upload failed'));
          }, 1000);
        }
      }, intervalDuration);
    });
  };

  const mockUploadProgress = (file: File, progress: number) => {
    console.log(`Upload progress for ${file.name}: ${progress}%`);
  };

  const mockUploadFailure = (file: File) => {
    console.error(`Upload failed for ${file.name}`);
    return Promise.reject(new Error(`Upload failed for ${file.name}`));
  };

  // Mock function to simulate file validation failure
  const mockFileValidationFailure = (errorType: FileValidationErrorType, fileName) => {
    console.error(`Validation failed for ${fileName || 'file'}: ${errorType}`);
  };

  return (
    <>
      <FileUploader
        buttonLabel="Select Files"
        labelDescription="or drag files here."
        accept={['application/pdf', '.pdf', '.docx', '.doc']}
        helperText="50 files max per upload, each file size cannot exceed 25MB, total upload size cannot exceed 95MB."
        handleFileAdd={addFile}
        onUpload={mockUpload}
        onUploadProgress={mockUploadProgress}
        onUploadFailure={mockUploadFailure}
        onFileValidationFailure={mockFileValidationFailure}
      >
        {files.map((fileWithStatus, index) => (
          <FileCard
            key={`${fileWithStatus.file.name}-${fileWithStatus.file.lastModified}-${index}`}
            fileWithStatus={fileWithStatus}
            onEdit={() => {}}
            onDelete={() => {}}
            onDownload={() => {}}
            onRetry={addFile}
          />
        ))}
      </FileUploader>
    </>
  );
};

export const Disabled = () => {
  return (
    <>
      <FileUploader
        buttonLabel="Select Files"
        labelDescription="or drag files here."
        accept={['application/pdf', '.pdf', '.docx', '.doc']}
        helperText="50 files max per upload, each file size cannot exceed 25MB, total upload size cannot exceed 95MB."
        handleFileAdd={() => {}}
        onUpload={() => {}}
        onUploadProgress={() => {}}
        onUploadSuccess={() => {}}
        disabled
      />
    </>
  );
};

export const MaxNumberOfFilesExceeded = () => {
  const { files, addFile } = useFileContext();

  const onFileValidationFailure = (errorType: FileValidationErrorType) => {
    console.log(`Validation failed: ${errorType}`);
  };

  const onSelectedFileAlreadyUploaded = (fileName) => {
    const existingFilesCount = files.filter((file) => file.file.name === fileName).length;

    console.log(
      `${existingFilesCount} file(s) named '${fileName}' ${existingFilesCount === 1 ? 'is' : 'are'} already uploaded.`,
    );
    // You can show a message to the user or perform any other actions as needed
    // For example, you can set a flag in the state to indicate that this file is already uploaded.
  };

  const handleFileAdd = (file) => {
    if (files.some((f) => f.file.name === file.name)) {
      console.log(`File '${file.name}' already exists.`);
      onSelectedFileAlreadyUploaded(file.name);
    } else {
      console.log(`Adding file '${file.name}' to the list.`);
      addFile(file);
    }
  };

  return (
    <div>
      <FileUploader
        buttonLabel="Select Files"
        labelDescription="or drag files here."
        accept={['application/pdf', '.pdf', '.docx', '.doc']}
        helperText="Maximum 2 files allowed."
        handleFileAdd={handleFileAdd}
        maxFiles={2}
        onFileValidationFailure={onFileValidationFailure}
        onSelectedFileAlreadyUploaded={onSelectedFileAlreadyUploaded}
      >
        {files.map((fileWithStatus, index) => (
          <FileCard
            key={`${fileWithStatus.file.name}-${fileWithStatus.file.lastModified}-${index}`}
            fileWithStatus={fileWithStatus}
            onEdit={() => {}}
            onDelete={() => {}}
            onDownload={() => {}}
            onRetry={() => {}}
          />
        ))}
      </FileUploader>
    </div>
  );
};

export const FileCardExamples = () => {
  return (
    <div style={{ display: 'flex', gap: '24px', flexDirection: 'column' }}>
      <FileCard
        fileWithStatus={{
          file: new File([''], 'file-name.pdf', { type: '.pdf' }),
          status: FileStatus.Complete,
          progress: 100,
          size: 10000000,
        }}
        metaData="ECF-2019-01-01"
        onEdit={() => {}}
        onDelete={() => {}}
        onDownload={() => {}}
        onRetry={() => {}}
      />
      <FileCard
        fileWithStatus={{
          file: new File([''], 'file-name.jpg', { type: '.jpg' }),
          status: FileStatus.Uploading,
          progress: 73,
          size: 5000000,
        }}
        metaData="ECF-2019-01-01"
        onEdit={() => {}}
        onDelete={() => {}}
        onDownload={() => {}}
        onRetry={() => {}}
      />
      <FileCard
        fileWithStatus={{
          file: new File([''], 'file-name-thats-really-long.doc', { type: '.doc' }),
          status: FileStatus.ValidationFailed,
          progress: 50,
          size: 1000000,
        }}
        metaData="ECF-2019-01-01"
        onEdit={() => {}}
        onDelete={() => {}}
        onDownload={() => {}}
        onRetry={() => {}}
      />
    </div>
  );
};
