import React from "react";

import GithubIcon from "../../../assets/Icons/GithubIcon.png";

import "./styles.sass";

const FooterContent = () => {
    return(
        <a className="footercontent" href="https://github.com/mathbraga" target="_blank" rel="noreferrer">
            <img src={GithubIcon} alt="GithubIcon" />
        </a>
    )
}

export default FooterContent;