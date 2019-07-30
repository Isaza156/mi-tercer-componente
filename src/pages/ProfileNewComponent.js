import React from 'react';
import './styles/ProfileNewStyle.css'
import Profile from '../components/ProfileComponent';
import ProfileForm from '../components/ProfileFormComponent';


class ProfileNew extends React.Component {

    state = { form: {
        firstName: '',
        lastName: '',
        email:'',
        jobTitle:'',
        twitter:''
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
                <div className="ProfileNew__hero">
                    <span className="ProfileNew__hero-text">
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
                                    avatarUrl = "https://s3.us-east-2.amazonaws.com/eafitrequisitos/avataaars.png"
                                />
                        </div>
                        <div className="col-6">
                            <h1>Nuevo Asistente</h1>
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

export default ProfileNew;