import "./index.css";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Multiplayer from "../../components/Multiplayer";
import { useTicTacToeContext } from "../../context/hooks/useTicTacToeContext";

export default function Game() {
  const { resetGame } = useTicTacToeContext();
  const [select, setSelect] = useState(false);
  function startGame() {
    setSelect(!select);
  }

  useEffect(() => {
    resetGame();
  }, []);

  return (
    <Layout>
      <section className="game_section">
        <h1>Tic Tac Toe</h1>
        <button onClick={startGame}>Start Game</button>
      </section>
      <Multiplayer select={select} close={startGame} />
    </Layout>
  );
}
