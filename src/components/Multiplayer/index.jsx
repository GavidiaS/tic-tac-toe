import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useTicTacToeContext } from "../../context/hooks/useTicTacToeContext";

export default function Multiplayer({ select, close }) {
  const navigate = useNavigate();
  const { selectedGame } = useTicTacToeContext();
  if (!select) return null;
  function playerVsPlayer() {
    selectedGame("pvp");
    navigate("/start");
  }
  function playerVsPc() {
    selectedGame("pvc");
    navigate("/start");
  }
  return (
    <aside className="multiplayer_aside">
      <button onClick={close}>
        <FontAwesomeIcon icon={faX} />
      </button>
      <button onClick={playerVsPc}>Player vs Computer</button>
      <button onClick={playerVsPlayer}>Player vs Player</button>
    </aside>
  );
}
