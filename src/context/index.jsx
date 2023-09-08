import { createContext, useEffect, useState } from "react";
import { TURNS } from "./constants";
import { checkWinner, checkEndGame } from "./logic/board";
import { generateRandomNum } from "./logic/game";
import { resetGameStorage, saveGameToStorage } from "./logic/storage";

export const TicTacToeContext = createContext(null);

export function TicTacToeProvider({ children }) {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    if (boardFromStorage) return JSON.parse(boardFromStorage);
    return Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X;
  });
  const [isSelect, setIsSelect] = useState(null);
  const [winner, setWinner] = useState(null);
  function updateBoard(index) {
    if (board[index] || winner) return;
    if (isSelect === "Player vs Player") {
      const newBoard = [...board];
      newBoard[index] = turn;
      setBoard(newBoard);
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
      setTurn(newTurn);
      saveGameToStorage({
        board: newBoard,
        turn: newTurn,
      });
      const newWinner = checkWinner(newBoard);
      if (newWinner) {
        setWinner(newWinner);
      } else if (checkEndGame(newBoard)) {
        setWinner(false);
      }
    } else {
      const newBoard = [...board];
      newBoard[index] = turn;
      setBoard(newBoard);
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
      setTurn(newTurn);
      saveGameToStorage({
        board: newBoard,
        turn: newTurn,
      });
      const newWinner = checkWinner(newBoard);
      if (newWinner) {
        setWinner(newWinner);
      } else if (checkEndGame(newBoard)) {
        setWinner(false);
      }
    }
  }
  function resetGame() {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    resetGameStorage();
  }
  function selectedGame(option) {
    const select = option === "pvp" ? "Player vs Player" : "Player vs Computer";
    setIsSelect(select);
  }

  useEffect(() => {
    if (isSelect === "Player vs Computer" && turn === TURNS.O) {
      const newBoard = [...board];
      let game = true;
      while (game && board.includes(null)) {
        const turnPC = generateRandomNum();
        if (!newBoard[turnPC]) {
          newBoard[turnPC] = turn;
          setBoard(newBoard);
          game = false;
        }
      }
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
      setTurn(newTurn);
      saveGameToStorage({
        board: newBoard,
        turn: newTurn,
      });
      const newWinner = checkWinner(newBoard);
      if (newWinner) {
        setWinner(newWinner);
      } else if (checkEndGame(newBoard)) {
        setWinner(false);
      }
    }
  }, [turn, board]);

  return (
    <TicTacToeContext.Provider
      value={{
        board,
        winner,
        isSelect,
        updateBoard,
        resetGame,
        selectedGame,
      }}
    >
      {children}
    </TicTacToeContext.Provider>
  );
}
