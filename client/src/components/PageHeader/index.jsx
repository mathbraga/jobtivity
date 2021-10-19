import React from "react";

import PageHeaderContent from "./PageHeaderContent/PageHeaderContent";

import "./styles.sass";

const PageHeader = () => {
    return(
        <div className="pageheader">
            <PageHeaderContent />
        </div>
    );
}

export default PageHeader;