import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toggleTheme } from "../../store/actions/toggleTheme";
import { Link, useLocation } from "react-router-dom";
import { useWindowWidth } from "../../globalHelperFunctions/hooks";

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

const PageHeader = (props) => {
    const { toggleState, updateToggle } = props;
    const width = useWindowWidth();
    const currentPath = useLocation().pathname;
    const isScreenSmall = width > 640 ? false : true;
    const [headerClass, setHeaderClass] = useState("");

    const highlightButton = (path) => {
        const className = isScreenSmall ? "button--highlighted" : ""
        
        return path === currentPath ? className : "";
    }

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

    const handleToggle = () => updateToggle()


    useEffect(() => {
        if(headerClass === "collapsed")
            window.addEventListener('click', handleMenu);

        return () => {
            window.removeEventListener('click', handleMenu);
        }
    });

    const returnHeaderLinks = () => {
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
                    {isScreenSmall && 
                        <MenuButton 
                            id={"menu--button"}
                            menuState={headerClass}
                            onClick={headerClass ? null : (e) => handleMenu(e)}
                        />
                    }
                    <PageHeaderBadge />
                    {!isScreenSmall &&
                    <PageHeaderButtonContainer>
                        {returnHeaderLinks()}
                    </PageHeaderButtonContainer>}
                </HeaderButtonsContainer>
                <ThemeToggle onClick={handleToggle} toggleState={toggleState} />
            </PageHeaderContainer>
            <PageHeaderShadow />
            {isScreenSmall &&
            <PageHeaderMenu className={headerClass} id={"header--menu"}>
                {returnHeaderLinks()}
            </PageHeaderMenu>}
        </>
    );
}

const mapStateToProps = (state) => ({
    toggleState: state.themeToggleReducer.toggleState
});

const mapDispatchToProps = (dispatch) => ({
    updateToggle: () => dispatch(toggleTheme())
});

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);