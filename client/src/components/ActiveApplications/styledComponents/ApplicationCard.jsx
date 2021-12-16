import styled from "styled-components";

import { ApplicationCardContent } from "./ApplicationCardContent";

const ApplicationCardStyles = styled.div`
    width: 60%;
    height: auto;

    padding: 12px;
    margin-bottom: 0.8vw;

    border: 1px solid var(--color-alternative);
    border-radius: 4px;
`;

export const ApplicationCard = (props) => {
    return(
        <ApplicationCardStyles>
            <ApplicationCardContent {...props} />
        </ApplicationCardStyles>
    );
}
