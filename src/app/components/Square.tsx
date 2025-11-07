import { Color, Piece } from "@/app/types"

function Square({ color, piece }: {
  color: Color,
  piece: Piece | null
}) {
  const className = ` square ${color === "white" ? "white" : "black"}`;
  const svgPath = piece ? `${piece.piece}-${piece.color[0]}.svg` : "#"

  return (
    <div className={className}>
      {piece &&
        <svg href={svgPath} />
      }
    </div>);
}

export default Square;