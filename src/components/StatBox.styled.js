import styled from "styled-components";

export const StyledStatBox = styled.div`
    background: var(--color-lt-light-grayish-blue-card-bg);
    padding: 1em 0;
    margin: .5em 0;
    border-radius: var(--radius-corner-small);
    text-align: center;

    div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        margin: 0 1.5em;
        font-weight: var(--fw-bold);

        img {
            align-self: center;
        }

        p {
            opacity: 0.55;
        }
    }

    div:nth-child(2) {
        display: flex;
        justify-content: space-between;
        margin: 0 1.5em;
        padding-top: .5em;

        img {
            align-self: center;
            position: relative;
            right: -6.9em;
            top: -.4em;
        }

        span:first-of-type {
            font-size: 1.8rem;
        }

        span:last-of-type {
        color: ${props => (props.numbersDown ? "red" : "var(--color-lime-green)")};
        font-weight: var(--fw-bold);
    }
        
    }

`;