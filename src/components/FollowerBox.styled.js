import styled from "styled-components";

export const StyledFollowerBox = styled.div`
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

        img {
            margin-right: .4em;
            align-self: center;
            height: 1em;
            }
    }

    div:last-of-type > img {
            height: .2em;
            margin-right: .2em;
        }

    h2 {
        color: ${(props) => props.theme.colors.headerAndNumberText};
        margin-top: .3em;
        margin-bottom: 0;
        font-size: 38px;
    }

    div > p {
        font-size: 10px;
        color: ${(props) => props.theme.colors.darkFg};
    }

    div:last-of-type > p {
        color: ${props => (props.numbersDown ? "red" : "var(--color-lime-green)")};
        font-weight: var(--fw-bold);
        margin-bottom: 0;
        margin-top: .7em;
    }

    > p {
        color: ${(props) => props.theme.colors.darkFg};
        opacity: .8;
        margin-top: 0;
        margin-bottom: -1em;
        letter-spacing: .2rem;
        font-size: 10px;
    }
`;