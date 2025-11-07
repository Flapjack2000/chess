export type Color = "white" | "black";
export type PieceName = "king" | "queen" | "rook" | "bishop" | "knight" | "pawn";
export class Piece {
  constructor(public color: Color, public name: PieceName) { }
}
export type File = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type BoardRow = (Piece | null)[];
export type BoardState = (Piece | null)[][];