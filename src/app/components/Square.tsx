import { Color, Piece } from "@/app/types"

function Square({ bgColor: bgColor, piece }: {
  bgColor: Color,
  piece: Piece | null
}) {
  const className = `square ${bgColor === "white" ? "white" : "black"}`;

  return (
    <div className={className}>
      {piece &&
        <img className="select-none cursor-pointer" src={piece.svgPath} draggable={false} alt={piece.color + " " + piece.name} />
      }
    </div>);
}

export default Square;