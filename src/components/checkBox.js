import React from "react";

export default function CheckBox({isChecked, label}) {
    const[checked, setChecked] = React.useState(isChecked);

    const handleClick = () => {
        checked ? setChecked(false) : setChecked(true);
    };

    return (
        <div className="checkBoxContainer">
            <div className="checkBox" onClick={() => handleClick()}>
                {checked ? <div className="checked"></div> : null}
            </div>
            <div>{label}</div>
        </div>
    );
}