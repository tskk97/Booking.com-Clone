import React, {Component} from 'react';
import {Route,Switch} from "react-router-dom";
import Register from "./Registration/register";

const Routes = ()=>(
    <>
        <Switch>
            <Route path ="/Register" exact component = {Register}/>
        </Switch>
    </>
)

export default Routes;
