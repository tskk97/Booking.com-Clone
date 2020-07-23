import React from "react"
import {Link} from "react-router-dom";
import style from "./Navbar.module.css";
import {FiHelpCircle} from "react-icons/fi";
import {FaHome, FaChild, FaTaxi} from "react-icons/fa";
import {MdFlight} from "react-icons/md";
import {AiFillCar} from "react-icons/ai";


class Navbar extends React.Component {

    render() {
        console.log(this.props)
        const {activePath} = this.props
        return (
            <>
                <nav className={`container-fluid fixed-top navbar-expand-lg ${style.mainNav}`}>
                    <div className={`row`}>
                        <div className={`col-1 text-center`}></div>
                        <div className={`col-10 text-center ${style.navCol}`}>
                            <div className={`text-center ${style.navFlex}`}>
                                <div>
                                    <p style={{margin: "0%", textAlign: "start"}}>
                                    <span style={{
                                        color: "white",
                                        fontWeight: "bolder",
                                        fontSize: "25px"
                                    }} className={`${style.booking1}`}>Booking</span><span style={{
                                        color: "#47A1DE",
                                        fontWeight: "bolder",
                                        fontSize: "24px"
                                    }} className={`${style.dotCom}`}>.com</span>
                                    </p>
                                </div>
                                <div className={`${style.navFlexInside}`}>
                                    <div className={`${style.white}`} style={{color: "white", fontSize: "22px"}}>₹</div>
                                    <div style={{color: "white", fontSize: "22px"}}><img src="india-flag-icon-32.png"
                                                                                         alt={"not found img"}/></div>
                                    <div style={{color: "white", fontSize: "22px"}}><FiHelpCircle/></div>
                                    <div>
                                        <button className={`${style.propertyBtn}`}>List your property</button>
                                    </div>
                                    <div>
                                        <Link to="/register">
                                            <button className={`${style.authBtn}`}>Register</button>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/login">
                                            <button className={`${style.authBtn}`}>Sign in</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className={`${style.navFlexTabs}`}>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li>
                                        <Link to="/stays"
                                              className={activePath === "/stays" ? "nav-link active" : "nav-link"}><FaHome
                                            style={{marginRight: "5px"}}/>Stays</Link>
                                    </li>
                                    <li>
                                        <Link to="/flights"
                                              className={activePath === "/flights" ? "nav-link active" : "nav-link"}><MdFlight
                                            style={{marginRight: "5px"}}/>Flights</Link>
                                    </li>
                                    <li>
                                        <Link to="/carrentals"
                                              className={activePath === "/carrentals" ? "nav-link active" : "nav-link"}><AiFillCar
                                            style={{marginRight: "5px"}}/>Car Rentals</Link>
                                    </li>
                                    <li>
                                        <Link to="/attractions"
                                              className={activePath === "/attractions" ? "nav-link active" : "nav-link"}><FaChild
                                            style={{marginRight: "5px"}}/>Attractions</Link>
                                    </li>
                                    <li>
                                        <Link to="/airporttaxis"
                                              className={activePath === "/airporttaxis" ? "nav-link active" : "nav-link"}><FaTaxi
                                            style={{marginRight: "5px"}}/>Airport Taxis</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`col-1 text-center`}></div>
                    </div>
                </nav>

            </>
        )
    }
}

export default Navbar;