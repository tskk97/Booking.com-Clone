import React, {Component} from 'react';
import {connect} from 'react-redux'
import style from "./register.module.css";
import {registerUserData} from '../../redux/ Registration/action';

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    render() {
        const {email} = this.state
        const {registerUserData} = this.props
        // console.log(registerUserData,"asg")
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
                                        <span style={{
                                            color: "#23387E",
                                            fontWeight: "bolder",
                                            fontSize: "18px"
                                        }}>Booking</span><span style={{
                                        color: "#47A1DE",
                                        fontWeight: "bolder",
                                        fontSize: "18px"
                                    }}>.com</span> Account
                                    </p>

                                    <h4>Create your account</h4>
                                    <small>Create an account to use Booking.com services easily.</small>
                                    <div className={`${style.emailDiv}`}>
                                        <label>Email</label>
                                        <input type={"text"} className={`${style.email}`} value={this.state.email}
                                               onChange={this.handleChange}/>
                                        <button className={`btn-primary mt-4 ${style.submitBtn}`}
                                                onClick={() => registerUserData(this.state.email)}>Get Started
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
    registerUserData: state.register.registerUserData,
    isRegister: state.register.isRegister
})

const mapDispatchToProps = dispatch => ({
    registerUserData: payload => dispatch(registerUserData(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(Register);
