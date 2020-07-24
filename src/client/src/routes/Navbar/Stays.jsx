import React from 'react'
import {connect} from 'react-redux'
import style from "./Stays.module.css";
import Navbar from "./Navbar";
import {IoIosBed} from "react-icons/io";
import {FaRegCalendarAlt} from  "react-icons/fa";
import {FiUser} from "react-icons/fi";
// import { registerUserData } from '../../redux/Registration/action';
// import {loginUserData} from '../../redux/Login/action';

class Stays extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            modalVisible : false
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                modalVisible: !this.state.modalVisible
            })
        },1000)
    }
    toggleModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }
    render(){
        console.log(this.props)
        const activePath = this.props.match.url
        let styles = this.state.modalVisible ? { display: "block" } : { display: "none" };
        return(
            <>
                <Navbar activePath={activePath}/>
                <div className={`${style.body} container-fluid`}>
                    <div className={`row ${style.row}`}>
                        <div className={`col-1`}></div>
                        <div className={`col-10`}>
                            <div className={`${style.flexCol} mt-5`}>
                                <h4 style={{fontWeight:"bold",marginTop:"7px"}}>Find deals on hotels, homes and much more...</h4>
                                <small>From cosy country homes to funky city flats</small>
                                <div className={`${style.flexRowInput}`}>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-outline-secondary" type="button"
                                                    id="button-addon1"><IoIosBed/>
                                            </button>
                                        </div>
                                        <input type="text" className={`form-control ${style.bed}`} placeholder="Where are you going?"
                                               aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-outline-secondary" type="button"
                                                    id="button-addon1"><FaRegCalendarAlt/>
                                            </button>
                                        </div>
                                        <input type="text" className={`form-control ${style.calendar}`} placeholder="Check-in - Check-out"
                                               aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-outline-secondary" type="button"
                                                    id="button-addon1"><FiUser/>
                                            </button>
                                        </div>
                                        <input type="text" className={`form-control ${style.user}`} placeholder=".."
                                               aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                    </div>
                                    <button className={`${style.searchBtn}`}>Search</button>
                                </div>
                                <div className={`${style.flexRow} form-check`}>
                                    <input className="form-check-input" type="checkbox" style={{marginRight:"7px"}}/>
                                    <label className="form-check-label">I'm traveling for work </label>
                                </div>

                            </div>
                        </div>
                        <div className={`col-1`}></div>
                    </div>
                </div>
                {/* <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div id="myModal" className="modal fade in" role="dialog" style={styles} >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" onClick={this.toggleModal} className="close" > &times; </button>
                                <h4 className="modal-title">Modal Header</h4>
                            </div>
                            <div className="modal-body">
                                <p>Some text in the modal.</p>
                            </div>
                            <div className="modal-footer">
                                <button onClick={this.toggleModal} type="button" className="btn btn-default" > Close </button>
                            </div>
                        </div>
                    </div>
                </div> */}
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
export default connect(mapStateToProps)(Stays);