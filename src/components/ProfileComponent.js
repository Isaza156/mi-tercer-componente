import React from 'react';
import logoGeek from '../images/logo-ag-min.png';
import "./styles/ProfileStyle.css"

class Profile extends React.Component {
    render(){
        return(
            <div className="Profile">
                <div className="Profile__header">
                    <img className="Profile__logo" src={logoGeek} alt="Logo Academia Geek" />
                </div>
                <div className="Profile__section-name">
                    <img className="Profile__avatar" src={this.props.avatarUrl} alt="Avatar" />
                    <h1>{this.props.firstName} <br/> {this.props.lastName} </h1>
                </div>
                <div className="Profile__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <span> @{this.props.twitter} </span>
                </div>
                <div className="Profile__footer">
                    <p>#GeekConf</p>
                </div>
            </div>
        )
    }
}

export default Profile;