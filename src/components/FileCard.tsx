import { FileData } from '@/types';

const FileCard = ({ file }: { file: FileData }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <h3 className="text-[#3A3A3A] font-semibold text-lg">{file.fileName}</h3>
        <span className="bg-[#F7D154] text-[#3A3A3A] px-2 py-1 rounded text-sm">
          {file.fileType}
        </span>
      </div>
      <p className="text-gray-600 mt-2">Subido el: {new Date(file.uploadDate).toLocaleDateString('es-CL', { day: '2-digit', month: '2-digit', year: 'numeric' })}</p>
      <a
        href={file.fileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-[#3DBDAF] text-white px-4 py-2 rounded hover:bg-[#35a99c] transition-colors"
      >
        Ver Documento
      </a>
    </div>
  );
};

export default FileCard; 