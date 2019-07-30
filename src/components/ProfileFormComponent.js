import React from 'react';

class ProfileForm extends React.Component {
    state = {
        
    };
    
    handleClick = e => {
        console.log("El boton ha sido presionado");
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("El formulario hizo el submit")
    };
    render(){
        return(
            <React.Fragment>
            
            <form onSubmit={this.handleSubmit} >
                <div className="form-group">
                    <label>Nombres</label>
                    <input
                        onChange= {this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="firstName"
                        value={this.props.formValues.firstName}
                    />
                </div>
                <div className="form-group">
                    <label>Apellidos</label>
                    <input
                        onChange= {this.props.onChange}  
                        className="form-control" 
                        type="text" 
                        name="lastName"
                        value={this.props.formValues.lastName}
                    />
                </div>
                <div className="form-group">
                    <label>Correo Electrónico</label>
                    <input
                        onChange= {this.props.onChange}  
                        className="form-control" 
                        type="email" 
                        name="email"
                        value={this.props.formValues.email}
                    />
                </div>
                <div className="form-group">
                    <label>En que trabajas</label>
                    <input
                        onChange= {this.props.onChange}  
                        className="form-control" 
                        type="text" 
                        name="jobTitle"
                        value={this.props.formValues.jobTitle}
                    />
                </div>
                <div className="form-group">
                    <label>Twitter</label>
                    <input
                        onChange= {this.props.onChange}  
                        className="form-control" 
                        type="text" 
                        name="twitter"
                        value={this.props.formValues.twitter}
                    />
                </div>

                <button onClick={this.handleClick} className="btn btn-primary">Guardar</button>
            </form>
        </React.Fragment>
        );
    }
}

export default ProfileForm;