import styled from "styled-components";

export const StyledStatBox = styled.div`
    /* background: var(--color-lt-light-grayish-blue-card-bg); */
    background: ${(props) => props.theme.colors.cardBg};
    padding: 0 0 1em 0;
    margin: .5em 0;
    border-radius: var(--radius-corner-small);
    text-align: center;

    div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        margin: 0 1em;
        font-weight: var(--fw-bold);

        img {
            align-self: center;
        }

        p {
            color: ${(props) => props.theme.colors.darkFg};
            opacity: 0.55;
        }
    }

    div:nth-child(2) {
        display: flex;
        justify-content: space-between;
        margin: 0 .3em;
        padding-top: .5em;

        img {
            align-self: center;
            position: relative;
            right: .2em;
            top: -.1em;
        }

        > div > span {
            color: ${(props) => props.theme.colors.headerAndNumberText};
            font-size: 1.8rem;
        }

        > span:last-of-type {
            color: ${props => (props.numbersDown ? "red" : "var(--color-lime-green)")};
            font-size: 1em;
        }
    }
`;