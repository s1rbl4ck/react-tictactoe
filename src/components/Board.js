import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setXIsNext] = useState(true);
  const [draw, setDraw] = useState(false);

  function calculateWinner(squares) {
    const lines = [
      // Rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Columns
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagnals
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function drawCheck(squares) {
    var filledCount = 1;
    for (let square of squares) {
      if (square !== null) {
        filledCount++;
        if (filledCount === squares.length) {
          return true;
        }
      }
    }
    return null;
  }

  const handleClickEvent = (i) => {
    const newSquares = [...squares];
    const gameIsDraw = Boolean(drawCheck(newSquares));
    const winnerDeclared = Boolean(calculateWinner(newSquares));
    const squareFilled = Boolean(newSquares[i]);
    if (winnerDeclared || squareFilled) {
      return;
    }
    if (gameIsDraw) {
      setDraw(true);
    }

    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(initialSquares);
    setXIsNext(true);
    setDraw(false);
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClickEvent={() => handleClickEvent(i)} />;
  };

  const winner = calculateWinner(squares);

  return (
    <div className="board">
      <div className="game-status">
        {winner ? (
          <>
            Winner:
            <span className="game-player"> {winner} </span>
          </>
        ) : draw ? (
          <>
            Game Is Draw <span className="game-player">No Winner :( </span>
          </>
        ) : (
          <>
            <span className="game-player"> {xIsNext ? "X" : "O"} </span> is now Playing...
          </>
        )}
      </div>
      <div className="board-rows">
        <div className="board-row">
          {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
        </div>
      </div>
      {draw || winner ? (
        <div className="game-reset">
          <button className="reset-button" onClick={() => resetGame()}>
            Play Again
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Board;
