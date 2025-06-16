import Image from "next/image";
import { getCharacters } from "app/services/rick/characters";
import Link from "next/link";
// type Character = {
//   id: number;
//   name: string;
//   image: string;
// };

export default async function CharactersPage({ params }: { params: { page: string } }) {
  //const page = params.page;
  let currentPage = parseInt(params.page);
  if (currentPage > 42) currentPage = 42; // Limitar a 42 páginas
  const nextPage = currentPage > 41 ? null : currentPage + 1; // Si es la última página, no hay siguiente
  const prevPage = currentPage > 1 ? currentPage - 1 : null;

  // const res = await fetch("https://rickandmortyapi.com/api/character/?page=1");
  // const data = await res.json();
  // const characters: Character[] = data.results;
  const characters = await getCharacters(currentPage);

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-6">Estás en la página {currentPage}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {characters.map((char) => (
          <div key={char.id} className="text-center">
            <Image
              src={char.image}
              alt={char.name}
              width={200}
              height={200}
              className="rounded-lg mx-auto"
            />
            <p className="mt-2 text-lg">{char.name}</p>
          </div>
        ))}
      </div>
      {/* Aquí irían los personajes, puedes usar fetch() o similar */}

      <div className="flex gap-4 mt-8">
        {prevPage && (
          <Link href={`/characters/${prevPage}`} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
            ← Anterior
          </Link>
        )}
        {nextPage && (
          <Link href={`/characters/${nextPage}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Siguiente →
          </Link>
        )}
        <Link href={`/`} className="bg-black text-white px-4 py-2 rounded hover:bg-gray-400">Inicio</Link>
      </div>
      
    </main>
  );
}