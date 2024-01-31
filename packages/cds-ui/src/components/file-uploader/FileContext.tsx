import React, { createContext, useContext, useState } from 'react';
import { FileStatus, FileWithStatus } from '../../types/file-status';

interface FileContextType {
  files: FileWithStatus[];
  addFile: (file: File) => void;
  updateFileStatus: (fileName: string, status: FileStatus) => void;
  updateFileProgress: (fileName: string, progress: number) => void;
  clearAllFiles: () => void;
  deleteFile: (fileName: string) => void;
}

const FileContext = createContext<FileContextType | undefined>(undefined);

interface FileContextProviderProps {
  children: React.ReactNode;
}

export const FileContextProvider: React.FC<FileContextProviderProps> = ({ children }) => {
  const [files, setFiles] = useState<FileWithStatus[]>([]);

  const updateFileStatus = (fileName: string, status: FileStatus) => {
    setFiles((prevFiles) => prevFiles.map((file) => (file.file.name === fileName ? { ...file, status } : file)));
  };

  const updateFileProgress = (fileName: string, progress: number) => {
    setFiles((prevFiles) => prevFiles.map((file) => (file.file.name === fileName ? { ...file, progress } : file)));
  };

  const addFile = (newFile: File) => {
    setFiles((prevFiles) => {
      // Check if the file is already in the list by name and size
      if (prevFiles.some((f) => f.file.name === newFile.name && f.file.size === newFile.size)) {
        return prevFiles;
      }
      return [...prevFiles, { file: newFile, status: FileStatus.New, progress: 0, size: newFile.size }];
    });
  };

  const clearAllFiles = () => {
    setFiles([]);
  };

  const deleteFile = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.file.name !== fileName));
  };

  return (
    <FileContext.Provider value={{ files, addFile, updateFileStatus, updateFileProgress, clearAllFiles, deleteFile }}>
      {children}
    </FileContext.Provider>
  );
};

export const useFileContext = () => {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error('useFileContext must be used within a FileProvider');
  }
  return context;
};
