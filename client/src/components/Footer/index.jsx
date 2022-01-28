import React from "react";

import { 
    FooterContainer,
    FooterLink,
    FooterText
} from "./styledComponents";

import GithubIcon from "../../assets/Icons/GithubIcon.png";
import LinkedinIcon from "../../assets/Icons/LinkedinIcon.png";

const gitUrl = "https://github.com/mathbraga";
const gitAltText = "Github Profile";

const linkedinUrl = "https://www.linkedin.com/in/matheus-braga-730563149/";
const linkedinAltText = "LinkedIn Profile";

const currentDate = new Date();
const footerText = `Copyright © ${currentDate.getFullYear()} Matheus Braga. All rights reserved.`;

const Footer = () => {
    return(
        <FooterContainer>
            <FooterText>{footerText}</FooterText>
            <FooterLink contentLink={gitUrl} iconUrl={GithubIcon} iconAlt={gitAltText} />
            <FooterLink contentLink={linkedinUrl} iconUrl={LinkedinIcon} iconAlt={linkedinAltText} />
        </FooterContainer>
    );
}

export default Footer;