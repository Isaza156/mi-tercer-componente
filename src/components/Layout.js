import React from 'react';

import Navbar from '../components/NavbarComponent';




const Layout = (props) =>{
    return(
        <React.Fragment>
            <Navbar />
            {props.children}
        </React.Fragment>
    )

}

export default Layout;