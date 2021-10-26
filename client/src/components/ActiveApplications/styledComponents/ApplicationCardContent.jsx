import styled from "styled-components";

const ApplicationCardContentStyles = styled.div`
    display: grid;
    grid-template-columns: [col1] 40% [col2] auto [col4] 40% [col5];
    grid-template-rows: [rowstart] 30% [rowsecond] auto [rowthird] 30% [rowend];
    justify-items: start;

    .content--status{
        grid-column: col1 / col2;
        grid-row: rowstart / rowsecond;
    }
    .content--company{
        grid-column: col4 / col5;
        grid-row: rowstart / rowsecond;
    }
    .content--date{
        grid-column: col1 / col2;
        grid-row: rowthird / rowend;
    }
    .content--site{
        grid-column: col4 / col5;
        grid-row: rowthird / rowend;
    }
`;

export const ApplicationCardContent = () => {
    return(
        <ApplicationCardContentStyles>
            <div className="content--status">Status</div>
            <div className="content--company">Company Name</div>
            <div className="content--date">23/10/2021</div>
            <div className="content--site">Website</div>
        </ApplicationCardContentStyles>
    )
}
