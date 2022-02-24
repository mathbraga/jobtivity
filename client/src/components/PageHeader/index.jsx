import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useWindowWidth } from "../../globalHelperFunctions/hooks";

import { 
    PageHeaderBadge,
    PageHeaderContainer,
    PageHeaderButton,
    PageHeaderButtonContainer,
    PageHeaderShadow,
    PageHeaderMenu,
    MenuButton
} from "./styledComponents";

import listIcon from "../../assets/Icons/ListIcon.png";
import historyIcon from "../../assets/Icons/HistoryIcon.png";

const PageHeader = () => {
    const width = useWindowWidth();
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
        const smallScreen = isScreenSmall ? true : false;
        
        return(
            <>
                <Link to="/applications">
                    <PageHeaderButton smallScreen={smallScreen}>
                        <img src={listIcon} alt="" />
                        Applications
                    </PageHeaderButton>
                </Link>
                <Link to="/history">
                    <PageHeaderButton smallScreen={smallScreen}>
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
                {isScreenSmall && <MenuButton id={"menu--button"} />}
                <PageHeaderBadge />
                {!isScreenSmall &&
                <PageHeaderButtonContainer>
                    {returnHeaderLinks()}
                </PageHeaderButtonContainer>}
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