import Board from "./components/Board";

export default function Home() {

  const state: number[][] = []
  for (let i = 0; i < 8; i++) {
    let row: number[] = []
    for (let i = 0; i < 8; i++) {

      row.push(1)
    }
    state.push(row)
  }

  return (
    <main>

      <Board state={state} />
    </main>
  );
}
