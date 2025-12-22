"use client"

import { Piece, PieceName, Color, BoardState, Rank, File } from "./types";
import Board from "./components/Board";
import { Plus, Flag, Handshake, ArrowUpDown } from "lucide-react";
import { useState } from "react";

// User database schema
// - name, username, email, uuid, circle color, board theme, piece theme

// Game schema
// - players' ids, timestamp, winner, PGN, final FEN

function indexToRankFile(row: number, col: number): [Rank, File] {
  const rank: Rank = (8 - row) as Rank;
  const file: File = String.fromCharCode(97 + col) as File;
  return [rank, file];
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

  // change to the player's color
  const [colorOnBottom, setColorOnBottom] = useState<Color>("white")
  const flipBoard = () => {
    setColorOnBottom(colorOnBottom == "white" ? "black" : "white");
  }

  const PlayerProfile = ({ username, color }: { username: string, color: string }) => (
    <div className="flex items-center gap-3">
      <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center`}>
        <span className="text-xl font-bold">
          {username[0].toUpperCase()}
        </span>
      </div>
      <div>
        <h3 className="font-semibold">{username}</h3>
        <p className="text-sm text-gray-400">Rating: 1500</p>
      </div>
    </div>
  );

  const GameButtons = () => (
    <>
      <button
        className="hover:[&>span]:underline text-xl flex flex-col justify-center items-center gap-1 px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition cursor-pointer text-white">
        <Plus className="w-7 h-7" />
        <span className="text-md">New Game</span>
      </button>

      <button
        className="hover:[&>span]:underline text-xl flex flex-col justify-center items-center gap-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition cursor-pointer text-white"
        onClick={flipBoard}
      >
        <ArrowUpDown className="w-7 h-7" />
        <span className="text-md">Flip Board</span>
      </button>

      <button
        className="hover:[&>span]:underline text-xl flex flex-col justify-center items-center gap-1 px-4 py-3 bg-yellow-600 hover:bg-yellow-700 rounded-lg font-semibold transition cursor-pointer text-white">
        <Handshake className="w-7 h-7" />
        <span className="text-md">Offer Draw</span>
      </button>

      <button
        className="hover:[&>span]:underline text-xl flex flex-col justify-center items-center gap-1 px-4 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition cursor-pointer text-white">
        <Flag className="w-7 h-7" />
        <span className="text-md">Resign</span>
      </button>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row md:h-screen">
      <div className="md:w-64 p-4 md:p-6 flex md:flex-col gap-4 border-b md:border-b-0 md:border-r border-gray-700 justify-around md:justify-start">
        <PlayerProfile username={"flapjackzach"} color="bg-blue-500" />
        <PlayerProfile username={"ViaNuke"} color="bg-red-500" />
      </div>

      <div className="flex-1 flex items-center justify-center p-4 min-h-0 min-w-0">
        <div className="w-full h-full max-w-[min(600px,100%)] max-h-[min(600px,100%)]">
          <Board colorOnBottom={colorOnBottom} state={state} />
        </div>
      </div>

      <div className="md:w-64 p-4 md:p-6 gap-3 border-t md:border-t-0 md:border-l border-gray-700 grid grid-cols-2 md:grid-cols-1">
        <GameButtons />
      </div>
    </div>
  );
}