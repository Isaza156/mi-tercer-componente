import React from 'react';
import "./styles/NavbarStyle.css";
import logo from '../images/logo-ag-min.png';

import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render(){
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/">
                        <img className="Navbar__brand-logo" src={logo} alt="Logo" />
                        <h4 className="font-weight-liht">Conferencia </h4> 
                        <h4 className="font-weight-bold">Geek</h4>
                    </Link>
                </div>             
            </div>
        );
    }
}

export default Navbar;