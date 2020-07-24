import React, {Component} from 'react';
import {loginPasswordUserData} from '../../redux/Login/action';
import {connect} from "react-redux";
import style from "../Registration/register.module.css";
import { Redirect ,Link} from 'react-router-dom';
import {FiChevronLeft} from 'react-icons/fi'
class LoginPassword extends Component {
    constructor(props){
        super(props)
        this.state={
            password:""      
        }
    }
    handleChange =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit=()=>{
        const {loginPasswordUserData,userEmail} = this.props;
        const obj = {
            email:userEmail,   
            password:this.state.password
        }
        console.log(obj,"obj")
        loginPasswordUserData(obj);
    }
    render() {
        const {message,userEmail} = this.props;
        if(message === "Login Successful"){
            return (
                <Redirect to='/stays'/> 
            )
        }
        else{
            return (
                <div className={`container-fluid ${style.container}`}>
                    <div className={`row ${style.row}`}>
                        <div className={"col-4"}></div>
                        <div className={`col-4 ${style.mainReg}`}>
                            <div className={`${style.centerReg}`}>
                                <div className={`row`}>
                                    <div className={`col-1`}></div>
                                    <div className={`col-10 ${style.flexCol}`}>
                                        <p style={{marginTop:"7%"}}><Link to ='/login'> <FiChevronLeft className="mb-1" /> </Link><span style={{color:"#23387E",fontWeight:"bolder",fontSize:"18px"}}>Booking</span><span style={{color:"#47A1DE",fontWeight:"bolder",fontSize:"18px"}}>.com</span> Account</p>

                                        <h4>Enter your password</h4>
                                        <small>Please enter your Booking.com password for {userEmail}</small>
                                        <div className={`${style.emailDiv} mt-4`}>
                                            <label>Booking.com password</label>
                                            <input type={"text"} className={`${style.email}`} value={this.state.password} name="password" onChange={this.handleChange}/>
                                            <button className={`mt-4 ${style.submitBtn}`} onClick={this.handleSubmit}>Sign in</button>
                                        </div>

                                        {/* <div className={`${style.signInDiv}`}>
                                            <p className={"text-center"}><a>Sign in with a verification link</a></p>
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
}

const mapStateToProps = state => ({
    loginPasswordUserData: state.login.loginPasswordUserData,
    isLogin: state.login.isLogin,
    message: state.login.message,
    userToken:state.login.userToken,
    userData:state.login.userData,
    userEmail:state.login.userEmail
})
const mapDispatchToProps = dispatch => ({
    loginPasswordUserData: payload => dispatch(loginPasswordUserData(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPassword);