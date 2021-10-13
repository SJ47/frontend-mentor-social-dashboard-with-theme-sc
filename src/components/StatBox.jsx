import React from "react";
import { StyledStatBox } from "./StatBox.styled";

const StatBox = ({
    socialIcon,
    number,
    text,
    difference,
    arrow,
    numbersDown,
}) => {
    return (
        <StyledStatBox arrow={arrow} numbersDown={numbersDown}>
            <div>
                <p>{text}</p>
                <img src={socialIcon} alt="social media icon" />
            </div>
            <div>
                <span>{number}</span>
                <img src={arrow} alt="arrow icon" />
                <span>{difference}%</span>
            </div>
        </StyledStatBox>
    );
};

export default StatBox;
