import Square from "./Square"
import { Color, BoardState } from "@/app/types"

export default function Board({ state }: { state: BoardState }) {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="grid grid-cols-8 aspect-square w-full max-w-full max-h-full border border-gray-800">
        {state.map((row, rowIndex) =>
          row.map((piece, colIndex) => {
            const color = (((rowIndex + colIndex) % 2) === 0 ? "white" : "black") as Color;
            return <Square key={`${rowIndex}-${colIndex}`} bgColor={color} piece={piece} />;
          })
        )}
      </div>
    </div>
  );
}