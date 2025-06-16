//SERVER COMPONENTE//
// import Image from "next/image";
// import { Character } from "../../services/rick/characters";
// import { getFilterCharacters } from "../../services/rick/characters";
// type Props = {
//   name: string;
//   status: string;
// };

// export default async function CharacterList({ name, status }: Props) {
  
//   //MIENTRAS X Q ES UN COMPONENTE DEL SERVIDOR, ASI QUE PUEDE USAR FETCH DIRECTAMENTE
//   const data = await getFilterCharacters(name, status);

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//       {data.map((character: Character) => (
//         <div key={character.id} className="bg-white rounded shadow p-2 text-center">
//           <Image
//             src={character.image}
//             alt={character.name}
//             width={200}
//             height={200}
//             className="mx-auto rounded"
//           />
//           <h3 className="font-semibold mt-2">{character.name}</h3>
//           <p className="text-sm text-gray-500">{character.status}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Character = {
  id: number;
  name: string;
  status: string;
  image: string;
};

type Props = {
  name: string;
  status: string;
};

export default function CharacterList({ name, status }: Props) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`
        );
        if (!res.ok) throw new Error("No se encontraron personajes");
        const data = await res.json();
        setCharacters(data.results);
      } catch (err: unknown) {
        setError((err as Error).message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [name, status]);

  if (loading) return <p>Cargando personajes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {characters.map((character) => (
        <div key={character.id} className="bg-white rounded shadow p-2 text-center">
          <Image
            src={character.image}
            alt={character.name}
            width={200}
            height={200}
            className="mx-auto rounded"
          />
          <h3 className="font-semibold mt-2">{character.name}</h3>
          <p className="text-sm text-gray-500">{character.status}</p>
        </div>
      ))}
    </div>
  );
}
