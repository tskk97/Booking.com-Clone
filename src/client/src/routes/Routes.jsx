import React, {Component} from 'react';
import {Route,Switch} from "react-router-dom";
import Register from "./Registration/register";
import RegisterPassword from "./Registration/RegisterPassword";
import Login from "./Login/login";
import LoginPassword from "./Login/LoginPassword";
import Stays from './Navbar/Stays'

const Routes = ()=>(
    <>
        <Switch>
            <Route path ="/stays" component = {Stays} />
            <Route exact path ="/register"  component = {Register}/>
            <Route path ="/register/password" component = {RegisterPassword}/>
            <Route exact path ="/login" component = {Login}/>
            <Route path ="/login/password"   component = {LoginPassword}/>
        </Switch>
    </>
)

export default Routes;
