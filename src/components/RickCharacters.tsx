'use client';
import Image from "next/image";
import { useEffect, useState } from 'react';

type Character = {
  id: number;
  name: string;
  image: string;
  status: string;
};

export default function RickCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/rick')
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching characters:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Cargando personajes...</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {characters.map((char) => (
        <div key={char.id} className="bg-white rounded-lg shadow-md p-4 text-center">
          <Image 
            src={char.image} 
            alt={char.name} 
            className="w-24 h-24 mx-auto rounded-full mb-2" 
            width={300} 
            height={500}
          />
          <h3 className="text-lg font-semibold">{char.name}</h3>
          <p className="text-sm text-gray-600">{char.status}</p>
        </div>
      ))}
    </div>
  );
}