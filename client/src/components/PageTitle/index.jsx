import React from "react";

import { PageTitleContainer } from "./styledComponents/PageTitleContainer";

const PageTitle = (props) => {
    const pageTitle = props.pageTitle;

    return(
        <PageTitleContainer>
            {pageTitle}
        </PageTitleContainer>
    );
}

export default PageTitle;
