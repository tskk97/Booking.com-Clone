import React from "react"
import {Link} from "react-router-dom";
import style from "./Navbar.module.css";
import {FiHelpCircle} from "react-icons/fi";
import {FaHome,FaChild,FaTaxi} from "react-icons/fa";
import {MdFlight} from "react-icons/md";
import {AiFillCar} from "react-icons/ai";


const Navbar = () => {
    return (
        <>
            <nav className={`container-fluid fixed-top navbar-expand-lg ${style.mainNav}`}>
                <div className={`row`}>
                    <div className={`col-1 text-center`}>1</div>
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
                                <div className={`${style.white}`} style={{color:"white",fontSize:"22px"}}>₹</div>
                                <div style={{color:"white",fontSize:"22px"}}><img src={"india-flag-icon-32.png"} alt={"not found im"}/></div>
                                <div style={{color:"white",fontSize:"22px"}}><FiHelpCircle/></div>
                                <div>
                                    <button className={`${style.propertyBtn}`}>List your property</button>
                                </div>
                                <div>
                                    <Link to="/register"> <button className={`${style.authBtn}`}>Register</button></Link>
                                </div>
                                <div>
                                    <Link to="/login"> <button className={`${style.authBtn}`}>Sign in</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.navFlexTabs}`}>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <Link to ="/stays" className="nav-link" id="home-tab" data-toggle="tab"
                                       role="tab" aria-controls="home" aria-selected="true"><FaHome style={{marginRight:"5px"}}/>Stays</Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link className="nav-link" id="profile-tab" data-toggle="tab" to ="/flights"
                                       role="tab" aria-controls="profile" aria-selected="false"><MdFlight style={{marginRight:"5px"}}/>Flights</Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link className="nav-link" id="contact-tab" data-toggle="tab" to="/carrentals"
                                       role="tab" aria-controls="contact" aria-selected="false"><AiFillCar style={{marginRight:"5px"}}/>Car Rentals</Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link className="nav-link" id="contact-tab" data-toggle="tab" to="/attraction"
                                       role="tab" aria-controls="contact" aria-selected="false"><FaChild style={{marginRight:"5px"}}/>Attractions</Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link className="nav-link" id="contact-tab" data-toggle="tab" to ="/airporttaxis"
                                       role="tab" aria-controls="contact" aria-selected="false"><FaTaxi style={{marginRight:"5px"}}/>Airport Taxis</Link>
                                </li>
                            </ul>

                        </div>

                    </div>
                    <div className={`col-1 text-center`}>3</div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;