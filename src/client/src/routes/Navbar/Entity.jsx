import React, {Component} from 'react';
import Navbar from "./Navbar.jsx";
import style from "./Entity.module.css"
import {IoIosBed} from "react-icons/io";
import {BsSearch} from "react-icons/bs";
import {FaRegCalendarPlus} from "react-icons/fa";
import {FiHelpCircle} from "react-icons/fi";
import data from "./data.json";
import filterData from "./filter.json";
import ResultCard from "./ResultCard";
import {v4 as uuidv4} from 'uuid';
import FilterByCards from "./FilterByCards";
import {GiRoyalLove} from "react-icons/gi";
import {RiStarSLine} from "react-icons/ri";
import {AiOutlineLike} from "react-icons/ai";
import {GiTwoShadows} from "react-icons/gi";
import {FcShare} from "react-icons/fc";

class Entity extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={`${style.body}`}>
                <Navbar/>
                <div className={`container-fluid ${style.container}`}>
                    <div className={`row`}>
                        <div className={`col-1`}></div>
                        <div className={`col-10 text-center container-fluid ${style.centralDiv}`}>
                            <div className={`row`}>
                                <div className={`col-3 ${style.filters}`}>
                                    <div className={`${style.reserveDiv}`}>
                                        <button className={`${style.reserveBtn}`}>Reserve</button>
                                        <button className={`${style.bookBtn}`}><GiRoyalLove
                                            style={{textAlign: "left", marginTop: "5%", fontSize: "20px"}}/> <p
                                            style={{marginTop: "2%"}}>Save <br/> so you remember to book</p></button>
                                        <p className={`text-muted`}
                                           style={{fontSize: "12px", color: "#878787", textAlign: "center"}}>Saved to
                                            1178 lists</p>
                                    </div>
                                    <div className={`${style.basicFilter}`}>
                                        <h5>Search</h5>
                                        <div>
                                            <small>Destination/property name: </small>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <button className="btn btn-small  btn-outline-none" type="button"
                                                            id="button-addon1" style={{backgroundColor: "white"}}>
                                                        <BsSearch/>
                                                    </button>
                                                </div>
                                                <input type="text" className={`form-control ${style.bed}`}
                                                       placeholder="Where are you going?"
                                                       aria-label="Example text with button addon"
                                                       aria-describedby="button-addon1" style={{border: "none"}}/>
                                            </div>
                                        </div>
                                        <div>
                                            <small>Check-in date</small>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <button className="btn btn-small  btn-outline-none" type="button"
                                                            id="button-addon1" style={{backgroundColor: "white"}}>
                                                        <FaRegCalendarPlus/>
                                                    </button>
                                                </div>
                                                <input type="text" className={`form-control ${style.bed}`}
                                                       placeholder="Check-in Date"
                                                       aria-label="Example text with button addon"
                                                       aria-describedby="button-addon1" style={{border: "none"}}/>
                                            </div>
                                        </div>
                                        <div>
                                            <small>Check-out date </small>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <button className="btn btn-small  btn-outline-none" type="button"
                                                            id="button-addon1" style={{backgroundColor: "white"}}>
                                                        <FaRegCalendarPlus/>
                                                    </button>
                                                </div>
                                                <input type="text" className={`form-control ${style.bed}`}
                                                       placeholder="Check-out Date"
                                                       aria-label="Example text with button addon"
                                                       aria-describedby="button-addon1" style={{border: "none"}}/>
                                            </div>
                                        </div>
                                        <div>
                                            <select value={this.state.adults} onChange={this.handleAdults}
                                                    className="custom-select" id="inputGroupSelect04"
                                                    style={{textAlign: "left", fontWeight: "bold"}}>
                                                <option>Choose...</option>
                                                <option value="1">1 adult</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <div className={`${style.flexRow} ${style.childRoom}`}>
                                                <select value={this.state.children} onChange={this.handleChildren}
                                                        className="custom-select" id="inputGroupSelect04"
                                                        style={{textAlign: "left", fontWeight: "bold"}}>
                                                    <option>Choose...</option>
                                                    <option value="1">No children</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                <select value={this.state.rooms} onChange={this.handleRooms}
                                                        className="custom-select" id="inputGroupSelect04"
                                                        style={{textAlign: "left", fontWeight: "bold"}}>
                                                    <option>Choose...</option>
                                                    <option value="1">1 room</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className={`${style.flexRow} ${style.travelWork}`}>
                                            <div className="custom-control custom-checkbox">
                                                <input name="travelWorkCheckBox" type="checkbox"
                                                       value={this.state.travelWorkCheckBox}
                                                       onChange={this.onChangeInput} className="custom-control-input"
                                                       id="customCheck1"/>
                                                <label className="custom-control-label" htmlFor="customCheck1">I'm
                                                    traveling for work </label>
                                            </div>
                                            <FiHelpCircle style={{height: "28px"}}/>
                                        </div>
                                        <button className={`${style.searchBtn}`} style={{textAlign: "center"}}>Search
                                        </button>
                                    </div>

                                </div>

                                {/*Middle section*/}


                                <div className={`col-9 ${style.Results}`}>
                                    <div className={`${style.flexColRes}`}>
                                        <div className={`${style.topBtnDiv}`}>
                                            <button>Info & prices</button>
                                            <button>Facilities</button>
                                            <button>House Rules</button>
                                            <button>The fine print</button>
                                            <button>Guest reviews(#filler count)</button>
                                        </div>
                                    </div>
                                    <div className={`${style.titleRow}`}>
                                        <div className={`d-flex flex-row`}>
                                            <div className={`${style.tag}`}>Hotel</div>
                                            <h4 style={{fontWeight: "bold"}}>The Leela Palace Bangalore</h4>
                                            <RiStarSLine
                                                style={{marginTop: "7px", marginLeft: "12px", color: "#febb02"}}/>
                                            <RiStarSLine style={{marginTop: "7px", color: "#febb02"}}/>
                                            <RiStarSLine style={{marginTop: "7px", color: "#febb02"}}/>
                                            <RiStarSLine style={{marginTop: "7px", color: "#febb02"}}/>
                                            <RiStarSLine style={{marginTop: "7px", color: "#febb02"}}/>
                                            <div className={`${style.yellowLike}`}>
                                                <AiOutlineLike style={{color: "white"}}/>
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
                                        </div>
                                        <div className={`${style.shareDiv}`}>
                                            <GiRoyalLove style={{color:"#0071c2",border:"1px solid #fff",fontSize:"22px",marginTop:"7px"}}/>
                                            <FcShare style={{marginTop:"7px"}}/>
                                            <button>Reserve</button>
                                        </div>

                                    </div>
                                    <div className={`${style.showCards}`}>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`col-1`}>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Entity;


// export default ListResults;