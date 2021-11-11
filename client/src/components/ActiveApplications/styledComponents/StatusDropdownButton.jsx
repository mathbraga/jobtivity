import styled from "styled-components";

import { statusTypeToColor } from "./helpers";

const StatusDropdownButtonContainer = styled.button`
    display: inline;
    padding: 4px 8px;
    margin-left: 8px;

    color: white;
    background-color: ${props => statusTypeToColor(props.status)};
    
    border-radius: 4px;
    border: none;

    cursor: pointer;
`;

export const StatusDropdownButton = (props) => {
    return(
        <StatusDropdownButtonContainer status={props.status}>{props.status}</StatusDropdownButtonContainer>
    );
}