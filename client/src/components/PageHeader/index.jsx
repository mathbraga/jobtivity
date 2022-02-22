import React from "react";
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

const PageHeader = () => {
    const width = useWindowWidth();
    const isScreenSmall = width > 640 ? false : true;
    const returnHeaderLinks = () => {
        return(
            <>
                <PageHeaderButton>
                    <Link to="/applications">
                        Applications
                    </Link>
                </PageHeaderButton>
                <PageHeaderButton>
                    <Link to="/history">
                        History
                    </Link>
                </PageHeaderButton>
            </>
        );
    }

    return(
        <>
            <PageHeaderContainer>
                {isScreenSmall && <MenuButton />}
                <PageHeaderBadge />
                {!isScreenSmall &&
                <PageHeaderButtonContainer>
                    {returnHeaderLinks()}
                </PageHeaderButtonContainer>}
            </PageHeaderContainer>
            <PageHeaderShadow />
            {isScreenSmall &&
            <PageHeaderMenu>
                {returnHeaderLinks()}
            </PageHeaderMenu>}
        </>
    );
}

export default PageHeader;