import React from "react"; 

function PlayingTile({val}) {
    return (
        <div className="playingTile">{val!==-1 ? val:null}</div>
    );
}

function PlayingArea({value}) {
    return (
        <div className="playingArea">
            <PlayingTile val={value}/>
        </div>
    );
}

export default PlayingArea;