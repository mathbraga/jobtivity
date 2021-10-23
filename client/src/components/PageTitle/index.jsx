import React from "react";

import { PageTitleContainer } from "./styledComponents/PageTitleContainer";

const PageTitle = (props) => {
    return(
        <PageTitleContainer>
            {props.pageTitle}
        </PageTitleContainer>
    );
}

export default PageTitle;
