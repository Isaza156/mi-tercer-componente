import React from 'react';
import { Link } from 'react-router-dom'
import './styles/ProfileHomeStyle.css'

function ProfileHome() {
	return (
		<div className="Home">
			<div className="">
                <div className="row">
                    <div className="col-6 mr-50">
                        <h1>Esta es nuestra Super Conferencia Geek! Bienvenidos O.O </h1>
                    </div>
                    <div className ="col-6 ml-50" >
                        <Link className="btn btn-primary" to="/profile">Iniciar</Link>
                    </div>
                </div>
			</div>
		</div>
	)
}
 
export default ProfileHome;