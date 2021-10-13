import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    :root {

        /* Layout sizes  */
        --layout-mobile: 375px;
        --layout-desktop: 1440px;

        /* Fonts  */
        --ff-primary: 'Inter', sans-serif;
        --fs-overview-card-headings: 14px;
        --fw-regular: 400;
        --fw-bold: 700;

        /* Colors  */
        --color-lime-green: hsl(163, 72%, 41%);
        --color-bright-red: hsl(356, 69%, 56%);
        --color-facebook: hsl(208, 92%, 53%);
        --color-twitter: hsl(203, 89%, 53%);
        --color-instagram: linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))1;
        --color-youtube: hsl(348, 97%, 39%);

        --color-toggle-dark-theme: linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%);
        --color-toggle-light-theme: hsl(230, 22%, 74%);

        // Dark theme
        --color-dt-very-dark-blue-bg: hsl(230, 17%, 14%);
        --color-dt-very-dark-blue-top-bg-pattern: hsl(232, 19%, 15%);
        --color-dt-dark-desaturated-blue-card-bg: hsl(228, 28%, 20%);
        --color-dt-desaturated-blue-text: hsl(228, 34%, 66%);
        --color-dt-white-text: hsl(0, 0%, 100%);

        // Light theme
        --color-lt-white-bg: hsl(0, 0%, 100%);
        --color-lt-very-pale-blue-top-bg-pattern: hsl(225, 100%, 98%);
        --color-lt-light-grayish-blue-card-bg: hsl(227, 47%, 96%);
        --color-lt-dark-grayish-blue-text: hsl(228, 12%, 44%);
        --color-lt-very-dark-blue-text: hsl(230, 17%, 14%);

        /* Shapes  */
        --radius-corner: 25px;
        --radius-corner-small: 3.6px;
    }

    body {
        margin: 0;
        padding: 0;
        @media (min-width: 776px) {
            /* display: flex;
            justify-content: center;
            align-items: center;
            height: 95vh; */
        }
    }

    #root {
        background: var(--color-light-grayish-cyan);
        min-width: var(--layout-mobile);
        margin: 0 auto;
        font-family: var(--ff-primary);
        border: 1px solid grey;
        width: 376px;
        padding-top: 0;

        @media (min-width: 776px) {
            background: orange;
            width: 900px;
            max-width: 1440px;
        }
    }
`;

export default GlobalStyles;