import "./index.css";
import { useTicTacToeContext } from "../../context/hooks/useTicTacToeContext";
import Square from "../Square";

const WinnerModal = () => {
  const { winner, resetGame } = useTicTacToeContext();
  if (winner === null) return null;
  const winnerText = winner === false ? "Empate" : "Ganó: ";
  return (
    <section className="winner_section">
      <h2>{winnerText}</h2>
      <header className="winner_header">
        {winner && <Square>{winner}</Square>}
      </header>
      <footer className="winner_footer">
        <button onClick={resetGame}>Empezar de nuevo</button>
      </footer>
    </section>
  );
};

export default WinnerModal;
