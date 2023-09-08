import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faO, faX } from "@fortawesome/free-solid-svg-icons";
import { useTicTacToeContext } from "../../context/hooks/useTicTacToeContext";

export default function Square({ children, index }) {
  const { updateBoard } = useTicTacToeContext();
  function handleClick() {
    updateBoard(index);
  }
  return (
    <div className="square_div" onClick={handleClick}>
      {!children && ""}
      {children === "x" && <FontAwesomeIcon icon={faX} />}
      {children === "o" && <FontAwesomeIcon icon={faO} />}
    </div>
  );
}
