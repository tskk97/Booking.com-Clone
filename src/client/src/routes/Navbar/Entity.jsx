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

class Entity extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
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
                                        <div style={{fontWeight: "bold", fontSize: "20px"}}>(#filler Search): (length of search) Properties Found</div>
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