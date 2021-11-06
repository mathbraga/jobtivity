import styled from "styled-components";

const statusTypeToColor = (type) => {
    const status = {
        "Contact": "green",
        "Awaiting": "grey"
    };

    return status[type];
}

const ApplicationCardHeaderStyles = styled.div`
    .card--header{
        width: 100%;
        box-shadow: var(--color-title-underline) 0 1px 0;
        margin-bottom: 8px;
        padding-bottom: 4px;
    }

    .card--status_badge{
        display: flex;
        position: relative;
        justify-content: flex-start;
        align-items: center;
    }

    .card--status_button{
        width: max-content;
        height: auto;
        padding: 4px 8px;

        color: white;
        background-color: ${props => statusTypeToColor(props.status)};
        
        border-radius: 4px;
        border: none;
    }

    .card--status_dropdown{
        display: none;
        position: relative;
        width: 100%;
    }

    .card--status_badge:hover .card--status_dropdown{
        display: inline-block;
    }
`;

const StatusDropdownButton = styled.div`
    display: inline;
    padding: 4px 8px;
    margin-left: 8px;

    color: white;
    background-color: ${props => statusTypeToColor(props.status)};
    
    border-radius: 4px;
    border: none;
`;

const StatusDropdownButtonContainer = (props) => {
    return(
        <StatusDropdownButton status={props.status}>{props.status}</StatusDropdownButton>
    );
}

export const ApplicationCardHeader = (props) => {
    return(
        <ApplicationCardHeaderStyles status={props.status}>
            <div className="card--header">
                <div className="card--status_badge">
                    <div className="card--status_button">{props.status}</div>
                    <div className="card--status_dropdown">
                        <StatusDropdownButtonContainer status="Contact" />
                        <StatusDropdownButtonContainer status="Awaiting" />
                    </div>
                </div>
            </div>
        </ApplicationCardHeaderStyles>
    );
}
