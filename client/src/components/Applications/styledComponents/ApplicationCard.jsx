import styled from "styled-components";

import { ApplicationCardContent } from "./ApplicationCardContent";

export const ApplicationCardStyles = styled.div`
    display: ${props => props.displayType};

    width: 60%;
    height: auto;

    padding: 12px;
    margin-bottom: 0.8vw;

    border: 1px solid ${props => props.borderColor};
    border-radius: 4px;
`;

export const ApplicationCard = (props) => {
    const { 
        displayType,
        borderColor = "var(--color-application-border)",
        ...otherProps
    } = props;

    return(
        <ApplicationCardStyles displayType={displayType} borderColor={borderColor}>
            <ApplicationCardContent {...otherProps} />
        </ApplicationCardStyles>
    );
}
