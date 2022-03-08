import styled from "styled-components";

export const MainPageContainer = styled.div`
    --color-primary: white;
    --color-primary-alternative: white;
    --color-secondary: black;
    --color-alternative: gold;
    --color-card: white;
    --color-card-elements: black;
    --color-form-input: rgba(204, 204, 204, 0.4);
    --color-badge-border: black;
    --color-red-tone: #c22b2b;
    --color-header-shadow: #b1c3c3;
    --color-title-underline: rgba(17, 17, 26, 0.1);
    --color-page-button-shadow: 0px 1px 2px #111;
    --color-application-border: gold;
    --color-history-border: #c22b2b;
    --color-url: #1870F0;
    --card-box-shadow: 2px 2px 8px #cacaca;

    --button-shadow: -4px 0 4px 0 rgba(0, 0, 0, 0.2) inset,
                    0 -4px 4px 0 rgba(0, 0, 0, 0.2) inset,
                    4px 0 4px 0 rgba(255, 255, 255, 0.2) inset,
                    0 4px 4px 0 rgba(255, 255, 255, 0.2) inset;

    --button-shadow-active: -4px 0 0.5rem 0 rgba(0, 8, 20, 0.4) inset,
                            0 -4px 0.5rem rgba(0, 8, 20, 0.4) inset,
                            0 4px 0.5rem rgba(0, 8, 20, 0.4) inset,
                            4px 0 0.5rem rgba(0, 8, 20, 0.4) inset;

    &.theme--dark{
        --color-primary: #15141a;
        --color-primary-alternative: black;
        --color-secondary: white;
        --color-card: #343341;
        --color-card-elements: #ccc;
        --color-form-input: rgba(204, 204, 204, 0.6);
        --color-badge-border: gold;
        --color-header-shadow: black;
        --color-title-underline: rgba(255, 255, 255, 0.5);
        --color-page-button-shadow: 0px 1px 2px white;
        --color-url: #74A9F6;
        --card-box-shadow: 2px 2px 8px #797979;
    }

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--color-primary);

    width: 100vw;
    min-height: 100vh;
`;
