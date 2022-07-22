import React from "react"; 

function PlayingTile({value}) {
    return (
        <div className="playingTile">{value!==-1 ? value:null}</div>
    );
}

function PlayingArea({value}) {
    let className="playingArea ";
    if(value === 2 || value === 4 || value === 8) {
        className+="tc1";
    }
    else if(value === 16 || value === 32 || value === 64) {
        className+="tc2";
    }
    else if(value === 128 || value === 256 || value === 512 || value === 1024) {
        className+="tc3";
    }
    else if(value >= 2048) {
        className+="tc2048";
    }
    else {
        className+="default"
    }
    return (
        <div className={className}>
            <PlayingTile value={value}/>
        </div>
    );
}

export default PlayingArea;