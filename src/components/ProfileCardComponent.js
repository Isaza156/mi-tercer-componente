import React, { Component } from 'react';
import '../pages/styles/ProfileListStyle.css';
import tw_logo from '../images/icon-twitter.png';
import { Link } from 'react-router-dom';

class ProfileCard extends Component {
    state = {  }
    render() { 
        return (
            <ul className="list-unstyled">
                {
                    this.props.profiles.map(profile =>{
                        return(
                            <li key={profile.id} className="ProfileList__section-name-list">
                                <Link className="d-flex text-reset text-decoration-none" to={`/profile/${profile.id}`}>
                                    <img className='ProfileList__avatar-list' src={profile.avatarUrl} alt="Mi avatar" />
                                    <div>
                                        {profile.firstName} {profile.lastName}
                                        <br />
                                        {profile.jobTitle}
                                        <br />
                                        <img className='tw__logo'  src={tw_logo} alt="twitter logo" />
                                        <span className='twitter__blue_font'>{profile.twitter}</span>
                                    </div>
                                </Link>     
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

export default ProfileCard;