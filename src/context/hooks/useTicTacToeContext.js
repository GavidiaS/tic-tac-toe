import { useContext } from "react";
import { TicTacToeContext } from "..";

export function useTicTacToeContext() {
  const context = useContext(TicTacToeContext);
  return context;
}
