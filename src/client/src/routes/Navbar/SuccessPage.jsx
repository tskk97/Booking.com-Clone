import React from 'react'
import style from "./SuccessPage.module.css";
import Navbar from "./Navbar";
import {TiTickOutline} from "react-icons/ti";
import {RiStarSLine} from "react-icons/ri";
import {AiOutlineLike} from "react-icons/ai";


class SuccessPage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <>
                <Navbar/>
                <div className={`${style.body} container-fluid`}>
                    <div className={`row ${style.row}`}>
                        <div className={`col-2`}></div>
                        <div className={`col-8`}>
                            <div className={`${style.confirmDiv}`}>
                                <div style={{fontSize: "16px"}}>Thanks, (Bipin)!</div>
                                <div style={{fontSize: "23px"}}>Your booking in Bangalore is confirmed.</div>
                                <div className={`d-flex flex-column`}>
                                    <div className={`d-flex flex-row mt-3`}>
                                        <TiTickOutline style={{color: "green"}} size={`2em`}/>
                                        <div className={`mt-1`} style={{fontSize: "16px", fontWeight: "normal"}}>We sent
                                            your confirmation email to <span
                                                style={{fontWeight: "bold"}}>bipinbabu@live.com</span></div>
                                    </div>
                                    <div className={`d-flex flex-row mt-3`}>
                                        <TiTickOutline style={{color: "green"}} size={`2em`}/>
                                        <div className={`mt-1`} style={{fontSize: "16px", fontWeight: "normal"}}>You can
                                            change your booking online anytime
                                        </div>
                                    </div>
                                    <div className={`d-flex flex-row mt-3`}>
                                        <TiTickOutline style={{color: "green"}} size={`2em`}/>
                                        <div className={`mt-1`}
                                             style={{fontSize: "16px", fontWeight: "normal"}}>Your <span
                                            style={{fontWeight: "bold"}}>payment</span> will be handled by <span
                                            style={{fontWeight: "bold"}}>(#Hotel Name)</span>. The Price section below
                                            has more details.
                                        </div>
                                    </div>
                                    <div className={`d-flex flex-row mt-3`}>
                                        <TiTickOutline style={{color: "green"}} size={`2em`}/>
                                        <div className={`mt-1`} style={{fontSize: "16px", fontWeight: "normal"}}>Get
                                            paperless confirmation when you download the app
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`d-flex flex-row mt-4 mb-4`} style={{backgroundColor:"#fff",padding:"20px"}}>
                                <div className={`d-flex flex-row`}>
                                    <div className={`d-flex flex-column pr-4`}>
                                        <div style={{fontSize:"small",color:"#777"}}>Check-in</div>
                                        <div style={{borderRight:"1px solid gray"}} className={`pr-4`}>
                                            <div style={{fontSize:"46px",fontWeight:"bold",textAlign:"center"}}>31</div>
                                            <div style={{fontSize:"12px",marginTop:"0px",textAlign:"center",fontWeight:"bold"}}>Jul 2020</div>
                                            <div style={{fontSize:"12px",textAlign:"center"}}>Friday</div>
                                        </div>
                                    </div>
                                    <div className={`d-flex flex-column pr-4`}>
                                        <div style={{fontSize:"small",color:"#777"}}>Check-in</div>
                                        <div className={`pr-4`}>
                                            <div style={{fontSize:"46px",fontWeight:"bold",textAlign:"center"}}>1</div>
                                            <div style={{fontSize:"12px",marginTop:"0px",textAlign:"center",fontWeight:"bold"}}>AUG 2020</div>
                                            <div style={{fontSize:"12px",textAlign:"center"}}>Saturday</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${style.separationDiv}`}>
                                </div>
                                <div style={{fontSize:"36px",fontWeight:"bold",color:"green",marginTop:"5%",textAlign:"center",marginLeft:"80px"}}>Success</div>
                            </div>
                            <div style={{fontSize:"20px",fontWeight:"700",marginTop:"10px"}}>Check Your Details</div>
                            <div className={`${style.confirmDiv}`} style={{marginTop:"3%"}}>
                                <div className={`d-flex flex-column`}>
                                    <div className={`d-flex flex-row`}>
                                        <div style={{fontSize:"18px",fontWeight:"bold"}}>Radisson Bengaluru City Center</div>

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
                                    <div className={`d-flex flex-column mt-3`}>
                                        <div style={{fontSize:"14px"}} className={`d-flex flex-row`}>
                                            <div style={{width:"20%"}}>Confirmation number</div>
                                            <div className={`ml-4`}>2214.744.336</div>
                                        </div>
                                        <div style={{fontSize:"14px"}} className={`d-flex flex-row mt-2`}>
                                            <div style={{width:"20%"}}>PIN Code</div>
                                            <div className={`ml-4`}>(#ZIP CODE)</div>
                                        </div>
                                        <div style={{fontSize:"14px"}} className={`d-flex flex-row mt-2`}>
                                            <div style={{width:"20%"}}>Booking Details</div>
                                            <div className={`ml-4`}>1 night, 1 room</div>
                                        </div>
                                        <div style={{fontSize:"14px"}} className={`d-flex flex-row mt-2`}>
                                            <div style={{width:"20%"}}>You booked for</div>
                                            <div className={`ml-4`}>1 Adult, 1 child</div>
                                        </div>
                                        <div style={{fontSize:"14px"}} className={`d-flex flex-row mt-2`}>
                                            <div style={{width:"20%"}}>Check-in</div>
                                            <div className={`ml-4`}>Friday, July 31, 2020 (12:00 PM - 11:30 PM)</div>
                                        </div>
                                        <div style={{fontSize:"14px"}} className={`d-flex flex-row mt-2`}>
                                            <div style={{width:"20%"}}>Check-out</div>
                                            <div className={`ml-4`}>Saturday, August 1, 2020 (1:00 AM - 12:00 PM)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={`col-2`}></div>
                    </div>
                </div>
            </>
        )
    }
}

export default SuccessPage;