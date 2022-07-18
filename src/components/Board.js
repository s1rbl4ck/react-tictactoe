const Board = () => {
  return (
    <div className="board">
      <div className="game-status">
        <span className="game-player"> X </span>
        is now Playing...
      </div>
      <div className="board-rows">
        <div className="board-row">
          <button className="square"></button>
          <button className="square"></button>
          <button className="square"></button>
        </div>
        <div className="board-row">
          <button className="square"></button>
          <button className="square"></button>
          <button className="square"></button>
        </div>
        <div className="board-row">
          <button className="square"></button>
          <button className="square"></button>
          <button className="square"></button>
        </div>
      </div>
    </div>
  );
};

export default Board;
