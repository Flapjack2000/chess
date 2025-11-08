import { Piece, PieceName, Color, BoardState, BoardRow, Rank, File } from "./types";
import Board from "./components/Board";

function randomPiece(): Piece {
  const colors: Color[] = ["white", "black"];
  const names: PieceName[] = ["king", "queen", "rook", "bishop", "knight", "pawn"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const name = names[Math.floor(Math.random() * names.length)];
  return new Piece(color, name);
}

function initialBoardState(): BoardState {
  const state = new Map<Rank, Map<File, Piece | null>>();

  const ranks = Array.from({ length: 8 }, (_, i) => (i + 1) as Rank);
  const files: File[] = ["a", "b", "c", "d", "e", "f", "g", "h"];

  for (const r of ranks) {
    const row = new Map<File, Piece | null>();
    for (const f of files) {
      row.set(f, null);
    }
    state.set(r, row);
  }

  return state;
}

export default function Home() {

  const state = initialBoardState();

  return (
    <>
      <aside className="w-screen flex justify-center items-center gap-4 mt-20 mb-20">
        <button className="p-1 border bg-white cursor-pointer">New Game</button>
        <button className="p-1 border bg-white cursor-pointer">Share Game</button>
        <button className="p-1 border bg-white cursor-pointer">Save Game</button>
        <button className="p-1 border bg-white cursor-pointer">Settings</button>
      </aside>
      <main className="w-screen flex flex-col justify-center items-center">
        <Board state={state} />
      </main >
    </>
  );
}
