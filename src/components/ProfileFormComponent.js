import React from 'react';

class ProfileForm extends React.Component {
    
    /*state = {
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
}*/

handleClic = e => {
    console.log('El botón ha sido presionado');
};
handleSubmit = e => {
    e.preventDefault();
    console.log('El formulario hizo submit');
}

render() {
    return (
        <div>
            <h1>Nuevo Asistente</h1>
            <form onSubmit={this.handleSubmit}>
                <div className='form.group'>
                    <label>Nombres</label>
                    <input
                        onChange={this.props.onChange}
                        className='form-control'
                        type='text'
                        name='firstName'
                        value={this.setState.firstName}
                    />

                </div>
                <div className='form.group'>
                    <label>Apellidos</label>
                    <input
                        onChange={this.props.onChange}
                        className='form-control'
                        type='text'
                        name='lastName'
                        value={this.setState.lastName}
                    />

                </div>
                <div className='form.group'>
                    <label>Correo Electrónico</label>
                    <input
                        onChange={this.props.onChange}
                        className='form-control'
                        type='email'
                        name='email'
                        value={this.setState.email}
                    />

                </div>
                <div className='form.group'>
                    <label>En qué trabajas</label>
                    <input
                        onChange={this.props.onChange}
                        className='form-control'
                        type='text'
                        name='jobTitle'
                        value={this.setState.jobTitle}
                    />

                </div>
                <div className='form.group'>
                    <label>Twitter</label>
                    <input
                        onChange={this.props.onChange}
                        className='form-control'
                        type='text'
                        name='twitter'
                        value={this.setState.twitter}
                    />

                </div>
                <button onClick={this.handleClic} className='btn btn-primary'>Guardar</button>
            </form>

        </div>
    );
}
}

export default ProfileForm;