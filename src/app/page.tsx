import { Piece, PieceName, Color, BoardState, BoardRow } from "./types";
import Board from "./components/Board";

export default function Home() {

  const state: BoardState = []
  for (let i = 0; i < 8; i++) {
    let row: BoardRow = []
    for (let i = 0; i < 8; i++) {
      row.push(null)
    }
    state.push(row)
  }

  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center">
      <Board state={state} />
    </main>
  );
}
