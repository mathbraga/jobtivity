import styled from "styled-components";

const ApplicationCardContentStyles = styled.div`
    display: grid;
    grid-template-columns: [col1] 25% [col2] 25% [col3] 25% [col4] 25% [col5];
    grid-template-rows: [rowstart] 40% [rowsecond] 20% [rowthird] 40% [rowend];
    justify-items: end;
`;

export const ApplicationCardContent = () => {
    return(
        <ApplicationCardContentStyles>
            <div>Status</div>
            <div>Company Name</div>
            <div>23/10/2021</div>
            <div>Website</div>
        </ApplicationCardContentStyles>
    )
}
