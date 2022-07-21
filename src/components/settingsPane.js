import React from "react";

function SettingsPane({rows, columns, setRows, setColumns, initGame, move, undoMove}) {
    const adjustRowsAndColumns = ({operand, operation}) => {
        switch(operation) {
            case "-":
                switch(operand) {
                    case "r":
                        setRows(rows-1);
                        break;
                    case "c":
                        setColumns(columns-1);
                        break;
                    default:;
                }
                break;
            case "+":
                switch(operand) {
                    case "r":
                        setRows(rows+1);
                        break;
                    case "c":
                        setColumns(columns+1);
                        break;
                    default:;
                }
                break;
            default:;
        }
    };

    return(
        <div>
            <div>
                <button onClick={() => adjustRowsAndColumns({operand:"r",operation:"+"})}>Rows+</button>
                <button onClick={() => adjustRowsAndColumns({operand:"r",operation:"-"})}>Rows-</button>
                <button onClick={() => adjustRowsAndColumns({operand:"c",operation:"+"})}>Cols+</button>
                <button onClick={() => adjustRowsAndColumns({operand:"c",operation:"-"})}>Cols-</button>
                <button onClick={() => initGame()}>Start Game!</button>
            </div>
            <div>{`Rows:${rows} Colums:${columns}`}</div>
            <div>
                <button onClick={() => move("up")}>Up</button>
                <button onClick={() => move("down")}>Down</button>
                <button onClick={() => move("left")}>Left</button>
                <button onClick={() => move("right")}>Right</button>
                <button onClick={() => undoMove()}>Undo</button>
            </div>
        </div>
    );
}

export default SettingsPane;