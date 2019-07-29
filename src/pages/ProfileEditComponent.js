import React from 'react';
import Profile from '../components/ProfileComponent';
import NavBar from '../components/NavBarComponent';
import '../styles/ProfileNewStyle.css';
import ProfileForm from '../components/ProfileFormComponent';

class ProfileEdit extends React.Component {
    state = {
        firstName: '',
        lastName:'',
        email:'',
        jobTitle:'',
        twitter:''
    }

    handleChange = e => {
        console.log({
            name: e.target.name,
            value: e.target.value,
        });

        this.setState(
            {
            [e.target.name] : e.target.value
        }
     )
}

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
                                
                                firstName={this.state.firstName}
                                lastName={this.state.lastName}
                                twitter={this.state.twitter}
                                avatarUrl='https://eafitrequisitos.s3.us-east-2.amazonaws.com/john.png'
                            />
                        </div>
                        <div className='col-6'>
                            <ProfileForm
                             onChange={this.handleChange}
                             firstName={this.state.firstName}
                             lastName={this.state.lastName}
                             twitter={this.state.twitter}
                             avatarUrl='https://eafitrequisitos.s3.us-east-2.amazonaws.com/john.png'
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileEdit;