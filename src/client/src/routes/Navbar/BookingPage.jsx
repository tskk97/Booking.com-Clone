import React from 'react'
import {connect} from 'react-redux'
import style from "./Booking.module.css";
import Navbar from "./Navbar";
import {IoIosBed} from "react-icons/io";
import {FaRegCalendarAlt} from "react-icons/fa";
import {BsPersonFill} from "react-icons/bs";
import { Link } from "react-router-dom";
import "react-dates/initialize";
import {DateRangePicker} from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import {staysSearchData} from '../../redux/Stays/action'
import ProfileDetails from './ProfileDetails';
import $ from 'jquery';

class BookingPage extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <div className={`${style.body} container-fluid`}>
                    <div className={`row ${style.row}`}>
                        <div className={`col-1`}></div>
                        <div className={`col-10`}>
                            <div className={`${style.greenDiv}`}>
                                Great choice! You're almost done, (Bipin).
                            </div>
                            <div className={`row`}>
                                <div className={`col-3 ${style.leftDiv}`}>1</div>
                                <div className={`col-9`}>2</div>
                            </div>
                        </div>
                        <div className={`col-1`}></div>
                    </div>
                </div>


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
    l_userName: state.login.userName,

    message: state.login.message,

    staysSearchData: state.staysSearch.staysSearchData,
    isSearch: state.staysSearch.isSearch

})

const mapDispatchToProps = dispatch => ({
    staysSearchData: payload => dispatch(staysSearchData(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(BookingPage);