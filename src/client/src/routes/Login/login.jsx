import React, {Component} from 'react';
import style from "../Registration/register.module.css";
import {registerUserData} from "../../redux/ Registration/action";
import {loginUserData} from '../../redux/Login/action';
import {connect} from "react-redux";

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

    render() {
        const {email} = this.state;
        const {loginUserData} = this.props;
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
                                        <input type={"text"} className={`${style.email}`} onChange={this.handleChange}
                                               value={this.state.email}/>
                                        <button className={`btn-primary mt-4 ${style.submitBtn}`}
                                                onClick={() => loginUserData(email)}>Next
                                        </button>
                                        <p className={"text-center text-muted"}>or sign in with one click</p>
                                    </div>
                                    <div className={`${style.socialDiv}`}>
                                        <div>G</div>
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
}


const mapStateToProps = state => ({
    loginUserData: state.login.loginUserData,
    isLogin: state.login.isRegister
})

const mapDispatchToProps = dispatch => ({
    loginUserData: payload => dispatch(loginUserData(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);

