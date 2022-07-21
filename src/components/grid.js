import React from "react";
import PlayingArea from "../components/playingArea";

function PlayingRow({row}) {
    return (
        <div className="playingRow">
            {row.map((val) => <PlayingArea value={val}/>)}
        </div>
    );
}

function Grid({gameState}) {
    return (
        <div className="grid">
            {gameState.map((row) => <PlayingRow row={row}/>)}
        </div>
    );
}

export default Grid;