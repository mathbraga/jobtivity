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
    box-shadow: -4px 0 4px 0 rgba(0, 0, 0, 0.2) inset,
                    0 -4px 4px 0 rgba(0, 0, 0, 0.2) inset,
                    4px 0 4px 0 rgba(255, 255, 255, 0.2) inset,
                    0 4px 4px 0 rgba(255, 255, 255, 0.2) inset;

    cursor: pointer;

    :active{
        box-shadow: -4px 0 0.5rem 0 rgba(0, 58, 150, 1) inset,
                        0 -4px 0.5rem rgba(0, 58, 150, 1) inset,
                        0 4px 0.5rem rgba(0, 58, 150, 1) inset,
                        4px 0 0.5rem rgba(0, 58, 150, 1) inset;
    }
`;

export const StatusDropdownButton = (props) => {
    return(
        <StatusDropdownButtonContainer status={props.status}>{props.status}</StatusDropdownButtonContainer>
    );
}