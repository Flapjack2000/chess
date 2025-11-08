import Square from "./Square"
import { Color, Piece, BoardState } from "@/app/types"

function Board({ state }: { state: BoardState }) {

  return (
    <>
      <div className="flex flex-col items-center overflow-hidden rounded-md">
        {
          Array.from(state.entries()).map(([rank, files], rowIndex) => (
            <div key={rank} className="flex">
              {Array.from(files.entries()).map(([file, piece], colIndex) => {
                const color = (((rowIndex + colIndex) % 2) === 0 ? "white" : "black") as Color;
                return <Square key={`${rank}-${file}`} color={color} piece={piece} />;
              })}
            </div>
          ))
        }
      </div>
    </>

  )


}

export default Board