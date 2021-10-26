import React from "react";

import { 
    FooterContainer,
    FooterContent 
} from "./styledComponents";

import GithubIcon from "../../assets/Icons/GithubIcon.png";
import LinkedinIcon from "../../assets/Icons/LinkedinIcon.png";

const gitUrl = "https://github.com/mathbraga";
const gitAltText = "Github Profile";

const linkedinUrl = "https://www.linkedin.com/in/matheus-braga-730563149/";
const linkedinAltText = "LinkedIn Profile";

const Footer = () => {
    return(
        <FooterContainer>
            <FooterContent contentLink={gitUrl} iconUrl={GithubIcon} iconAlt={gitAltText} />
            <FooterContent contentLink={linkedinUrl} iconUrl={LinkedinIcon} iconAlt={linkedinAltText} />
        </FooterContainer>
    );
}

export default Footer;