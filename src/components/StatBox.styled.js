import styled from "styled-components";

export const StyledStatBox = styled.div`
    background: ${(props) => props.theme.colors.cardBg};
    padding: 0 0 .6em 0;
    margin: .4em 0;
    border-radius: var(--radius-corner-small);
    text-align: center;

    > div:first-of-type {
        display: flex;
        justify-content: space-between;
        margin: 0 1em;
        font-weight: var(--fw-bold);
        padding-top: .7em;
        
        img {
            align-self: center;
            height: 1em;
            margin-right: .5em;
        }

        p {
            color: ${(props) => props.theme.colors.darkFg};
            font-size: 11px;
        }
    }

    div:nth-child(2) {
        display: flex;
        justify-content: space-between;
        margin: 0 1em;
        padding-top: .5em;
        

        img {
            align-self: center;
            position: relative;
            right: .15em;
            top: -.3em;
        }

        > div > span {
            color: ${(props) => props.theme.colors.headerAndNumberText};
            font-size: 1.5em;
            margin-right: -1em;
        }

        > span:last-of-type {
            color: ${props => (props.numbersDown ? "red" : "var(--color-lime-green)")};
            font-size: .6em;
        }
    }
`;