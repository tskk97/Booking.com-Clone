import React, {Component} from 'react';
import style from "../Registration/register.module.css";
// import {registerUserData} from "../../redux/ Registration/action";
import {loginUserData} from '../../redux/Login/action';
import {connect} from "react-redux";
import GoogleLogin from 'react-google-login'
import {Redirect, Link} from "react-router-dom"
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

    responseGoogle=(response)=>{
        console.log(response)
        // console.log(response.profileObj)
    }
    render() {
        const {email} = this.state;
        const {loginUserData, isLogin, messageLogin} = this.props;
        console.log(this.props);
        if (!isLogin) {
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
                                            <button className={`${style.backBtn}`}></button>
                                            <span style={{color: "#23387E", fontWeight: "bolder", fontSize: "18px"}}>
                                            Booking</span><span style={{
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
                                            {!isLogin && <p className={"text-danger"}>{messageLogin} <span
                                                className={!messageLogin ? "d-none" : "d-block"}>You can <Link to="/register">Create an Account</Link> to access our services.</span>
                                            </p>}
                                            <button className={`btn-primary mt-4 ${style.submitBtn}`}
                                                    onClick={() => loginUserData(email)}>Next
                                            </button>
                                            <p className={"text-center text-muted"}>or sign in with one click</p>
                                        </div>
                                        <div className={`${style.socialDiv}`}>
                                            <div>
                                                <GoogleLogin
                                                clientId="406658916404-4mih2ovr62l3mnmsmj3ammem908186nu.apps.googleusercontent.com"
                                                // buttonText="Login"
                                                onSuccess={this.responseGoogle}
                                                onFailure={this.responseGoogle}
                                                cookiePolicy={'single_host_origin'}
                                                />
                                            </div>
                                            <div>F</div>
                                            <div>A</div>
                                        </div>
                                        <div className={`${style.signInDiv}`}>
                                            <p className={"text-center"}>Already have an account? Sign in</p>
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
    loginUserData: state.login.loginUserData,
    isLogin: state.login.isLogin,
    messageLogin: state.login.messageLogin
})
const mapDispatchToProps = dispatch => ({
    loginUserData: payload => dispatch(loginUserData(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);