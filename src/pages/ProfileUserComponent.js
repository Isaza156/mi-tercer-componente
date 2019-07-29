import React from 'react';
import Profile from '../components/ProfileComponent';
import NavBar from '../components/NavBarComponent';
import '../styles/ProfileNewStyle.css';
import '../styles/ProfileUser.css';
import logoGeek from '../images/logo-ag-min.png';

class ProfileUser extends React.Component {
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
                <div className='container-fluid py-5 bg-azul'>
                <div className="container">
                    <img className="profLogo w-25 ml-5" src={logoGeek} alt="Logo Academia Geek" />                 
                </div>
               </div>
                <div className='container'>
                    <div className='row m-5'>
                        <div className='col-6'>
                            <Profile                                
                                firstName={this.state.firstName}
                                lastName={this.state.lastName}
                                twitter={this.state.twitter}
                                avatarUrl='https://eafitrequisitos.s3.us-east-2.amazonaws.com/john.png'
                            />
                        </div>
                        
                        <div className='col-6'>
                        <h3>Acciones</h3>
                        <button onClick={this.handleClic} className='btn btn-primary m-3'>Editar</button>
                        <br/>
                        <button onClick={this.handleClic} className='btn btn-danger m-3'>Eliminar</button>
                        
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileUser;