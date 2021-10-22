import React from "react";

import { 
    FooterContainer,
    FooterContent 
} from "./styledComponents";

import GithubIcon from "../../assets/Icons/GithubIcon.png";

const gitUrl = "https://github.com/mathbraga";
const gitAltText = "Github Profile";

const Footer = () => {
    return(
        <FooterContainer>
            <FooterContent contentLink={gitUrl} iconUrl={GithubIcon} iconAlt={gitAltText} />
        </FooterContainer>
    );
}

export default Footer;