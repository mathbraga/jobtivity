import React from "react";

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
                <PageHeaderButton>Applications</PageHeaderButton>
                <PageHeaderButton>History</PageHeaderButton>
            </PageHeaderButtonContainer>
        </PageHeaderContainer>
    );
}

export default PageHeader;