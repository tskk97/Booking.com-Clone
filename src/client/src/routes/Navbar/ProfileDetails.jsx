import React from 'react'
import {connect} from "react-redux";
import style from "../Registration/register.module.css";

class ProfileDetails extends React.Component{
  constructor(props){
      super(props)
      this.state={
        isModal:true,
        profFirstName:"",
        profLastName:"",
        profMobile:""
      }
  }

  handleChange =(e)=>{
    this.setState({
        [e.target.name] : e.target.value
    })
  }

  handleClick=(e)=>{
    this.setState({
      isModal:false
    }) 
  }

  handleSubmit=(e)=>{
    const {profFirstName,profLastName,profMobile} = this.state
    const obj={
      profFirstName:profFirstName,
      profLastName:profLastName,
      profMobile:profMobile
    }
    console.log(obj)
  }
  render(){
    console.log(this.props)
    return(                        
        <div>
            <div class="modal fade show" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true" style={this.state.isModal ? {display: "block"} : {display: "none"}}>
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                  <img src="https://cdn.worldvectorlogo.com/logos/bookingcom-1.svg" className="rounded mx-auto" alt="..." style={{height:50,width:50}} />
                    {/* <strong class="mr-auto">Bootstrap</strong> */}
                    {/* <h4 class="modal-title" id="myModalLabel">Basic Modal</h4> */}
                    {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button> */}
                  </div>
                  <div class="modal-body">
                    <h3 className="text-primary">Welcome To Booking.com</h3>
                    <div className={`${style.emailDiv} mt-4`}>
                        <input type="text" aria-label="First name" class="form-control" placeholder="FirstName" value={this.state.profFirstName} name="profFirstName" onChange={this.handleChange}/>
                        <br/>
                        <input type="text" aria-label="Last name" class="form-control" placeholder="LastName" value={this.state.profLastName} name="profLastName" onChange={this.handleChange}/>
                        <br/>
                        {/* <input type="number" aria-label="Last name" class="form-control" placeholder="LastName"/> */}
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                              <div class="input-group-text">+91</div>
                            </div>
                            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="MobileNumber" value={this.state.profMobile} name="profMobile" onChange={this.handleChange} />
                        </div>
                     </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal" onClick={this.handleClick}>Close</button>
                    <button type="button" class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                  </div>
                </div>
              </div>
            </div>            
       </div>
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
    l_userName: state.login.userName,
})
const mapDispatchToProps = dispatch => ({
    // loginPasswordUserData: payload => dispatch(loginPasswordUserData(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetails);
 