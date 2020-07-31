import React, {Component} from 'react';
import style from "./BillingDetails.module.css";
import {RiStarSLine} from "react-icons/ri";
import {AiOutlineLike} from "react-icons/ai";
import {Link} from 'react-router-dom'

class BillingDetails extends Component {
    handleAlert = () => {
        alert("Please Sign-in or Register to proceed")
    }
    render() {
        let {data, match, checkAvailability, checkInDate, checkOutDate, num_adults, num_child, num_rooms, num_nights, l_isAuth, r_isAuth} = this.props
        const month = {
            "01":"Jan",
            "02":"Feb",
            "03":"Mar",
            "04":"Apr",
            "05":"May",
            "06":"Jun",
            "07":"Jul",
            "08":"Aug",
            "09":"Sep",
            "10":"Oct",
            "11":"Nov",
            "12":"Dec"
        }
        checkInDate = checkInDate.split("-")
        checkOutDate = checkOutDate.split("-")
        console.log(data, "\n", this.props)
        const url = match.url + "/booking/getOrderId?checkin_date="+checkInDate[2]+"&checkin_month="+month[checkInDate[1]]+"&checkin_year="+checkInDate[0]+"&checkout_date="+checkOutDate[2]+"&checkout_month="+month[checkOutDate[1]]+"&checkout_year="+checkOutDate[0]+"&num_rooms="+num_rooms+"&num_nights="+num_nights+"&num_adults="+num_adults+"&num_child="+num_child
        console.log(url)
        return (
            <div>
                <div className={`${style.confirmDiv}`} style={{marginTop:"3%"}}>
                    <div className={`d-flex flex-column`}>
                        <div className={`d-flex flex-row`}>
                        <div className="mb-3" style={{fontSize:"25px",fontWeight:"bold"}}> {data.name}</div>
                            <RiStarSLine
                                style={{marginTop: "7px", marginLeft: "12px", color: "#febb02"}}/>
                            <RiStarSLine style={{marginTop: "7px", color: "#febb02"}}/>
                            <RiStarSLine style={{marginTop: "7px", color: "#febb02"}}/>
                            <RiStarSLine style={{marginTop: "7px", color: "#febb02"}}/>
                            <RiStarSLine style={{marginTop: "7px", color: "#febb02"}}/>
                            <div className={`${style.yellowLike}`}>
                                <AiOutlineLike style={{color: "white",marginLeft:"2px",marginBottom:"2px"}}/>
                            </div>
                        </div>
                        <h4 className="text-left">Status: <span className={checkAvailability === "Available" ? "text-success my-5" : "text-danger my-5"}>{checkAvailability}</span></h4>
                        {
                            checkAvailability === "Available" ? 
                            <div className={`d-flex flex-column mt-3`} style={{textAlign:"left"}}>
                                <div style={{fontSize:"14px"}} className={`d-flex flex-row`}>
                                    <div style={{width:"20%"}}>No.of Rooms</div>
                                    <div className={`ml-4`}>{data.num_rooms}</div>
                                </div>
                                <div style={{fontSize:"14px"}} className={`d-flex flex-row mt-2`}>
                                    <div style={{width:"20%"}}>No.of Adults</div>
                                    <div className={`ml-4`}>{data.num_adults}</div>
                                </div>
                                <div style={{fontSize:"14px"}} className={`d-flex flex-row mt-2`}>
                                    <div style={{width:"20%"}}>No.of Children</div>
                                    <div className={`ml-4`}>{data.num_child}</div>
                                </div>
                                <div style={{fontSize:"14px"}} className={`d-flex flex-row mt-2`}>
                                    <div style={{width:"20%"}}>Price per adult</div>
                                    <div className={`ml-4`}>₹{data.adultPrice}</div>
                                </div>
                                <div style={{fontSize:"14px"}} className={`d-flex flex-row mt-2`}>
                                    <div style={{width:"20%"}}>Price per child</div>
                                    <div className={`ml-4`}>₹{data.childPrice}</div>
                                </div>
                                <div style={{fontSize:"14px"}} className={`d-flex flex-row mt-2`}>
                                    <div style={{width:"20%"}}>Service Fee</div>
                                    <div className={`ml-4`}>₹1000</div>
                                </div>
                                <div style={{fontSize:"14px"}} className={`d-flex flex-row mt-2`}>
                                    <div style={{width:"20%"}}>GST</div>
                                    <div className={`ml-4`}>₹500</div>
                                </div>
                                <div style={{fontSize:"14px"}} className={`d-flex flex-row mt-2`}>
                                    <div style={{width:"20%"}}>Processing Fee</div>
                                    <div className={`ml-4`}>₹50</div>
                                </div>
                                <div style={{fontSize:"24px"}} className={`d-flex flex-row mt-2`}>
                                    <div style={{width:"20%"}}>Total</div>
                                    <div className={`ml-4`}>₹{data.total}</div>
                                </div>
                                {
                                    l_isAuth || r_isAuth ? 
                                    <Link to={url}>
                                        <button className={`btn mt-4 btn-small`} style={{backgroundColor:"#0071c2",color:"white",width:"20%",margin:"0px auto"}}>Proceed to Pay</button>
                                    </Link>
                                    :
                                    <button className={`btn mt-4 btn-small`} style={{backgroundColor:"#0071c2",color:"white",width:"20%",margin:"0px auto"}} onClick={this.handleAlert}>Proceed to Pay</button>
                                }
                            </div>
                            :
                            <div></div>
                        }
                    </div>
                </div>

            </div>
        );
    }
}

export default BillingDetails;