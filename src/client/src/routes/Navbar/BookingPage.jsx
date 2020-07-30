import React from 'react'
import {connect} from 'react-redux'
import style from "./Booking.module.css";
import Navbar from "./Navbar";
import {IoIosBed} from "react-icons/io";
import {FaRegCalendarAlt} from "react-icons/fa";
import {BsPersonFill} from "react-icons/bs";
import {Link} from "react-router-dom";
import "react-dates/initialize";
import {DateRangePicker} from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import {staysSearchData} from '../../redux/Stays/action'
import ProfileDetails from './ProfileDetails';
import $ from 'jquery';
import {RiStarSLine} from "react-icons/ri";
import {AiOutlineLike} from "react-icons/ai";
import {GiBus, GiTwoShadows} from "react-icons/gi";
import {IoIosRestaurant} from "react-icons/io";
import {MdLocationOn} from "react-icons/md";
import {TiTickOutline} from "react-icons/ti";
import BasicInfo from "./BasicInfo";
import MobileInfo from "./MobileInfo";

class BookingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            basicInfoFlag : false
        }
    }
    handleBasicInfoFlag = (e)=>{
        this.setState({
            basicInfoFlag:!this.state.basicInfoFlag
        })
        console.log("onClick worked");
    }
    render() {
        const {basicInfoFlag} = this.state;
        return (
            <>
                <Navbar/>
                <div className={`${style.body} container-fluid`}>
                    <div className={`row ${style.row}`}>
                        <div className={`col-1`}></div>
                        <div className={`col-10`}>
                            <div className={`${style.greenDiv}`}>
                                Great choice! You're almost done, (Bipin).
                            </div>
                            <div className={`row`}>
                                <div className={`col-3 ${style.leftDiv} mt-3`}>
                                    <div className={`${style.greenHollow}`}><span style={{fontWeight: "bold"}}>No credit card</span> needed!
                                    </div>
                                    <div className={`${style.bookingDiv} mt-3`}>
                                        <div style={{
                                            fontWeight: "bold",
                                            fontSize: "14px",
                                            borderBottom: "#bad4f7",
                                            backgroundColor: "#ebf3ff",
                                            padding: "10px 10px 8px 10px"
                                        }}><p>Your booking details</p></div>
                                        <div className={`d-flex flex-row mt-3`}
                                             style={{fontSize: "14px", backgroundColor: "#fff", padding: "10px"}}>
                                            <div style={{borderRight: "1px solid #bad4f7"}}>
                                                Check-in
                                                (#check_in_date)
                                            </div>
                                            <div>
                                                Check-out
                                                (#check_out_date)
                                            </div>
                                        </div>
                                        <div style={{fontSize: "14px", padding: "10px"}} className={`mt-3`}>
                                            Total length of stay:
                                            (#count Nights)
                                        </div>
                                    </div>
                                    <div className={`d-flex flex-column`} style={{
                                        border: "1px solid #bad4f7",
                                        borderRadius: "3px",
                                        padding: "5px 10px 0px 10px"
                                    }}>
                                        <div style={{fontSize: "14px"}}>
                                            <h5 style={{fontSize: "14px"}}>You selected:</h5>
                                            Room with city view
                                        </div>
                                        <div style={{fontSize: "14px"}} className={`mt-2`}>
                                            <h5 style={{fontSize: "14px"}}>Sleeps up to:</h5>
                                            (#No) adults
                                        </div>
                                    </div>

                                    <div className={`${style.bookingDiv} mt-3`}>
                                        <div style={{
                                            fontWeight: "bold",
                                            fontSize: "14px",
                                            borderBottom: "#bad4f7",
                                            backgroundColor: "#ebf3ff",
                                            padding: "5px 10px 0px 10px"
                                        }}><p>Your payment schedule </p></div>
                                        <div style={{
                                            fontSize: "14px",
                                            backgroundColor: "#fff",
                                            padding: "10px",
                                            color: "green",
                                            fontWeight: "bold"
                                        }}>
                                            You'll pay after successful booking.
                                        </div>
                                    </div>
                                    <div className={`${style.bookingDiv} mt-3`}>
                                        <div style={{
                                            fontWeight: "bold",
                                            fontSize: "14px",
                                            borderBottom: "#bad4f7",
                                            backgroundColor: "#ebf3ff",
                                            padding: "5px 10px 0px 10px"
                                        }}><p>Your booking includes </p></div>
                                        <div style={{
                                            fontSize: "14px",
                                            backgroundColor: "#fff",
                                            padding: "10px",
                                            color: "green",
                                            fontWeight: "bold"
                                        }}>
                                            Free WiFi <br/>
                                            Free parking
                                        </div>
                                    </div>
                                    <div className={`${style.bookingDiv} mt-3`}>
                                        <div style={{
                                            fontWeight: "bold",
                                            fontSize: "14px",
                                            borderBottom: "#bad4f7",
                                            backgroundColor: "#ebf3ff",
                                            padding: "5px 10px 0px 10px"
                                        }}><p>The fine print</p></div>
                                        <div style={{
                                            fontSize: "14px",
                                            backgroundColor: "#fff",
                                            padding: "10px"
                                        }}>
                                            Please inform (#Hotel Name) of your expected arrival time
                                            in advance. You can use the Special Requests box when booking, or contact
                                            the property directly using the contact details in your confirmation.
                                        </div>
                                    </div>
                                </div>
                                <div className={`col-9`}>
                                    <div className={`${style.middleDiv} mt-3`}>
                                        <div style={{width:"200px",height:"200px"}}>
                                            <img src={`https://cf.bstatic.com/xdata/images/hotel/square200/232847950.webp?k=a227c013bd3bb94e974bb01507bb64241d5e21b770112e6803f14a9fa0d2c10b&o=`}/>
                                        </div>
                                        <div className={`d-flex flex-column ml-3`}>
                                            <h4 style={{fontWeight:"bold"}}>Radisson Bengaluru City Center</h4>
                                            <div className={`d-flex flex-row`}>
                                                <RiStarSLine
                                                    style={{marginTop: "7px", marginLeft: "0px", color: "#febb02"}}/>
                                                <RiStarSLine style={{marginTop: "7px", color: "#febb02"}}/>
                                                <RiStarSLine style={{marginTop: "7px", color: "#febb02"}}/>
                                                <RiStarSLine style={{marginTop: "7px", color: "#febb02"}}/>
                                                <RiStarSLine style={{marginTop: "7px", color: "#febb02"}}/>
                                                <div className={`${style.yellowLike}`}>
                                                    <AiOutlineLike style={{color: "white"}}/>
                                                </div>
                                                <div className={`d-flex flex-row ${style.threeFigures}`}
                                                     >
                                                    <div className={`rounded-circle text-center`} style={{
                                                        backgroundColor: "white",
                                                        border: "1px solid black",
                                                        verticalAlign: "middle",
                                                        width: "30px",
                                                        height: "30px",
                                                        marginTop: "3px"
                                                    }}><GiBus style={{marginTop: "2px"}}/></div>
                                                    <div style={{
                                                        marginTop: "4px",
                                                        fontSize: "12px",
                                                        backgroundColor: "#ebf3ff",
                                                        padding: "2px",
                                                        border: "1px solid #ebf3ff"
                                                    }}>Airport Shuttle
                                                    </div>
                                                </div>
                                                <div className={`d-flex flex-row ${style.threeFigures}`}>
                                                    <div className={`rounded-circle text-center`} style={{
                                                        backgroundColor: "white",
                                                        border: "1px solid black",
                                                        verticalAlign: "middle",
                                                        width: "30px",
                                                        height: "30px",
                                                        marginTop: "3px"
                                                    }}><GiTwoShadows style={{marginTop: "7px"}}/></div>
                                                    <div style={{
                                                        marginTop: "4px",
                                                        fontSize: "12px",
                                                        backgroundColor: "#ebf3ff",
                                                        padding: "2px",
                                                        border: "1px solid #ebf3ff"
                                                    }}>Great for three travellers
                                                    </div>
                                                </div>
                                                <div className={`d-flex flex-row ${style.threeFigures}`}>
                                                    <div className={`rounded-circle text-center`} style={{
                                                        backgroundColor: "white",
                                                        border: "1px solid black",
                                                        verticalAlign: "middle",
                                                        width: "30px",
                                                        height: "30px",
                                                        marginTop: "3px"
                                                    }}><IoIosRestaurant style={{marginTop: "7px"}}/></div>
                                                    <div style={{
                                                        marginTop: "4px",
                                                        fontSize: "12px",
                                                        backgroundColor: "#ebf3ff",
                                                        padding: "2px",
                                                        border: "1px solid #ebf3ff"
                                                    }}>Restaurant on Site
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${style.locationDetailsDiv}`} style={{fontSize: "small"}}>
                                                <MdLocationOn style={{color: "#0071c2", fontSize: "22px"}}/>23 Old Airport Road,
                                                560008 Bangalore, India – Great location - show map
                                            </div>
                                            <div className={`${style.locationDetailsDiv}`} style={{fontSize: "small",color: "green",fontWeight:"bold"}}>
                                                <TiTickOutline style={{color: "green", fontSize: "22px",fontWeight:"bold"}}/>
                                                This property is in a good location. Guests have rated it (#rating)!
                                            </div>
                                            <div className={`${style.locationDetailsDiv}`} style={{fontSize: "small",color: "green",fontWeight:"bold"}}>
                                                <TiTickOutline style={{color: "green", fontSize: "22px",fontWeight:"bold"}}/>
                                                One of our top picks in (#location)
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${style.greenDiv}`}>
                                        <TiTickOutline size={`2em`}/>
                                        No payment is required to secure this booking. You'll pay only after booking.
                                    </div>
                                    <div className={`${style.detailsDiv} mt-3`}>
                                        <h5>Enter your details</h5>
                                        <div className={`d-flex flex-row`}>
                                            <div className={`rounded-circle text-center`} style={{border:"1px solid black",width:"30px",height:"30px",padding:"2px",color:"white",backgroundColor:"blue"}}>B</div>
                                            <div className={`mt-1`}>(Name)</div>
                                        </div>
                                        <div className={`${style.form} mt-2`}>
                                            {basicInfoFlag ?  <MobileInfo cb={this.handleBasicInfoFlag}/> : <BasicInfo cb={this.handleBasicInfoFlag}/>}
                                        </div>
                                    </div>
                                </div>
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