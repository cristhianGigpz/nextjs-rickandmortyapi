import Image from "next/image";
import Link from "next/link";
//import { getCharacters } from "../services/rick/characters";
import RickCharacters from '../components/RickCharacters';
export default async function Home() {
  //const characters = await getCharacters();
  //https://rickandmortyapi.com/documentation/#rest
  return (
    <div className="container mx-auto">
      <main className="flex flex-col items-center min-h-screen p-4">
        <h1 className="text-2xl text-green-600 font-bold">Hellow world</h1>
        <Image
          src="/images/rickymorty.jpg"
          alt="Rick and Morty Logo"
          width={100}
          height={300}
          className="object-contain"
        />
        <Link href="/characters/1" className="text-blue-700 hover:underline">Ver Personajes</Link>
        <Link href="/filter" className="text-blue-700 hover:underline">filtrar</Link>
        <RickCharacters />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* {characters.map((char) => (
          <div key={char.id} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <Image 
              src={char.image} 
              alt={char.name}
              width={200}
              height={400}
              className="rounded w-auto h-auto"
            />
            <h2 className="mt-2 text-center font-semibold">{char.name}</h2>
          </div>
        ))} */}
        </div>
      </main>
      
        
    </div>
  );
}
