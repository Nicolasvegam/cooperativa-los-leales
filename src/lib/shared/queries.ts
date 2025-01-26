import { DocumentData } from '@/types';

const API_URL = 'https://script.google.com/macros/s/AKfycbxJWY8hhFUqEb0KhUERikptVM2APBgd8wrWRHij6oZlbI_iZpkMF9JzQaxzwI_n_9Ol/exec';

export async function fetchDocumentsByRut(rut: string): Promise<DocumentData[]> {
  try {
    const response = await fetch(`${API_URL}?rut=${rut}`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data as DocumentData[];
  } catch (error) {
    console.error('Error fetching documents:', error);
    throw error;
  }
} 