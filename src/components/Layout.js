import React from 'react';

import NavBar from '../components/NavbarComponent';




const Layout = (props) =>{
    return(
        <React.Fragment>
            <NavBar />
            {props.children}
        </React.Fragment>
    )

}

export default Layout;