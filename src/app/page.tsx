'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import FileCard from '@/components/FileCard';
import Footer from '@/components/Footer';
import { DocumentData } from '@/types';

export default function Home() {
  const [documents, setDocuments] = useState<DocumentData[] | null>(null);
  

  const handleSearch = async (documents: DocumentData[]) => {
    setDocuments(documents);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F2F2F2]">
      <Hero onSearch={handleSearch} />
      
      <main className="flex-grow container mx-auto px-4 py-12">      
        
        { documents && documents.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((doc, index) => (
              <FileCard
                key={index}
                file={{
                  id: doc.identifier,
                  fileName: doc.name,
                  fileUrl: doc.link,
                  fileType: 'Documento',
                  uploadDate: doc.date
                }}
              />
            ))}
          </div>
        )}
        
        { !documents  && (
          <div className="text-center bg-white p-8 rounded-lg shadow">
            <p className="text-[#3A3A3A]">
              Ingrese un RUT para buscar documentos asociados.
            </p>
          </div>
        )}

        { documents && documents.length === 0 && (
          <div className="text-center bg-white p-8 rounded-lg shadow">
            <p className="text-[#ff5050]">
              No se encontraron documentos asociados.
            </p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
