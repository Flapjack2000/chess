export type Color = "white" | "black"

export interface Piece {
  color: Color
  piece: "king" | "queen" | "rook" | "bishop" | "knight" | "pawn" | null
}
