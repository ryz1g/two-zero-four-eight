import React from "react";
import Grid from "./components/grid";
import SettingsPane from "./components/settingsPane";
import {initializeGame, makeMove, combine, setRandomTile} from "./utils/gameFunctions";

function App() {
  const [rows, setRows] = React.useState(4);
  const [columns, setColumns] = React.useState(4);
  const [gameState, setGameState] = React.useState([]);

  const initGame = () => {
    let board = initializeGame(rows, columns);
    setGameState(board);
  }

  const handleMove = (direction) => {
    let copiedGame=JSON.parse(JSON.stringify(gameState));
    do {
      makeMove(copiedGame,direction);
    }while(!combine(copiedGame, direction));
    if(!setRandomTile(copiedGame)) 
      initGame();
    else
      setGameState(copiedGame);
  }

  return (
    <div>
      <SettingsPane rows={rows} 
                    columns={columns} 
                    setRows={setRows} 
                    setColumns={setColumns} 
                    initGame={initGame}
                    move={handleMove}/>
      <Grid gameState={gameState}/>
    </div>
  );
}

export default App;