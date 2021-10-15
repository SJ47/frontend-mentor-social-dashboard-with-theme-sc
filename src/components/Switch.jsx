import React from "react";
import { StyledSwitch } from "./Switch.styled";

const Switch = ({ handleThemeSwitch }) => {
    return (
        <StyledSwitch>
            <label className="switch">
                <input onClick={handleThemeSwitch} type="checkbox" />
                <span className="slider round"></span>
            </label>
        </StyledSwitch>
    );
};

export default Switch;
