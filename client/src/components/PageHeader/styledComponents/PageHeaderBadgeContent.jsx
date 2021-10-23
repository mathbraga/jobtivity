import styled from "styled-components"; 

const BadgeStyles = styled.div`
    display: inline-flex;
    align-items: center;

    div{
        font-family: "Londrina Outline";
        font-size: 1.4rem;
        font-weight: 800;
        color: var(--color-alternative);
    }
    
    span{
        position: relative;
        top: 2px;

        color: var(--color-primary);
    }
`;

export const PageHeaderBadgeContent = () => {
    return(
        <BadgeStyles>
            <div>JOB</div><span>tivity</span>
        </BadgeStyles>
    )
}