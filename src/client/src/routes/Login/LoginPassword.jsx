import React, {Component} from 'react';
import {Link} from "react-router-dom";
import style from "../Registration/register.module.css";
class LoginPassword extends Component {
    render() {
        return (
            <div className={`container-fluid ${style.container}`}>
                <div className={`row ${style.row}`}>
                    <div className={"col-4"}></div>
                    <div className={`col-4 ${style.mainReg}`}>
                        <div className={`${style.centerReg}`}>
                            <div className={`row`}>
                                <div className={`col-1`}></div>
                                <div className={`col-10 ${style.flexCol}`}>
                                    <p style={{marginTop:"7%"}}><button className={`${style.backBtn}`}> ></button><span style={{color:"#23387E",fontWeight:"bolder",fontSize:"18px"}}>Booking</span><span style={{color:"#47A1DE",fontWeight:"bolder",fontSize:"18px"}}>.com</span> Account</p>

                                    <h4>Enter your password</h4>
                                    <small>Please enter your Booking.com password for (#fillerEmail)</small>
                                    <div className={`${style.emailDiv}`}>
                                        <label>Booking.com password</label>
                                        <input type={"text"} className={`${style.email}`} />
                                        <button className={`btn-primary mt-4 ${style.submitBtn}`}>Sign in</button>
                                        {/*<p className={"text-center text-muted"}>or sign in with one click</p>*/}
                                    </div>

                                    <div className={`${style.signInDiv}`}>
                                        <p className={"text-center"}><a>Sign in with a verification link</a></p>
                                    </div>
                                </div>
                                <div className={`col-1`}></div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-4"}></div>
                </div>
            </div>
        );
    }
}

export default LoginPassword;