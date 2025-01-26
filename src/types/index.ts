export interface FileData {
  id: string;
  fileName: string;
  fileUrl: string;
  fileType: string;
  uploadDate: string;
}

export interface ApiResponse {
  files: FileData[];
  status: string;
}

export interface DocumentData {
  date: string;
  identifier: string;
  name: string;
  link: string;
} 