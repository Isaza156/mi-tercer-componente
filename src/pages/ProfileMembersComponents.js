import React from 'react';
import NavBar from '../components/NavBarComponent';
import '../styles/ProfileNewStyle.css';
import '../styles/ProfileUser.css';
import '../styles/ProfileMembers.css';
import logoGeek from '../images/logo-ag-min.png';

class ProfileMembers extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: ''
    }

    handleChange = e => {
        console.log({
            name: e.target.name,
            value: e.target.value,
        });

        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    render() {
        return (
            <div>
                <NavBar />

                <div className='container-fluid py-5 bg-cent'>
                    <div className="container">
                        <img className="profLogo w-25 ml-5" src={logoGeek} alt="Logo Academia Geek" />
                    </div>
                </div>
                <div className='marg'>
                    <button onClick={this.handleClic} className='btn btn-primary m-3'>Agregar Perfil</button>
                </div>
                <div className='container d-flex justify-content-center'>
                    <div className='Profile'>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileMembers;