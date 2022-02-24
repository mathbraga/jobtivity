import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useWindowWidth } from "../../globalHelperFunctions/hooks";

import styled from "styled-components";

import { 
    PageHeaderBadge,
    PageHeaderContainer,
    PageHeaderButton,
    PageHeaderButtonContainer,
    PageHeaderShadow,
    PageHeaderMenu,
    MenuButton,
    HeaderButtonsContainer,
    ThemeToggle
} from "./styledComponents";

import listIcon from "../../assets/Icons/ListIcon.png";
import historyIcon from "../../assets/Icons/HistoryIcon.png";

const PageHeader = () => {
    const width = useWindowWidth();
    const currentPath = useLocation().pathname;
    const isScreenSmall = width > 640 ? false : true;
    const [headerClass, setHeaderClass] = useState("");

    const handleMenu = (event) => {
        const clickedElement = event.target.id;

        if(clickedElement === "menu--button"){
            if(!headerClass)
                setHeaderClass("collapsed");
            else{
                setHeaderClass("");
            }
        }
        else if(clickedElement !== "header--menu"){
            setHeaderClass("");
        }
    }

    useEffect(() => {
        window.addEventListener('click', handleMenu);

        return () => {
            window.removeEventListener('click', handleMenu);
        }
    });

    const returnHeaderLinks = () => {
        const className = isScreenSmall ? "button--highlighted" : ""

        const highlightButton = (path) => {
            return path === currentPath ? className : "";
        }
        
        return(
            <>
                <Link to="/applications">
                    <PageHeaderButton
                        smallScreen={isScreenSmall}
                        className={highlightButton("/applications")}
                    >
                        <img src={listIcon} alt="" />
                        Applications
                    </PageHeaderButton>
                </Link>
                <Link to="/history">
                    <PageHeaderButton 
                        smallScreen={isScreenSmall}
                        className={highlightButton("/history")}
                    >
                        <img src={historyIcon} alt="" />
                        History
                    </PageHeaderButton>
                </Link>
            </>
        );
    }

    return(
        <>
            <PageHeaderContainer>
                <HeaderButtonsContainer>
                    {isScreenSmall && <MenuButton id={"menu--button"} />}
                    <PageHeaderBadge />
                    {!isScreenSmall &&
                    <PageHeaderButtonContainer>
                        {returnHeaderLinks()}
                    </PageHeaderButtonContainer>}
                </HeaderButtonsContainer>
                <ThemeToggle />
            </PageHeaderContainer>
            <PageHeaderShadow />
            {isScreenSmall &&
            <PageHeaderMenu className={headerClass} id={"header--menu"}>
                {returnHeaderLinks()}
            </PageHeaderMenu>}
        </>
    );
}

export default PageHeader;