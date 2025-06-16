import { NextResponse } from "next/server";
import { getCharacters } from "../../../services/rick/characters";
import { Character } from "../../../services/rick/characters";

export async function GET() {
  try {
    const characters = await getCharacters();
    const simplified = characters.map((char: Character) => ({
      id: char.id,
      name: char.name,
      image: char.image,
      status: char.status,
    }));
    return NextResponse.json(simplified);
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
