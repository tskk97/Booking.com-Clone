import React from "react";
import style from "./Footer.module.css";


const Footer = () => {
    return (
        <>
            <div className={`footer ${style.footer}`}>
                <div className={`footer-header ${style.footerHeader} d-flex flex-column`}>
                    <div className={`${style.headerFirstDiv}`}>
                        <div className={`d-flex flex-row ${style.buttonDiv}`}>
                            <div>
                                <button className={`btn`}>Get the App</button>
                            </div>
                            <div className={`ml-3`}>
                                <button className={`btn`}>List your Property</button>
                            </div>
                        </div>
                    </div>
                    <hr style={{border: "1px solid #bad4f7", width: "100%"}}/>
                    <div className={`container-fluid`}>
                        <div className={`row`}>
                            <div className={`col-1`}></div>
                            <div className={`col-10`}>
                                <div className={`d-flex flex-row ${style.blueDivListings}`}>
                                    <div style={{marginLeft: "0px"}}>Mobile version</div>
                                    <div>Manage your bookings</div>
                                    <div>Customer Service Help</div>
                                    <div>Become an affiliate</div>
                                    <div>Booking.com for Business</div>
                                </div>
                            </div>
                            <div className={`col-1`}></div>
                        </div>
                    </div>
                </div>

                <div className={`container-fluid`}>
                    <div className={`row`}>
                        <div className={`col-1`}></div>
                        <div className={`col-10`}>
                            <div className={`footer-content ${style.footerContent}`}>
                                <div className={`footer-about ${style.footerAbout}`}>
                                    <div>Countries</div>
                                    <div>Regions</div>
                                    <div>Cities</div>
                                    <div>Districts</div>
                                    <div>Airports</div>
                                    <div>Hotels</div>
                                    <div>Place of interest</div>
                                </div>
                                <div className={`footer-about ${style.footerAbout}`}>
                                    <div>Homes</div>
                                    <div>Apartments</div>
                                    <div>Resorts</div>
                                    <div>Villas</div>
                                    <div>Hostels</div>
                                    <div>B&Bs</div>
                                    <div>Guest houses</div>
                                </div>
                                <div className={`footer-about ${style.footerAbout}`}>
                                    <div>Unique places to stay</div>
                                    <div>All destinations</div>
                                    <div>Reviews</div>
                                    <div>Unpacked: Travel articles</div>
                                    <div>Travel communities</div>
                                </div>
                                <div className={`footer-about ${style.footerAbout}`}>
                                    <div>Car rental</div>
                                    <div>Flight finder</div>
                                    <div>Restaurant reservations</div>
                                    <div>Booking.com for Travel Agents</div>
                                </div>
                                <div className={`footer-about ${style.footerAbout}`}>
                                    <div>Coronavirus (COVID-19) FAQs</div>
                                    <div>Customer Service Help</div>
                                    <div>Partner help</div>
                                    <div>Careers</div>
                                    <div>Press center</div>
                                    <div>Safety Resource Center</div>

                                </div>
                            </div>

                            <div className={`${style.descr}`}>
                                Whoever you are, whatever you're looking for, we have the perfect place for you. Our
                                29,668,378 listings include 6,709,912 listings of homes, apartments, and other unique
                                places to stay, and are located in 154,175 destinations in 225 countries and
                                territories. Booking.com B.V. is based in Amsterdam, the Netherlands and is supported
                                internationally by <span style={{color:"#0071c2",fontWeight:"bold"}}>198 offices in 70 countries.</span>
                            </div>

                            <div style={{color:"#0071c2",fontSize:"1.1em",textAlign:"center",fontWeight:"bold"}}>
                                Extranet login
                            </div>

                            <div style={{fontSize:"13px",color:"#333",marginTop:"2%"}}>
                                Copyright © 2020–XXXX BookingClone.com™. All rights reserved.
                            </div>
                            <div style={{color:"#333",margin:"2% 2%",textAlign:"center",fontSize:"13px"}}>Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services. </div>
                            <div className={`mt-3 d-flex flex-row text-center`}>
                                <div className={`${style.logos} justify-content-center`} style={{margin:"0px auto"}}>
                                    <div style={{marginLeft:"0%",textAlign:"center"}}><img src={`https://cf.bstatic.com/static/img/tfl/group_logos/logo_booking/27c8d1832de6a3123b6ee45b59ae2f81b0d9d0d0.png`}width="91" height="26"/></div>
                                    <div style={{textAlign:"center"}}><img src={`https://cf.bstatic.com/static/img/tfl/group_logos/logo_priceline/f80e129541f2a952d470df2447373390f3dd4e44.png`}width="91" height="26" /></div>
                                    <div style={{textAlign:"center"}}><img src={`https://cf.bstatic.com/static/img/tfl/group_logos/logo_kayak/83ef7122074473a6566094e957ff834badb58ce6.png`}width="91" height="26" /></div>
                                    <div style={{textAlign:"center"}}><img src={`https://cf.bstatic.com/static/img/tfl/group_logos/logo_agoda/1c9191b6a3651bf030e41e99a153b64f449845ed.png`}width="91" height="26" /></div>
                                    <div style={{textAlign:"center"}}><img src={`https://cf.bstatic.com/static/img/tfl/group_logos/logo_rentalcars/6bc5ec89d870111592a378bbe7a2086f0b01abc4.png`}width="91" height="26" /></div>
                                    <div style={{textAlign:"center"}}><img src={`https://cf.bstatic.com/static/img/tfl/group_logos/logo_opentable/a4b50503eda6c15773d6e61c238230eb42fb050d.png`}width="91" height="26" /></div>
                                </div>
                            </div>
                        </div>
                        <div className={`col-1`}></div>
                    </div>
                </div>

                <div className="footer-links"></div>
                <div className="footer-social"></div>

                {/*<div className={`footer-bottom ${style.footerBottom}`}>*/}
                {/*    © 2020 WonderEats. All Rights Reserved.*/}
                {/*</div>*/}

            </div>
        </>
    )
}


export default Footer;