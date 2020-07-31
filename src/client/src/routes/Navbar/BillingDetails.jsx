import React, {Component} from 'react';
import style from "./BillingDetails.module.css";
import {RiStarSLine} from "react-icons/ri";
import {AiOutlineLike} from "react-icons/ai";

class BillingDetails extends Component {
    render() {
        return (
            <div>
                <div className={`${style.confirmDiv}`} style={{marginTop:"3%"}}>
                    <div className={`d-flex flex-column`}>
                        <div className={`d-flex flex-row`}>
                            <div style={{fontSize:"18px",fontWeight:"bold"}}>The Leela Palace Bangalore</div>

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
                        <div className={`d-flex flex-column mt-3`} style={{textAlign:"left"}}>
                            <div style={{fontSize:"14px"}} className={`d-flex flex-row`}>
                                <div style={{width:"20%"}}>No.of Rooms</div>
                                <div className={`ml-4`}>2</div>
                            </div>
                            <div style={{fontSize:"14px"}} className={`d-flex flex-row mt-2`}>
                                <div style={{width:"20%"}}>No.of Adults</div>
                                <div className={`ml-4`}>2</div>
                            </div>
                            <div style={{fontSize:"14px"}} className={`d-flex flex-row mt-2`}>
                                <div style={{width:"20%"}}>No.of Children</div>
                                <div className={`ml-4`}>2</div>
                            </div>
                            <div style={{fontSize:"14px"}} className={`d-flex flex-row mt-2`}>
                                <div style={{width:"20%"}}>Price per adult</div>
                                <div className={`ml-4`}>₹3000</div>
                            </div>
                            <div style={{fontSize:"14px"}} className={`d-flex flex-row mt-2`}>
                                <div style={{width:"20%"}}>Price per child</div>
                                <div className={`ml-4`}>₹500</div>
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
                                <div className={`ml-4`}>(#Total Amount)</div>
                            </div>
                            <button className={`btn mt-4 btn-small`} style={{backgroundColor:"#0071c2",color:"white",width:"20%",margin:"0px auto"}}>Proceed to Pay</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default BillingDetails;