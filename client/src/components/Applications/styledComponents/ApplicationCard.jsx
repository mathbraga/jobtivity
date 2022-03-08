import styled from "styled-components";

import { ApplicationCardContent } from "./ApplicationCardContent";

export const ApplicationCardStyles = styled.div`
    display: ${props => props.displayType};

    height: auto;

    padding: 12px;
    margin-bottom: 12px;

    border: 1px solid ${props => props.borderColor};
    border-radius: 4px;

    transition: box-shadow 100ms, transform 100ms;

    background-color: var(--color-card);

    &:hover{
        box-shadow: var(--card-box-shadow);
        transform: translate(-2px, -2px);
    }
`;

export const ApplicationCard = (props) => {
    const { 
        displayType,
        borderColor = "var(--color-application-border)",
        ...otherProps
    } = props;

    return(
        <ApplicationCardStyles displayType={displayType} borderColor={borderColor} className="autosize">
            <ApplicationCardContent {...otherProps} />
        </ApplicationCardStyles>
    );
}
