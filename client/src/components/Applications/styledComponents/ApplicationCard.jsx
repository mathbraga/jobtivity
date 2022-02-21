import styled from "styled-components";

import { ApplicationCardContent } from "./ApplicationCardContent";

export const ApplicationCardStyles = styled.div`
    display: ${props => props.displayType};

    height: auto;

    padding: 12px;
    margin-bottom: 0.8vw;

    border: 1px solid ${props => props.borderColor};
    border-radius: 4px;

    transition: box-shadow 100ms, transform 100ms;

    &:hover{
        box-shadow: 2px 2px 8px #cacaca;
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
