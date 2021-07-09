import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import GasTableCalculator from "./GasTableCalculator";
import "./GasTableCalculator.scss"



// This component will be your main app
export default () => {
    return (
            <BrowserRouter>
                <Switch>
                    <Route component={GasTableCalculator}/>
                </Switch>
            </BrowserRouter>
    )
}
