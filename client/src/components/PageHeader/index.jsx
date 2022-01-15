import React from "react";

import { 
    PageHeaderBadge,
    PageHeaderContainer,
    PageHeaderButton
} from "./styledComponents";

const PageHeader = () => {
    return(
        <PageHeaderContainer>
            <PageHeaderBadge />
        </PageHeaderContainer>
    );
}

export default PageHeader;