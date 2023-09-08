import "./index.css";
import { Link } from "react-router-dom";
import { useTicTacToeContext } from "../../context/hooks/useTicTacToeContext";
import Grid from "../../components/Grid";
import Layout from "../../components/Layout";
import WinnerModal from "../../components/WinnerModal";

export default function Start() {
  const { resetGame, isSelect } = useTicTacToeContext();
  return (
    <Layout>
      <section className="start_section">
        <h1>{isSelect}</h1>
        <button onClick={resetGame}>Reset Game</button>
      </section>
      <Grid />
      <WinnerModal />
      <footer className="start_footer">
        <Link to="/" onClick={resetGame}>
          Exit
        </Link>
      </footer>
    </Layout>
  );
}
