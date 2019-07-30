import React from 'react';
import './styles/ProfileEditStyle.css'
import Profile from '../components/ProfileComponent';
import ProfileForm from '../components/ProfileFormComponent';


class ProfileEdit extends React.Component {

    state = { form: {
        firstName: 'Daphney',
        lastName: 'Torphy',
        email:'Ron61@hotmail.com',
        jobTitle:'National Markets Office',
        twitter:'DaphneyTorphy96105'
    }};

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    render(){
        return (
            <React.Fragment>
                <div className="ProfileEdit__hero">
                    <span className="ProfileEdit__hero-text">
                        "Bienvenido a la conferencia Geek! ,
                        esperamos todas nuestras charlas sean de tu total interes"
                    </span>
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
                                    avatarUrl = "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
                                />
                        </div>
                        <div className="col-6">
                            <h1>Editar Asistente</h1>
                            <ProfileForm onChange={this.handleChange} 
                                formValues =  {this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProfileEdit;