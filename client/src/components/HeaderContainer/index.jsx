import React from "react";

import './styles.sass';

import HeaderContent from "./HeaderContent";

function HeaderContainer(){
    return(
        <div className="pageheader">
            <HeaderContent />
        </div>
    );
}

export default HeaderContainer;