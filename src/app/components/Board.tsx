import Square from "./Square"
import { Color, Piece, BoardState } from "@/app/types"

function Board({ state }: { state: BoardState }) {

  return (
    <>
      <div className="flex flex-col items-center ">
        {
          state.map((row, rowIndex) => (
            <div key={rowIndex} className="flex">
              {row.map((square, colIndex) => {
                const color = (((rowIndex + colIndex) % 2) == 0 ? "white" : "black") as Color

                return <Square key={`${rowIndex}-${colIndex}`} color={color} piece={square} />
              })}
            </div>
          ))
        }
      </div>
    </>

  )


}

export default Board