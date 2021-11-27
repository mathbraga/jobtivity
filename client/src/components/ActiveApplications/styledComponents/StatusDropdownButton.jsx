import styled from "styled-components";
import { useContext } from "react";
import storageContext from "../../../context/storageContext";

import { statusTypeToColor } from "./helpers";

const StatusDropdownButtonContainer = styled.button`
    display: inline;
    padding: 4px 8px;
    margin-left: 8px;

    color: white;
    background-color: ${props => statusTypeToColor(props.status)};
    
    border-radius: 4px;
    border: none;
    box-shadow: var(--button-shadow);

    cursor: pointer;

    :active{
        box-shadow: var(--button-shadow-active);
    }
`;

export const StatusDropdownButton = (props) => {
    const { applicationsList, setApplications } = useContext(storageContext);

    const handleStatusChange = () => {
        const newStatus = props.status;
        const newApplicationsData = { ...applicationsList[props.index], newStatus }
        var updatedApplications = applicationsList;
        updatedApplications[props.index] = newApplicationsData;
        setApplications(updatedApplications);
    }

    return(
        <StatusDropdownButtonContainer 
            status={props.status}
            onClick={handleStatusChange}
        >
            {props.status}
        </StatusDropdownButtonContainer>
    );
}