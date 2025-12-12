import { Piece, PieceName, Color, BoardState, Rank, File } from "./types";
import Board from "./components/Board";

function indexToRankFile(row: number, col: number): [Rank, File] {
  const rank: Rank = (row + 1) as Rank;
  let file: File = "a";
  switch (col) {
    case 0:
      file = "a";
      break;
    case 1:
      file = "b";
      break;
    case 2:
      file = "c";
      break;
    case 3:
      file = "d";
      break;
    case 4:
      file = "e";
      break;
    case 5:
      file = "f";
      break;
    case 6:
      file = "g";
      break;
    case 7:
      file = "h";
      break;
    default:
      console.error("File off board")
      break;
  }
  return [rank, file]
}

function randomPiece(): Piece {
  const colors: Color[] = ["white", "black"];
  const names: PieceName[] = ["king", "queen", "rook", "bishop", "knight", "pawn"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const name = names[Math.floor(Math.random() * names.length)];
  return new Piece(color, name);
}

function emptyBoardState(): BoardState {
  // Board full of nulls
  const state: BoardState = Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => null));
  return state;
}

function initialBoardState(): BoardState {
  const state: BoardState = Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => null));

  // Pawns
  for (let i = 0; i < 8; i++) {
    state[1][i] = new Piece("black", "pawn");
    state[6][i] = new Piece("white", "pawn");
  }

  // Rooks
  state[0][0] = new Piece("black", "rook");
  state[0][7] = new Piece("black", "rook");
  state[7][0] = new Piece("white", "rook");
  state[7][7] = new Piece("white", "rook");

  // Knights
  state[0][1] = new Piece("black", "knight");
  state[0][6] = new Piece("black", "knight");
  state[7][1] = new Piece("white", "knight");
  state[7][6] = new Piece("white", "knight");

  // Bishops
  state[0][2] = new Piece("black", "bishop");
  state[0][5] = new Piece("black", "bishop");
  state[7][2] = new Piece("white", "bishop");
  state[7][5] = new Piece("white", "bishop");

  // Queens
  state[0][3] = new Piece("black", "queen");
  state[7][3] = new Piece("white", "queen");

  // Kings
  state[0][4] = new Piece("black", "king");
  state[7][4] = new Piece("white", "king");

  return state;
}

export default function Home() {

  const state = initialBoardState();

  return (
    <>
      <aside className="w-screen flex justify-center items-center gap-4 mt-20 mb-20">
        <button className="p-1 border text-black bg-white cursor-pointer">New Game</button>
        <button className="p-1 border text-black bg-white cursor-pointer">Share Game</button>
        <button className="p-1 border text-black bg-white cursor-pointer">Save Game</button>
        <button className="p-1 border text-black bg-white cursor-pointer">Settings</button>
      </aside>
      <main className="w-screen flex flex-col justify-center items-center">
        <Board state={state} />
      </main >
    </>
  );
}
