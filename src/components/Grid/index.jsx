import "./index.css";
import { useTicTacToeContext } from "../../context/hooks/useTicTacToeContext";
import Square from "../Square";

export default function Grid() {
  const { board } = useTicTacToeContext();
  return (
    <section className="grid_section">
      {board.map((square, index) => (
        <Square key={index} index={index}>
          {square}
        </Square>
      ))}
    </section>
  );
}
