import styled from "styled-components";

export const StyledFollowerBox = styled.div`
    /* grid-area:follower-box; */
    background: ${(props) => props.theme.colors.cardBg};
    padding: 1em 0;
    margin: .5em 0;
    border-radius: var(--radius-corner-small);
    text-align: center;

    border-top: 3px solid ${props => (props.socialColor === "var(--color-instagram)" ? "transparent" : props.socialColor)};
    border-image: ${props => (props.socialColor === "var(--color-instagram)" && props.socialColor)};

    div {
        display: flex;
        justify-content: center;
        /* background-color: orange; */
    }

    img {
        margin-right: .4em;
        align-self: center;
    }

    h1 {
        color: ${(props) => props.theme.colors.headerAndNumberText};
        margin-top: 1rem;
        margin-bottom: 0;
        font-size: 42px;
    }

    div > p {
        font-size: 10px;
        color: ${(props) => props.theme.colors.darkFg};
    }

    div:last-of-type > p {
        color: ${props => (props.numbersDown ? "red" : "var(--color-lime-green)")};
        font-weight: var(--fw-bold);
    }

    > p {
        color: ${(props) => props.theme.colors.darkFg};
        opacity: .5;
        margin-top: 0;
        margin-bottom: -1em;
        letter-spacing: .2rem;
        font-size: 12px;
    }

`;