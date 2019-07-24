import React from 'react';
import logoGeek from '../images/logo-ag-min.png';
import "../styles/ProfileStyle.css"


class Profile extends React.Component {
    render(){
         const {
             firstName,
             lastName,
             avatarUrl,
             jobTitle,
             twitter
         } = this.props;
        
        return(
            <div className="Profile">
                <div className="Profile__header">
                    <img className="Profile__logo" src={logoGeek} alt="Logo Academia Geek" />
                </div>
                <div className="Profile__section-name">
                    <img className="Profile__avatar" src={avatarUrl} alt="Avatar" />
                    <h1>{firstName} <br/> {lastName} </h1>
                </div>
                <div className="Profile__section-info">
                    <h3>{jobTitle}</h3>
                    <span> @{twitter} </span>
                </div>
                <div className="Profile__footer">
                    <p>#GeekConf</p>
                </div>
            </div>
        )
    }
}

export default Profile;