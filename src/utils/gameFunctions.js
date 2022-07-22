export function solveColumns(gameState, move) {
    if(move==="Up") {
      for(let c=0;c<gameState[0].length;c++) {
        let minus=0;
        let nums=[];
        for(let r=0;r<gameState.length;r++) {
          if(gameState[r][c]===-1) minus++;
          else {
            nums.push(gameState[r][c]);
          }
        }
        let index=0;
        nums.map((num) => {
          gameState[index++][c]=num;
        });
        while(minus--!==0) {
          gameState[index++][c]=-1;
        }
      }
    }
    else {
      for(let c=0;c<gameState[0].length;c++) {
        let minus=0;
        let nums=[];
        for(let r=gameState.length-1;r>=0;r--) {
          if(gameState[r][c]===-1) minus++;
          else {
            nums.push(gameState[r][c]);
          }
        }
        let index=gameState.length-1;
        nums.map((num) => {
          gameState[index--][c]=num;
        });
        while(minus--!==0) {
          gameState[index--][c]=-1;
        }
      }
    }
  }
  
export function solveRows(gameState, move) {
    if(move==="Left") {
        for(let r=0;r<gameState.length;r++) {
            let minus=0;
            let nums=[];
            for(let c=0;c<gameState[0].length;c++) {
                if(gameState[r][c]===-1) minus++;
                else {
                    nums.push(gameState[r][c]);
                }
            }
            let index=0;
            nums.map((num) => {
                gameState[r][index++]=num;
            });
            while(minus--!==0) {
                gameState[r][index++]=-1;
            }
        }
    }
    else {
        for(let r=0;r<gameState.length;r++) {
        let minus=0;
        let nums=[];
        for(let c=gameState[0].length-1;c>=0;c--) {
            if(gameState[r][c]===-1) minus++;
            else {
                nums.push(gameState[r][c]);
            }
        }
        let index=gameState[0].length-1;
        nums.map((num) => {
            gameState[r][index--]=num;
        });
        while(minus--!==0) {
            gameState[r][index--]=-1;
        }
        }
    }
}

export function combineRows(gameState, move) {
    if(move==="Left") {
        for(let r=0;r<gameState.length;r++) {
            for(let c=0;c<gameState[0].length-1;c++) {
                if(gameState[r][c]!==-1 && gameState[r][c]===gameState[r][c+1]) {
                    gameState[r][c]=2*gameState[r][c];
                    gameState[r][c+1]=-1;
                }
            }
        }
    }
    else {
        for(let r=0;r<gameState.length;r++) {
            for(let c=gameState[0].length-1;c>0;c--) {
                if(gameState[r][c]!==-1 && gameState[r][c]===gameState[r][c-1]) {
                    gameState[r][c]=2*gameState[r][c];
                    gameState[r][c-1]=-1;
                }
            }
        }
    } 
}

export function combineColumns(gameState, move) {
    if(move==="Up") {
        for(let c=0;c<gameState[0].length;c++) {
            for(let r=0;r<gameState.length-1;r++) {
                if(gameState[r][c]!==-1 && gameState[r][c]===gameState[r+1][c]) {
                    gameState[r][c]=2*gameState[r][c];
                    gameState[r+1][c]=-1;
                }
            }
        }
    }
    else {
        for(let c=0;c<gameState[0].length;c++) {
            for(let r=gameState.length-1;r>0;r--) {
                if(gameState[r][c]!==-1 && gameState[r][c]===gameState[r-1][c]) {
                    gameState[r][c]=2*gameState[r][c];
                    gameState[r-1][c]=-1;
                }
            }
        }
    } 
}

export function combine(gameState, move) {
    let beforeComb = JSON.parse(JSON.stringify(gameState));
    if(move==="Up" || move==="Down") {
        combineColumns(gameState,move);
    }
    else {
        combineRows(gameState,move);
    }
    return JSON.stringify(beforeComb)===JSON.stringify(gameState);
}

export  function makeMove(gameState, move) {
    if(move==="Up" || move==="Down") {
        solveColumns(gameState,move);
    }
    else {
        solveRows(gameState,move);
    }
}

export function initializeGame(r, c) {
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
    return game;
}

let randomTiles = [2,4,8];

export function setRandomTile(gameState) {
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
    if(emptyPlaces.length===0) return false;
    let rand = Math.floor(Math.random()*emptyPlaces.length);
    gameState[emptyPlaces[rand][0]][emptyPlaces[rand][1]] = randomTiles[Math.floor(Math.random()*randomTiles.length)];
    return true;
}