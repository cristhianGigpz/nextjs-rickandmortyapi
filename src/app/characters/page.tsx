import Image from "next/image";
import { getCharacters } from "app/services/rick/characters";

// type Character = {
//   id: number;
//   name: string;
//   image: string;
// };

export default async function CharactersPage() {
  

  // const res = await fetch("https://rickandmortyapi.com/api/character/?page=1");
  // const data = await res.json();
  // const characters: Character[] = data.results;
  const characters = await getCharacters(1);

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-6">Personajes</h1>
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
      
    </main>
  );
}