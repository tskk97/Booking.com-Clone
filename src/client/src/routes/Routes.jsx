import React, {Component} from 'react';
import {Route,Switch} from "react-router-dom";
import Register from "./Registration/register";
import RegisterPassword from "./Registration/RegisterPassword";

const Routes = ()=>(
    <>
        <Switch>
            <Route path ="/Register" exact component = {Register}/>
            <Route path ="/Register/password" exact component = {RegisterPassword}/>
        </Switch>
    </>
)

export default Routes;
