import React from 'react';
import {Route,Switch} from "react-router-dom";
import Register from "./Registration/register";
import RegisterPassword from "./Registration/RegisterPassword";
import Login from "./Login/login";
import LoginPassword from "./Login/LoginPassword";
import Stays from './Navbar/Stays'
import Flights from './Navbar/Flights'
import CarRentals from './Navbar/CarRentals';
import Attractions from './Navbar/Attractions';
import AirportTaxis from './Navbar/AirportTaxis';
// import StaysList from './Stays/StaysList';
// import ResultCard from './Navbar/ResultCard';
import ListResults from "./Navbar/ListResults";
import Entity from "./Navbar/Entity";

const Routes = ()=>(
    <>
        <Switch>
            <Route path ="/" exact component = {Stays} />
            <Route exact path ="/stays" component = {Stays} />
            {/* <Route path ="/stays/results" component = {ListResults} /> */}
            <Route path ="/flights" component = {Flights} />
            <Route path = '/carrentals' component ={CarRentals} />
            <Route path = "/attractions" component={Attractions} />
            <Route path ="/airporttaxis" component={AirportTaxis} />
            <Route exact path ="/register"  component = {Register}/>
            <Route path ="/register/password" component = {RegisterPassword}/>
            <Route exact path ="/login" component = {Login}/>
            <Route path ="/login/password"  component = {LoginPassword}/>
            <Route path="/stays/:id"  component={ListResults}/>
            <Route path="/entity" component={Entity}/>
        </Switch>
    </>
)

export default Routes;
