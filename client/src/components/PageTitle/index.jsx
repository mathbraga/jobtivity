import React from "react";

import { 
    ApplicationCounter, 
    NewApplicationButton, 
    PageTitleContainer, 
    Title 
} from "./styledComponents";

const PageTitle = (props) => {
    const pageTitle = props.pageTitle;

    return(
        <PageTitleContainer>
            <Title title={pageTitle}/>
            <ApplicationCounter count={"(1/20)"}/>
            {props.hasAddButton ? <NewApplicationButton /> : null}
        </PageTitleContainer>
    );
}

export default PageTitle;
