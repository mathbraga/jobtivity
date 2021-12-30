import styled from "styled-components";

import { returnDisplayValue } from "./helpers";

export const ApplicationFormContainer = styled.form`
    display: ${props => returnDisplayValue(props.isVisible)};
    flex-direction: column;

    padding: 12px;
    margin-bottom: 12px;

    border: 1px solid var(--color-alternative);
    border-radius: 4px;

    width: 60%;
    height: auto;
`;
