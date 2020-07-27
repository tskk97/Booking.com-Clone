import React from 'react'
import {connect} from "react-redux";
import style from "../Registration/register.module.css";

class ProfileDetails extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        console.log(this.props,"Ashok")
        const {l_message,r_message,l_userData,l_userEmail} = this.props
        console.log(l_userEmail.length)
         if(l_message === "Login Successful" || r_message === "Login Successful"){
            //   l_userData&&l_userData.map(item =>{
            //       console.log(item.email.length)
            //       if(l_userEmail.length === item.email.length){
            //           console.log("ash")
                    return(                        
                        <div>
                            <div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                  <img src="..." class="rounded mr-2" alt="..." />
                                    {/* <strong class="mr-auto">Bootstrap</strong> */}
                                    {/* <h4 class="modal-title" id="myModalLabel">Basic Modal</h4> */}
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  <div class="modal-body">
                                    <h3 className="text-primary">Welcome To Booking.com</h3>
                                    <div className={`${style.emailDiv} mt-4`}>
                                        
                                        <input type="password" class="form-control" id="inputPassword2" placeholder="FirstName" />
                                        <br/>
                                        <input type="password" class="form-control" id="inputPassword2" placeholder="LastName" />
                                         {/* <button className={`mt-4 ${style.submitBtn}`} onClick={this.handleSubmit}>Sign in</button> */}
                                    </div>
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Submit</button>
                                  </div>
                                </div>
                              </div>
                            </div>            
                       </div>
                    )
                //  }
             // }
            //  )
            
        }

        return(
            <div>
                Ashok
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
 