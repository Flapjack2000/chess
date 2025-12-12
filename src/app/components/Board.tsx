import Square from "./Square"
import { Color, BoardState } from "@/app/types"

function Board({ state }: { state: BoardState }) {
  return (
    <div className="flex flex-col items-center overflow-hidden rounded-md">
      {
        state.map((files, rowIndex) => (
          <div key={rowIndex} className="flex">
            {files.map((piece, colIndex) => {
              const color = (((rowIndex + colIndex) % 2) === 0 ? "white" : "black") as Color;
              return <Square key={`${rowIndex}-${colIndex}`} bgColor={color} piece={piece} />;
            })}
          </div>
        ))
      }
    </div>
  )
}

export default Board