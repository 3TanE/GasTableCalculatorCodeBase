import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";

import './App.sass';


const NotFound = () => (
    <div className={'not-found-title'}>
        <h1>Not Found</h1>
        We could not find any matching content for this URL...
    </div>
)

export default () => (
    <BrowserRouter>
        <Switch>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)