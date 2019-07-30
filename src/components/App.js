import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';

import ProfileHome from '../pages/ProfileHomeComponent';
import ProfileList from '../pages/ProfileListComponent';
import ProfileNew from '../pages/ProfileNewComponent';
import ProfileEdit from '../pages/ProfileEditComponent';
import ProfileDetail from '../pages/ProfileDetailComponent';

import NotFound from '../pages/NotFoundComponent';

const App = () => {
    return (
        
        <BrowserRouter>     
            <Layout>
                <Switch>
                    <Route exact path = "/" component={ProfileHome} />
                    <Route exact path="/profile"  component={ProfileList} />
                    <Route exact path="/profile/new"  component={ProfileNew} />
                    <Route exact path="/profile/:profileId/edit"  component={ProfileEdit} />
                    <Route exact path="/profile/:profileId"  component={ProfileDetail} />
                    <Route component={NotFound} /> 
                </Switch> 
            </Layout>          
        </BrowserRouter>
    );
}
export default App;