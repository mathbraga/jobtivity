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
        justify-content: center;
        align-items: center;

        width: max-content;
        height: auto;
        padding: 4px 8px;

        color: white;
        background-color: ${props => statusTypeToColor(props.status)};
        
        border-radius: 4px;
    }
`;

export const ApplicationCardHeader = (props) => {
    return(
        <ApplicationCardHeaderStyles status={props.status}>
            <div className="card--header">
                <div className="card--status_badge">
                    {props.status}
                </div>
            </div>
        </ApplicationCardHeaderStyles>
    );
}
