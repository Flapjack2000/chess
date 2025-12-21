import { Color, Piece } from "@/app/types"

interface SquareProps {
  bgColor: Color,
  piece: Piece | null
}

export default function Square({ bgColor, piece }: SquareProps) {
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