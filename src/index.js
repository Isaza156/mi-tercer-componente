import React from 'react';
import ReactDOM from 'react-dom';
import ProfileNew from './pages/ProfileNewComponent';
//importar bootstrap, recuerda hacer npm install bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import './styles/global.css'

const container = document.getElementById('app');


ReactDOM.render(
<ProfileNew /> , container);