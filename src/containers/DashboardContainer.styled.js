import styled from "styled-components";

export const StyledDashboardContainer = styled.div`
    /* background: orange; */
    background: ${(props) => props.theme.colors.bg};
    /* height: 100vh; */
    width: 250px;
    
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
        margin-bottom: 0;
        margin-top: 1em;
    }

    header {
        grid-area: header;

        > h3 {
            margin-bottom: 0;
            padding-bottom: 0;
            letter-spacing: .04em;
        }

        p {
            margin-top: 0.2em;
            font-size: 12px;
            opacity: .6;
            font-weight: var(--fw-bold);
        }
    }

    > h3 {  // Overview - today header
        grid-area: overview-header;
        opacity: 0.5;
        padding-top: .5em
    }

`;

export const StyledModeSwitchContainer = styled.div`
    grid-area: theme-switch;
    display: flex;
    justify-content: space-between;

    > p {
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
