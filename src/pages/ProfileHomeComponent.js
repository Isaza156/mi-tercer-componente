import React from 'react';
import NavBar from '../components/NavBarComponent';
import '../styles/ProfileHome.css';

class ProfileHome extends React.Component {
    
    render() { 
        return ( 
        <div className='vh-100'>
           <NavBar />
             <div className='texto container-fluid '>                 
                 <div className='iniciar row '>
                     <p className='m-5'>Esta es nuestra Super 
                        <br/> Conferencia Geek! Bienvenidos <br/> O.O </p>
                        <div>
                        <button onClick={this.handleClic} className='btn btn-primary m-5'>Iniciar</button>
                        </div>
                 </div>
            </div>
            
        </div>
         );
    }
}
 
export default ProfileHome;