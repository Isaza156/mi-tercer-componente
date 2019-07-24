import React from 'react';
import Profile from '../components/ProfileComponent';
import NavBar from '../components/NavBarComponent';
import '../styles/ProfileNewStyle.css';
import ProfileForm from '../components/ProfileFormComponent';

class ProfileNew extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className='ProfileNew__hero'>
                    <span className='ProfileNew__hero-text'>
                        Bienvenidos todos a la conferencia Geek, esperamos todas nuestras charlas sean de su total interes.
                    </span>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <Profile
                                firstName='Jonathan'
                                lastName='Isaza'
                                twitter='isaza156'
                                avatarUrl='https://eafitrequisitos.s3.us-east-2.amazonaws.com/john.png'
                            />
                        </div>
                        <div className='col-6'>
                            <ProfileForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileNew;