import React from "react";
import { Link } from "react-router-dom";

import { 
    PageHeaderBadge,
    PageHeaderContainer,
    PageHeaderButton,
    PageHeaderButtonContainer
} from "./styledComponents";

const PageHeader = () => {
    return(
        <PageHeaderContainer>
            <PageHeaderBadge />
            <PageHeaderButtonContainer>
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
            </PageHeaderButtonContainer>
        </PageHeaderContainer>
    );
}

export default PageHeader;