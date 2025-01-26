import rutify from '@/lib/shared/rutify';
import { useState } from 'react';
import { fetchDocumentsByRut } from '@/lib/shared/queries';
import { DocumentData } from '@/types';

const Hero = ({ onSearch }: { onSearch: (documents: DocumentData[]) => void }) => {
  const [rut, setRut] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const CHILEAN_RUT_REGEX_PATTERN = /^(\d{1,2}\.\d{3}\.\d{3}[-][0-9kK])$/;

  const validateRut = (rut: string) => {
    return CHILEAN_RUT_REGEX_PATTERN.test(rut);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateRut(rut)) {
      setError('RUT inválido. Formato correcto: 12.345.678-9');
      return;
    }
    
    try {
      setError('');
      setIsLoading(true);
      const documents = await fetchDocumentsByRut(rut);
      onSearch(documents);
    } catch (error) {
      setError('Error al buscar documentos. Por favor intente nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-black min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
        Buscador de Documentos
      </h1>
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={rut}
              onChange={(e) => setRut(rutify(e.target.value))}
              placeholder="Ingrese RUT (ej: 12.345.678-9)"
              className="w-full px-4 py-2 rounded-lg border-2 focus:outline-none focus:border-[#3DBDAF] text-black placeholder-gray-500"
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#3DBDAF] text-white py-3 rounded-lg hover:bg-[#35a99c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-white border-r-transparent align-[-0.125em]" />
            ) : (
              'Buscar'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;