import React from 'react';
import ReactDOM from 'react-dom';
import ProfileNew from './pages/ProfileNewComponent';
import ProfileEdit from './pages/ProfileEditComponent';
import ProfileHome from './pages/ProfileHomeComponent';
import ProfileUser from './pages/ProfileUserComponent';
import ProfileMembers from './pages/ProfileMembersComponents';
//importar bootstrap, recuerda hacer npm install bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import './styles/global.css'

const container = document.getElementById('app');

ReactDOM.render(
    <React.Fragment>
        <ProfileNew />,
        <ProfileEdit />,
        <ProfileHome/>
        <ProfileUser/>
        <ProfileMembers/>
    </React.Fragment>,
container);