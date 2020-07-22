import React from "react"
import { Link } from "react-router-dom";

const  Navbar=()=>{
    return(
        <>
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand" to = '/stays'>Stays</Link>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to ="/flights">Flights<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/carrentals">Car Rentals</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/attraction">Attraction</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to ="/airporttaxis">Airport Taxis</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/register">Register </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/login">Login </Link>
                    </li>
                    </ul>
                </div>
            </nav>
            </div>
        </>
    )
}

export default Navbar;