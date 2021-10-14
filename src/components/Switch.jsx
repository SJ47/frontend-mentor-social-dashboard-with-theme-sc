import React from "react";
import styled from "styled-components";

const StyledSwitch = styled.div`
    /* The switch - the box around the slider */
    .switch {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 20px;
    }

    /* Hide default HTML checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 10px;
        left: 0;
        right: 0;
        bottom: -10px;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 20px;
        bottom: 2.5px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    input:checked + .slider {
        background: linear-gradient(
            to right,
            hsl(210, 78%, 56%),
            hsl(146, 68%, 55%)
        );
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196f3;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(-17px);
        -ms-transform: translateX(-17px);
        transform: translateX(-17px);
    }

    input:checked + .slider:before {
        background-color: var(--color-dt-very-dark-blue-bg);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
`;

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
