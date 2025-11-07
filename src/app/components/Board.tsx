import Square from "./Square"
import { Color, Piece } from "@/app/types"

function Board({ state }: { state: number[][] }) {

  return (
    <>
      <div className="flex flex-col items-center ">
        {
          state.map((row, rowIndex) => (
            <div key={rowIndex} className="flex">
              {row.map((square, colIndex) => {
                const color = ((rowIndex + colIndex) % 2) == 0 ? "white" : "black"
                return <Square key={`${rowIndex}-${colIndex}`} color={color} piece={null} />
              })}
            </div>
          ))
        }
      </div>
    </>

  )


}

export default Board