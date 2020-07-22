import React, {Component} from 'react';
import style from "./register.module.css";
import {connect} from 'react-redux'
import { registerPasswordUserData  } from '../../redux/ Registration/action';

class RegisterPassword extends Component {
    constructor(props){
        super(props)
        this.state={
            password:"",
            cnfpassword:"",
            pwdMatch:true
        }
    }
    handleChange =(e)=>{
        this.setState({
            [e.target.name] : e.target.value,
            pwdMatch:true
        })
    }
    handleSubmit=()=>{
        const {userEmail,registerPasswordUserData} = this.props;

        if(this.state.password === this.state.cnfpassword){
            let obj = {
                password:this.state.password,
                email:userEmail
            }
            registerPasswordUserData(obj);
            // console.log(obj,userEmail)
        }
        else{
            // alert("Password mismatched")
            this.setState({
                pwdMatch:false
            })
        }

    }

    render() {
        const {userEmail} = this.props
        // const {pwdMatch} = this.state
        // console.log(userEmail,"asd")
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

                                    <h4>Create your account</h4>
                                    <small>Please choose a password for your Booking.com account registered to {userEmail}</small>
                                    <div className={`${style.emailDiv}`}>
                                        <label>Password</label>
                                        <input type={"text"} className={`${style.email}`} value={this.state.password} name="password" onChange={this.handleChange}  />
                                        <label>Confirm Password</label>
                                        <input type={"text"} className={`${style.email}`} value={this.state.cnfpassword} name="cnfpassword" onChange={this.handleChange}/>
                                        <p className={this.state.pwdMatch ? "d-none" : "d-block text-danger"}>The passwords you entered did not match, please try again!</p>
                                        <button className={`btn-primary mt-4 ${style.submitBtn}`} onClick={this.handleSubmit}>Create Account</button>
                                        {/* <p className={"text-center text-muted"}>or sign in with one click</p> */}
                                    </div>
                                    {/* <div className={`${style.socialDiv}`}>
                                        <div>G</div>
                                        <div>F</div>
                                        <div>A</div>
                                    </div> */}
                                    {/* <div className={`${style.signInDiv}`}>
                                        <p className={"text-center"}>Already have an account? Sign in</p>
                                    </div> */}
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
    registerPasswordUserData: state.register.registerPasswordUserData,
    isRegister: state.register.isRegister,
    userEmail: state.register.userEmail
})

const mapDispatchToProps = dispatch => ({
    registerPasswordUserData: payload => dispatch(registerPasswordUserData(payload))
    
})
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPassword);

// export default RegisterPassword;