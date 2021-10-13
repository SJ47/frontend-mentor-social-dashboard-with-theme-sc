import React from "react";
import { StyledFollowerBox } from "./FollowerBox.styled";

const FollowerBox = ({
    socialIcon,
    name,
    number,
    text,
    difference,
    arrow,
    socialColor,
    numbersDown,
}) => {
    return (
        <StyledFollowerBox
            socialColor={socialColor}
            arrow={arrow}
            numbersDown={numbersDown}
        >
            <div>
                <img src={socialIcon} alt="social media icon" />
                <p>{name}</p>
            </div>
            <h1>{number}</h1>
            <p>{text}</p>
            <br />
            <div>
                <img src={arrow} alt="arrow icon" />
                <p>{difference} Today</p>
            </div>
        </StyledFollowerBox>
    );
};

export default FollowerBox;
