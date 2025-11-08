import { Piece, PieceName, Color, BoardState, BoardRow } from "./types";
import Board from "./components/Board";

function randomPiece(): Piece {
  const colors: Color[] = ["white", "black"];
  const names: PieceName[] = ["king", "queen", "rook", "bishop", "knight", "pawn"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const name = names[Math.floor(Math.random() * names.length)];
  return new Piece(color, name);
}

export default function Home() {

  const state: BoardState = []
  for (let i = 0; i < 8; i++) {
    let row: BoardRow = []
    for (let i = 0; i < 8; i++) {
      row.push(randomPiece())
    }
    state.push(row)
  }

  return (
    <>
      <aside className="*:cursor-pointer w-screen flex justify-center items-center gap-4 mt-20 mb-20">
        <button className="border bg-white">New Game</button>
        <button className="border bg-white">Share Game</button>
        <button className="border bg-white">Save Game</button>
        <button className="border bg-white">Settings</button>
      </aside>
      <main className="w-screen flex flex-col justify-center items-center">
        <Board state={state} />
      </main >
    </>
  );
}
