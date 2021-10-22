import React from "react";

import { 
    PageHeaderBadge,
    PageHeaderContainer 
} from "./styledComponents";

const PageHeader = () => {
    return(
        <PageHeaderContainer>
            <PageHeaderBadge />
        </PageHeaderContainer>
    );
}

export default PageHeader;