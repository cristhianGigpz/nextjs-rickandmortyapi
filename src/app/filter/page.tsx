//"use client";
import { Suspense } from "react";
import CharacterList from "./CharacterList";
import Link from "next/link";

//import { useSearchParams } from 'next/navigation';

export default async function CharactersPageFilter({ searchParams }: { searchParams: { name?: string; status?: string } }) {
//export default function CharactersPageFilter() {
  //const searchParams = useSearchParams();
  const { name = "", status = "" } = await searchParams;
  //const name = searchParams?.name ?? "";
  //const status = searchParams?.status ?? "";
  //const name = searchParams.get('name') ?? '';
  //const status = searchParams.get('status') ?? '';

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Filtrar Personajes</h1>

      <form className="mb-6 flex gap-4 items-end" method="get">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            className="border border-gray-300 rounded px-2 py-1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Estado</label>
          <select name="status" defaultValue={status} className="border border-gray-300 rounded px-2 py-1">
            <option value="">Todos</option>
            <option value="alive">Vivo</option>
            <option value="dead">Muerto</option>
            <option value="unknown">Desconocido</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
        >
          Filtrar
        </button>
        <Link href="/" className="bg-black text-white px-4 py-2 hover:underline">Volver</Link>
      </form>

      <Suspense fallback={<p>Cargando personajes...</p>}>
        <CharacterList name={name} status={status} />
      </Suspense>
    </main>
  );
}