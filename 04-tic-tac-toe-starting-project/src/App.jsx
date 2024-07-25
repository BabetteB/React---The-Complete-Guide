import { useState } from "react"

import { WINNING_COMBINATIONS } from "../winning-combinations";

import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./Log";
import GameOver from "./GameOver";

const PLAYERS = {
  X : 'Player 1',
  O : 'Player 2'
}

const INITIAL_GAMEBOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function deriveGameboard(gameturns){
  let gameBoard = [...INITIAL_GAMEBOARD.map((innerArray) => [...innerArray] )];

  for (const turn of gameturns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function deriveActivePlayer(gameturns) {
  let currentPlayer = 'X';
  if (gameturns.length > 0)
    gameturns[0].player === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';

  return currentPlayer;
}

function deriveWinner(gameBoard, players){
  let winner = undefined;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}

function App() {
  const [players, setPlayers]= useState(PLAYERS)
  const [gameturns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameturns);
  const gameBoard = deriveGameboard(gameturns); 
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameturns.length === 9 && !winner;

  function handleSelectedSquare(rowIndex, colIndex) {
    setGameTurns((earlierTurns) => {
      let currentPlayer = deriveActivePlayer(earlierTurns);

      const updatedTurns = [{
        square: { row: rowIndex, col: colIndex },
        player: currentPlayer
      },
      ...earlierTurns
      ];
      return updatedTurns;
    })
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName){
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers, 
        [symbol] : newName
      }
    })
  }

  return <main>
    <div id="game-container">

      <ol id="players" className="highlight-player">
        <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange} />
        <Player initialName={PLAYERS.O} symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange} />
      </ol>

      {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
      <GameBoard onSelectSquare={handleSelectedSquare} board={gameBoard} />
    </div>

    <Log turns={gameturns} />
  </main>
}

export default App
