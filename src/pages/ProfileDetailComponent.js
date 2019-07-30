import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import logoGeek from '../images/logo-ag-min.png';

import './styles/ProfileDetailStyle.css';

import Profile from '../components/ProfileComponent';

class ProfileDetail extends Component {
    constructor(props){
        super(props);
        this.state = { form: {
            firstName: 'Daphney',
            lastName: 'Torphy',
            email:'Ron61@hotmail.com',
            jobTitle:'National Markets Office',
            twitter:'DaphneyTorphy96105'
        }};
    }
    render() { 
        return (
            <React.Fragment>
                <div className="ProfileDetail__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img className="ProfileDetail__logo" src={logoGeek} alt="Logo Geek Conf" />
                            </div>
                            <div className="col-6 ProfileDetail__hero-attendant-name">
                                <h1>Daphney Torphy</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 ">
                            <Profile    
                                    firstName = {this.state.form.firstName} 
                                    lastName = {this.state.form.lastName} 
                                    jobTitle = {this.state.form.jobTitle} 
                                    twitter = {this.state.form.twitter}
                                    email = {this.state.form.email} 
                                    avatarUrl = "https://s3.us-east-2.amazonaws.com/eafitrequisitos/avataaars.png"
                                />
                        </div>
                        <div className="col-6">
                            <h2>Acciones</h2>
                            <div>
                                <div>
                                    <Link className="btn btn-primary mb-4" to={`/profile/1/edit`}>
                                        Editar
                                    </Link>
                                </div>
                                <div>
                                    <button className="btn btn-danger">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProfileDetail;