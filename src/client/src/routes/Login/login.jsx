import React, {Component} from 'react';
import style from "../Registration/register.module.css";
import {loginUserData} from '../../redux/Login/action';
import {connect} from "react-redux";
import GoogleLogin from 'react-google-login';
import {Redirect, Link} from "react-router-dom"
import {FiChevronLeft} from 'react-icons/fi'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""      
        }
    }
    handleChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleLogin = () => {
        const {loginUserData} = this.props
        let obj = {
            email: this.state.email,
            mode: "Manual"
        }
        loginUserData(obj)
    }

    responseGoogle=(response)=>{
        const {loginUserData} = this.props
        let obj = {
            email:response.profileObj.email,
            password: response.googleId,
            mode: "Google"
        }
        loginUserData(obj);
    }
    render() {
        const { isLogin, message } = this.props;
        console.log(this.props);
        if(message === "Login Successful"){
            return (
                <Redirect to='/stays'/>
            )
        }
        else if (!isLogin) {
            return (
                <div className={`container-fluid ${style.container}`}>
                    <div className={`row ${style.row}`}>
                        <div className={"col-4"}></div>
                        <div className={`col-4 ${style.mainReg}`}>
                            <div className={`${style.centerReg}`}>
                                <div className={`row`}>
                                    <div className={`col-1`}></div>
                                    <div className={`col-10 ${style.flexCol}`}>
                                        <p style={{marginTop: "7%"}}>
                                            <Link to ='/stays'> <FiChevronLeft className="mb-1" /> </Link>
                                            <span style={{color: "#23387E", fontWeight: "bolder", fontSize: "18px"}}> Booking</span>
                                            <span style={{
                                            color: "#47A1DE",
                                            fontWeight: "bolder",
                                            fontSize: "18px"
                                        }}>.com</span> Account
                                        </p>
                                        <h4>Sign in</h4>
                                        <small>You can sign in using your Booking.com account to access our
                                            services.</small>
                                        <div className={`${style.emailDiv}`}>
                                            <label>Email address</label>
                                            <input type={"text"} className={`${style.email}`}
                                                   onChange={this.handleChange}
                                                   value={this.state.email}/>
                                            {!isLogin && <p className={"text-danger"}>{message} <span
                                                className={!message ? "d-none" : "d-block"}>You can <Link to="/register">Create an Account</Link> to access our services.</span>
                                            </p>}
                                            <button className={`mt-4 ${style.submitBtn}`}
                                                    onClick={this.handleLogin}>Next
                                            </button>
                                            <p className={"text-center text-muted mt-2"}>or sign in with one click</p>
                                        </div>
                                        <div className={`${style.socialDiv}`}>
                                            <div>
                                                <GoogleLogin
                                                clientId="406658916404-4mih2ovr62l3mnmsmj3ammem908186nu.apps.googleusercontent.com"
                                                buttonText="Google"
                                                onSuccess={this.responseGoogle}
                                                onFailure={this.responseGoogle}
                                                cookiePolicy={'single_host_origin'}
                                                />
                                            </div>
                                            {/* <div>F</div>
                                            <div>A</div> */}
                                        </div>
                                        <div className={`${style.signInDiv}`}>
                                            <p className={"text-center mt-4"}>New User? <Link to="/register">Register</Link></p>
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
        else {
            return (
                <Redirect to="/login/password"/>
            )
        }
    }
}
const mapStateToProps = state => ({
    isLogin: state.login.isLogin,
    message: state.login.message
})
const mapDispatchToProps = dispatch => ({
    loginUserData: payload => dispatch(loginUserData(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);