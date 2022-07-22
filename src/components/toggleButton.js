import React from "react";

export default function ToggleButton({state, toggleFunction = () => {}}) {
    const [buttonState, setButtonState] = React.useState(state);

    const handleClick = () => {
        buttonState === "off" ? setButtonState("on") : setButtonState("off");
        toggleFunction();
    }

    return (
        <div className="toggleButtonBox" onClick={() => handleClick()}>
            <div className={buttonState === "on" ? "slider on" : "slider"}></div>
        </div>
    );
}