
export type Character = {
  id: number;
  name: string;
  image: string;
  status?: string;
};
export async function getCharacters(np: number = 1): Promise<Character[]> {
  const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${np}`);
  if (!res.ok) {
    throw new Error("Failed to fetch characters");
  }

  const data = await res.json();
  return data.results;
}

export async function getFilterCharacters(
  name: string,
  status: string,
): Promise<Character[]> {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`, {
     next: { revalidate: 60 }, // opcional: caching
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch characters");
    //return <p>No se encontraron personajes.</p>;
  }

  const data = await res.json();
  return data.results;
}