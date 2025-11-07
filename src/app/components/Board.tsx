import Square from "./Square"
import { Color, Piece } from "@/app/types"

function Board({ state }: { state: number[][] }) {

  return (
    <>
      <div className="flex flex-col items-center">
        {
          state.map((row, rowIndex) => (

            <div className="flex">
              {row.map((square, colIndex) => {
                return <Square key={`${rowIndex}-${colIndex}`} color="black" piece={null} />
              })}
            </div>

          )

          )
        }
      </div>
    </>

  )


}

export default Board