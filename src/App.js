import React from "react";
import Grid from "./components/grid";
import SettingsPane from "./components/settingsPane";
import {initializeGame, makeMove, combine, setRandomTile} from "./utils/gameFunctions";

let moves=0;
let lastMove = [];

function App() {
  const [rows, setRows] = React.useState(4);
  const [columns, setColumns] = React.useState(4);
  const [gameState, setGameState] = React.useState([]);

  const initGame = () => {
    let board = initializeGame(rows, columns);
    lastMove = JSON.parse(JSON.stringify(board));
    setGameState(board);
  }

  const undoMove = () => {
    setGameState(lastMove);
  }

  const handleMove = (direction) => {
    let copiedGame=JSON.parse(JSON.stringify(gameState));
    do {
      makeMove(copiedGame,direction);
    }while(!combine(copiedGame, direction));
    if(moves !== 0) {
      lastMove = JSON.parse(JSON.stringify(gameState));
    }
    if(!setRandomTile(copiedGame)) 
      initGame();
    else
      setGameState(copiedGame);
    moves=moves+1;
  }

  return (
    <div>
      <SettingsPane rows={rows} 
                    columns={columns} 
                    setRows={setRows} 
                    setColumns={setColumns} 
                    initGame={initGame}
                    move={handleMove}
                    undoMove={undoMove}/>
      <Grid gameState={gameState}/>
    </div>
  );
}

export default App;