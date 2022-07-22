import React from "react";

function SettingsButton({label, isActive, clickHandler}) {
    return (
        <div className={isActive ? "activeButton settingsButton" : "settingsButton"} onClick={() => clickHandler(label)}>
            <span className="buttonLabel">{label}</span>
        </div>
    );
}

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
        <div className="topSettings">
            <div>{`Rows:${rows} Colums:${columns}`}</div>
            <div className="buttonsRibbon">
                <SettingsButton isActive={true} label={"Rows+"} clickHandler={() => adjustRowsAndColumns({operand:"r",operation:"+"})} />
                <SettingsButton isActive={true} label={"Rows-"} clickHandler={() => adjustRowsAndColumns({operand:"r",operation:"-"})} />
                <SettingsButton isActive={true} label={"Cols+"} clickHandler={() => adjustRowsAndColumns({operand:"c",operation:"+"})} />
                <SettingsButton isActive={true} label={"Cols-"} clickHandler={() => adjustRowsAndColumns({operand:"c",operation:"-"})} />
                <SettingsButton isActive={true} label={"StartGame!"} clickHandler={() => initGame()} />
            </div>
            <div className="buttonsRibbon">
                <SettingsButton isActive={true} label={"Up"} clickHandler={move} />
                <SettingsButton isActive={true} label={"Down"} clickHandler={move} />
                <SettingsButton isActive={true} label={"Left"} clickHandler={move} />
                <SettingsButton isActive={true} label={"Right"} clickHandler={move} />
            </div>
        </div>
    );
}

export default SettingsPane;