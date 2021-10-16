import styled from "styled-components";

export const StyledDashboardContainer = styled.div`
    background: ${(props) => props.theme.colors.bg};
    width: 300px;
    padding: .5em 1em 2em 1em;
    
    // Grid setup
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
        "header"
        "theme-switch"
        "follower-box"
        "overview-header"
        "stat-box";
    margin: 1em;

    @media(min-width: 776px) {
        width: 800px;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "header theme-switch"
            "follower-box follower-box"
            "overview-header ."
            "stat-box stat-box";
        }

    hr {
        background: ${(props) => props.theme.colors.darkFg};
        opacity: .2;
        border: none;
        height: .01em;
        margin-bottom: 0;
        margin-top: 1em;

        @media(min-width: 776px) {
           display: none;
        }
    }

    header {
        grid-area: header;
        > h3 {
            color: ${(props) => props.theme.colors.headerAndNumberText};
            
            margin-bottom: 0;
            padding-bottom: 0;
            letter-spacing: .04em;
        }

        p {
            color: ${(props) => props.theme.colors.darkFg};
            margin-top: 0.2em;
            font-size: 12px;
            opacity: .6;
            font-weight: var(--fw-bold);
        }
    }

    > h3 {  // Overview - today header
        color: ${(props) => props.theme.colors.headerAndNumberText};
        grid-area: overview-header;
        opacity: ${(props) => props.theme.colors.headerAndNumberText === "var(--color-lt-very-dark-blue-text)" && ".7"};
        padding-top: .5em;
        margin-bottom: .7em;
        font-size: 1.1em;
    }

`;

export const StyledModeSwitchContainer = styled.div`
    grid-area: theme-switch;
    display: flex;
    justify-content: space-between;
    margin: .3em 0 .5em 0;

    > p {
        color: ${(props) => props.theme.colors.darkFg};
        font-size: 12px;
        opacity: .6;
        font-weight: var(--fw-bold);
    }

    @media(min-width: 776px) {
        justify-content: flex-end;
        gap: .75em;
        margin-top: 1em;
    }
`;

export const StyledFollowerContainer = styled.div`
    grid-area: follower-box;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    
    @media(min-width: 776px) {
        flex-direction: row;
        justify-content: space-evenly;
        gap: 1.25em;
        padding-top: .75em;
    }
`;

export const StyledStatContainer = styled.div`
    grid-area: stat-box;
    display: flex;
    flex-direction: column;

    @media(min-width: 776px) {
        gap: 1.25em;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;
