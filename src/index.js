import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

//Creamos un nuevo componente que encapsule todo que vamos a llamar app
import App from './components/App'

const container = document.getElementById('app');

ReactDOM.render(<App/> , container);