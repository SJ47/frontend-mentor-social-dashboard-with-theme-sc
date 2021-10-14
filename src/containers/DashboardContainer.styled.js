import styled from "styled-components";

export const StyledDashboardContainer = styled.div`
    /* background: orange; */
    background: ${(props) => props.theme.colors.bg};
    /* color: orange; */
    /* height: 100vh; */
    width: 300px;
    padding: 1em;
    
    // Grid setup
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
        "header"
        "subheader"
        "theme-switch"
        "follower-box"
        "overview-header"
        "stat-box";
    
    margin: 1em;

    hr {
        background: ${(props) => props.theme.colors.darkFg};
        opacity: .2;
        border: none;
        height: .01em;
        margin-bottom: 0;
        margin-top: 1em;
    }

    header {
        grid-area: header;
        > h3 {
            color: ${(props) => props.theme.colors.headerAndNumberText};
            
            margin-bottom: 0;
            padding-bottom: 0;
            letter-spacing: .04em;
            /* opacity: 1; */
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
        padding-top: .5em
    }

`;

export const StyledModeSwitchContainer = styled.div`
    grid-area: theme-switch;
    display: flex;
    justify-content: space-between;

    > p {
        color: ${(props) => props.theme.colors.darkFg};
        font-size: 12px;
        opacity: .6;
        font-weight: var(--fw-bold);
    }

`;

export const StyledFollowerContainer = styled.div`
    grid-area: follower-box;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    
`;

export const StyledStatContainer = styled.div`
    grid-area: stat-box;
    display: flex;
    flex-direction: column;
    /* gap: 0.25rem; */
    /* padding-top: 0; */
`;
