import { Color, Piece } from "@/app/types"

function Square({ color, piece }: {
  color: Color,
  piece: Piece | null
}) {
  const className = `square ${color === "white" ? "white" : "black"}`;
  const svgPath = (piece ? `pieces/${piece.name}-${piece.color[0]}.svg` : "#")

  return (
    <div className={className}>
      {piece &&
        <img className="select-none cursor-grab active:cursor-grabbing " draggable={true} src={svgPath} />
      }
    </div>);
}

export default Square;