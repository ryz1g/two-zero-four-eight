import React from "react";
import Grid from "./components/grid";
import SettingsPane from "./components/settingsPane";
import {makeMove, combine} from "./utils/gameFunctions";

let randomTiles = [2,4,8];

function App() {
  const [rows, setRows] = React.useState(4);
  const [columns, setColumns] = React.useState(4);
  const [gameState, setGameState] = React.useState([]);

  const initGame = () => {
    initializeGame(setGameState, rows, columns);
  }

  const initializeGame = (setGameState, r, c) => {
    let game = [];
    for(let i=0;i<r;i++) {
      let tmpRow = [];
      for(let j=0;j<c;j++) {
        tmpRow.push(-1);
      }
      game.push(tmpRow);
    }
    setRandomTile(game);
    setRandomTile(game);
    setGameState(game);
  }

  const setRandomTile = (gameState) => {
    let emptyPlaces = [];
    for(let i=0;i<gameState.length;i++) {
      for(let j=0;j<gameState[0].length;j++) {
        if(gameState[i][j]===-1) {
          let tmp = [];
          tmp.push(i);
          tmp.push(j);
          emptyPlaces.push(tmp);
        }
      }
    }
    if(emptyPlaces.length===0) {
      initGame();
    }
    let rand = Math.floor(Math.random()*emptyPlaces.length);
    gameState[emptyPlaces[rand][0]][emptyPlaces[rand][1]] = randomTiles[Math.floor(Math.random()*randomTiles.length)];
  }

  const handleMove = (direction) => {
    let copiedGame=JSON.parse(JSON.stringify(gameState));
    do {
      makeMove(copiedGame,direction);
    }while(!combine(copiedGame, direction));
    setRandomTile(copiedGame);
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