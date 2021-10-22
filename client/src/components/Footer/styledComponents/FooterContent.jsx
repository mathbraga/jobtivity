import styled from "styled-components";

const FooterContentStyles = styled.a`
    display: flex;
    align-items: center;

    margin-right: 12px;

    color: white;

    text-decoration: none;

    img{
        width: 70%;
    }
`;

export const FooterContent = (props) => {
    return(
        <FooterContentStyles href={props.contentLink} target="_blank" rel="noreferrer">
            <img src={props.iconUrl} alt={props.iconAlt}/>
        </FooterContentStyles>
    );
}
