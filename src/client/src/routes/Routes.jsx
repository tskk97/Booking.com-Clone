import React, {Component} from 'react';
import {Route,Switch} from "react-router-dom";
import Register from "./Registration/register";
import RegisterPassword from "./Registration/RegisterPassword";
import Login from "./Login/login";
import LoginPassword from "./Login/LoginPassword";

const Routes = ()=>(
    <>
        <Switch>
            <Route path ="/Register" exact component = {Register}/>
            <Route path ="/Register/password" exact component = {RegisterPassword}/>
            <Route path ="/login" exact component = {Login}/>
            <Route path ="/login/password" exact component = {LoginPassword}/>
        </Switch>
    </>
)

export default Routes;
