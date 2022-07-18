import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="app">
      <h1 className="game-title">Tic Tac Toe</h1>
      <hr className="game-divider" noshade="true" />
      <Board />
      <span className="author">
        Created By{" "}
        <a className="author-link" href="https://github.com/s1rbl4ck">
          s1rbl4ck
        </a>
      </span>
    </div>
  );
}

export default App;
