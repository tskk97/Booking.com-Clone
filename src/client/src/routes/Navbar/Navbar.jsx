import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import style from "./Navbar.module.css";
import {FiHelpCircle} from "react-icons/fi";
import {FaHome, FaTaxi, FaCarAlt} from "react-icons/fa";
import {MdFlight} from "react-icons/md";
import {GiPalmTree} from "react-icons/gi"


class Navbar extends React.Component {

    render() {
        // console.log(this.props)
        const {activePath, r_isAuth, l_isAuth, r_userName, l_userName} = this.props
        let r_uname = "", l_uName = ""
        if(r_userName){
            r_uname = r_userName[0].toUpperCase()
        }
        if(l_userName){
            l_uName = l_userName[0].toUpperCase()
        }
        // console.log(activePath && activePath.toString().includes("/stays"))
        return (
            <>
                <nav className={`container-fluid fixed-top navbar-expand-lg ${style.mainNav}`}>
                    <div className={`row`}>
                        <div className={`col-1 text-center`}></div>
                        <div className={`col-10 text-center ${style.navCol}`}>
                            <div className={`text-center ${style.navFlex}`}>
                                <div>
                                    <Link to="/stays">
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
                                    </Link>
                                </div>
                                <div className={`${style.navFlexInside}`}>
                                    <div className={`${style.white}`} style={{color: "white", fontSize: "22px"}}>₹</div>
                                    <div style={{color: "white", fontSize: "22px"}}><img style={{width:"20px",height:"15px"}} src="https://cdn.countryflags.com/thumbs/india/flag-800.png"
                                                                                         alt={"not found img"}/></div>
                                    <div style={{color: "white", fontSize: "22px"}}><FiHelpCircle/></div>
                                    <div>
                                        <button className={`${style.propertyBtn}`}>List your property</button>
                                    </div>
                                    <div className={r_isAuth || l_isAuth ? "d-none" : "d-block"}>
                                        <Link to="/register"> <button className={`${style.authBtn}`}>Register</button></Link>
                                    </div>
                                    <div className={r_isAuth || l_isAuth ? "d-none" : "d-block"}>
                                        <Link to="/login"> <button className={`${style.authBtn}`}>Sign in</button></Link>
                                    </div>
                                    <div className={r_isAuth || l_isAuth ? `${style.userNameCircle} d-block` : `d-none`}>
                                        <Link to="/profile"> {r_uname || l_uName} </Link>
                                    </div>
                                    <div className={r_isAuth || l_isAuth ? `${style.userName} d-block ml-2 mt` : `d-none`}>
                                        <Link to="/profile"> {r_userName || l_userName} </Link>
                                    </div>
                                </div>
                            </div>

                            <div className={`${style.navFlexTabs}`}>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li>
                                        <Link to="/stays" className={activePath === "/stays" ? "nav-link active" : "nav-link"} ><FaHome style={{marginRight: "5px"}}/>Stays</Link>
                                    </li>
                                    <li>
                                        <Link to="/flights" className={activePath === "/flights" ? "nav-link active" : "nav-link"}><MdFlight style={{marginRight: "5px"}}/>Flights</Link>
                                    </li>
                                    <li>
                                        <Link to ="/carrentals" className={activePath === "/carrentals" ? "nav-link active" : "nav-link"}><FaCarAlt style={{marginRight:"5px"}}/>Car Rentals</Link>
                                    </li>
                                    <li>
                                        <Link to ="/attractions" className={activePath === "/attractions" ? "nav-link active" : "nav-link"}><GiPalmTree style={{marginRight:"5px"}}/>Attractions</Link>
                                    </li>
                                    <li>
                                        <Link to ="/airporttaxis" className={activePath === "/airporttaxis" ? "nav-link active" : "nav-link"}><FaTaxi style={{marginRight:"5px"}}/>Airport Taxis</Link>
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

const mapStateToProps = state => ({
    isRegister: state.register.isRegister,
    r_message: state.register.message,
    r_isAuth: state.register.isAuth,
    r_userEmail: state.register.userEmail,
    r_userToken: state.register.userToken,
    r_userData: state.register.userData,
    r_userName: state.register.userName,

    isLogin: state.login.isLogin,
    l_message: state.login.message,
    l_isAuth: state.login.isAuth,
    l_userEmail: state.login.userEmail,
    l_userToken: state.login.userToken,
    l_userData: state.login.userData,
    l_userName: state.login.userName
})
export default connect(mapStateToProps)(Navbar);