import React, {Component} from 'react';
import Navbar from "./Navbar.jsx";
import style from "./ListResults.module.css"
import {IoIosBed} from "react-icons/io";
import {BsSearch} from "react-icons/bs";
import {FaRegCalendarPlus} from "react-icons/fa";
import {FiHelpCircle} from "react-icons/fi";

class ListResults extends Component {
    render() {
        return (
            <div className={`${style.body}`}>
                <Navbar/>
                <div className={`container-fluid ${style.container}`}>
                    <div className={`row`}>
                        <div className={`col-1`}>1</div>
                        <div className={`col-10 text-center container-fluid ${style.centralDiv}`}>
                            <div className={`row`}>
                                <div className={`col-3 ${style.filters}`}>3
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
                                            <select className="custom-select" id="inputGroupSelect04" style={{textAlign:"left",fontWeight:"bold"}}>
                                                <option selected>Choose...</option>
                                                <option value="1" selected>1 adult</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <div className={`${style.flexRow} ${style.childRoom}`}>
                                                <select className="custom-select" id="inputGroupSelect04" style={{textAlign:"left",fontWeight:"bold"}}>
                                                    <option selected>Choose...</option>
                                                    <option value="1" selected>No children</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                <select className="custom-select" id="inputGroupSelect04" style={{textAlign:"left",fontWeight:"bold"}}>
                                                    <option selected>Choose...</option>
                                                    <option value="1" selected>1 room</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className={`${style.flexRow} ${style.travelWork}`}>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input"
                                                       id="customCheck1"/>
                                                    <label className="custom-control-label" htmlFor="customCheck1">I'm traveling for work </label>
                                            </div>
                                            <FiHelpCircle style={{height:"28px"}}/>
                                        </div>
                                        <button className={`${style.searchBtn}`} style={{textAlign:"center"}}>Search</button>
                                    </div>
                                </div>
                                <div className={`col-9 ${style.Results}`}>
                                    <div className={`${style.flexColRes}`}>
                                        <div style={{fontWeight:"bold",fontSize:"20px"}}>(#Filler Destination): (#Total No) Properties Found</div>
                                    </div>
                                    <hr/>
                                    <div className={`${style.blueBg}`}>
                                        <div className={`${style.filterBtn}`}>
                                            <button className={`form-control btn`}>Top picks for families</button>
                                            <button className={`form-control btn`}>show homes first</button>
                                            <button className={`form-control btn`}>price(lowest first)</button>
                                            <button className={`form-control btn`}>stars</button>
                                            <button className={`form-control btn`}>star rating and price</button>
                                            <button className={`form-control btn`}>...</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`col-1`}>3</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListResults;