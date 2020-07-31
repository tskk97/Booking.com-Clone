import React from 'react'
import axios from 'axios'
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
import {bookingSearchRequest} from '../../redux/Booking/action'
import ProfileDetails from './ProfileDetails';
import $ from 'jquery';
import {RiStarSLine} from "react-icons/ri";
import {AiOutlineLike} from "react-icons/ai";
import {GiBus, GiTwoShadows} from "react-icons/gi";
import {IoIosRestaurant} from "react-icons/io";
import {MdLocationOn} from "react-icons/md";
import {TiTickOutline} from "react-icons/ti";
// import BasicInfo from "./BasicInfo";
// import MobileInfo from "./MobileInfo";
// import Payment from "./Payment"

class BookingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            basicInfoFlag : false, 
            firstName:"",
            lastName:"",
            address:"",
            address2:""
        }
    }
    componentDidMount(){
        // const {location} = this.props
        let url =  new URL(window.location.href)
        // console.log(url.search)
        let baseUrl = url.search.toString().slice(1)
        let propertiesArr = baseUrl.split("&")
        
        let obj = {}

        for(var j=0;j<propertiesArr.length;j++){
            propertiesArr[j] = propertiesArr[j].split("=")
            
            if(!obj[propertiesArr[j][0]]){
                obj[propertiesArr[j][0]] = []
                obj[propertiesArr[j][0]].push(propertiesArr[j][1])
            }
            else{
                obj[propertiesArr[j][0]].push(propertiesArr[j][1])
            }
        }
        console.log(obj)
    }
    handleBasicInfoFlag = (e)=>{
        e.preventDefault()
        this.setState({
            basicInfoFlag:!this.state.basicInfoFlag
        })
        console.log("onClick worked");
    }

    razorPay = async() => {
    const { history, match } = this.props;
    const orderId_url = "http://4be0e3fbd5d4.ngrok.io" + match.url
    console.log(orderId_url)
        try {
            let order_res = await axios.post(orderId_url,{
            "amount": 490 * 100,
            "currency": "INR",
            "receipt": "1#Saikiran#" + Date.now(),
            "payment_capture":"1",
        })
        console.log(order_res)
        var options = {
            "key": "rzp_test_atM2YwdkGw4EC6", // Enter the Key ID generated from the Dashboard
            "amount": 490 * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Saikiran",
            "description": "Booking.com",
            "image": "https://cdn.worldvectorlogo.com/logos/bookingcom-1.svg",
            "order_id": order_res['data']['id'], //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "prefill": {
                "name": "Saikiran",
                "email": "sai@mail.com",
                "contact": "9366535775"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#003072"
            },
            handler: async (response) => {
                console.log(response)
                const validation_url = "http://4be0e3fbd5d4.ngrok.io/stays/property/"+match.params.prop_id+"/booking/getValidation"
                let final_res = await axios.post(validation_url, {
                    ...response,
                })
                console.log(final_res)
                if(final_res['data']['status'] === 'Success'){
                    // alert(final_res['data']['message'])
                    const redirect_url = "/stays/property/"+match.params.prop_id+"/success"
                    history.push(redirect_url)
                }
                else{
                    alert(final_res['data']['message']+", Redirecting...")
                    history.push("/stays/property/"+match.params.prop_id)
                }
            },
        };
        const rzp_trial = window.Razorpay(options);
        rzp_trial.open();
        } catch (error) {
            console.log(error)
        }
    }


    render() {
        const {basicInfoFlag} = this.state;
        // const {match} = this.props
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
                                    <div className={`${style.bookingDiv} mt-3 mb-5`}>
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
                                       
                                        <div className={!this.state.basicInfoFlag ? `${style.form} mt-2 mb-5` : "d-none"}>
                                            <div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputEmail4">First Name</label>
                                                        <input type="email" className="form-control" id="inputEmail4" value={this.state.firstName} name="firstname" onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputPassword4">Last Name</label>
                                                        <input type="password" className="form-control"
                                                            id="inputPassword4"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputAddress">Address</label>
                                                    <input type="text" className="form-control" id="inputAddress"
                                                        placeholder="1234 Main St"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputAddress2">Address 2</label>
                                                    <input type="text" className="form-control" id="inputAddress2"
                                                        placeholder="Apartment, studio, or floor"/>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="inputCity">City</label>
                                                        <input type="text" className="form-control" id="inputCity"/>
                                                    </div>

                                                    <div className="form-group col-md-2">
                                                        <label htmlFor="inputZip">Zip</label>
                                                        <input type="text" className="form-control" id="inputZip"/>
                                                    </div>
                                                </div>
                                                <button className="btn" onClick={this.handleBasicInfoFlag} style={{backgroundColor:"#0071c2",color:"white"}}>Proceed to Final Details</button>
                                            </div>
                                        </div>
                                        <div className={this.state.basicInfoFlag ? `${style.form} mt-2 mb-5` : "d-none"}>
                                            {/* {basicInfoFlag ?  <MobileInfo cb={this.handleBasicInfoFlag} match={match}/> : <BasicInfo cb={this.handleBasicInfoFlag}/>} */}
                                            <div className={`p-3`}>
                                                <div className="form-group">
                                                    <label htmlFor="inputAddress">Mobile Number</label>
                                                    <input type="text" className="form-control" id="inputAddress"
                                                        placeholder="1234 Main St" style={{width:"170px"}}/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputAddress">OTP</label>
                                                    <input type="text" className="form-control" id="inputAddress"
                                                        placeholder="1234 Main St" style={{width:"100px"}}/>
                                                </div>
                                                <button type="submit" onClick={this.handleBasicInfoFlag} className="btn mr-3" style={{backgroundColor:"#0071c2",color:"white"}}>Back</button>
                                                {/* <Link to={`${match.url}/payment/getOrderId`}><button type="submit" className="btn mr-3" style={{backgroundColor:"#0071c2",color:"white"}}>Proceed to Pay</button></Link> */}
                                                <button className="btn mr-3" style={{backgroundColor:"#0071c2",color:"white"}} onClick={this.razorPay}>Pay</button>
                                            </div>
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
    isSearch: state.staysSearch.isSearch,
    bookingSearchRequest: state.bookingList.bookingSearchRequest
})

const mapDispatchToProps = dispatch => ({
    bookingSearchRequest: payload => dispatch(bookingSearchRequest(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(BookingPage);