import { Color, Piece, BoardState } from "@/app/types"

interface SquareProps {
  bgColor: Color,
  piece: Piece | null
}

export function Square({ bgColor, piece }: SquareProps) {
  return (
    <div
      className={`aspect-square flex items-center justify-center ${bgColor === "white" ? "bg-(--white)" : "bg-(--black)"}`}>
      {piece &&
        <img
          className="select-none cursor-pointer object-contain"
          src={piece.svgPath}
          draggable={false}
          alt={piece.color + " " + piece.name}
        />
      }
    </div>
  );
}

interface BoardProps {
  state: BoardState
  colorOnBottom: Color
}

export function Board({ state, colorOnBottom }: BoardProps) {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="grid grid-cols-8 aspect-square w-full max-w-full max-h-full border border-gray-800">
        {colorOnBottom == "white" ?
          (<>
            {state.map((row, rowIndex) =>
              row.map((piece, colIndex) => {
                const color = (((rowIndex + colIndex) % 2) === 0 ? "white" : "black") as Color;
                return <Square key={`${rowIndex}-${colIndex}`} bgColor={color} piece={piece} />;
              })
            )}
          </>)
          :
          (<>
            {state.toReversed().map((row, rowIndex) =>
              row.toReversed().map((piece, colIndex) => {
                const color = (((rowIndex + colIndex) % 2) === 0 ? "white" : "black") as Color;
                return <Square key={`${rowIndex}-${colIndex}`} bgColor={color} piece={piece} />;
              })
            )}
          </>)
        }
      </div>
    </div>
  );
}