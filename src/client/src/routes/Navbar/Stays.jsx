import React from 'react'
// import Register from '../Registration/register'
import style from "./Stays.module.css";
import Navbar from "./Navbar";
import {IoIosBed} from "react-icons/io";
import {FaRegCalendarAlt} from  "react-icons/fa";
import {FiUser} from "react-icons/fi";

class Stays extends React.Component{
    render(){
        console.log(this.props)
        const activePath = this.props.match.url
        return(
            <>
                <Navbar activePath={activePath}/>
                <div className={`${style.body} container-fluid`}>
                    <div className={`row ${style.row}`}>
                        <div className={`col-1`}></div>
                        <div className={`col-10`}>
                            <div className={`${style.flexCol}`}>
                                <h4 style={{fontWeight:"bold",marginTop:"7px"}}>Find deals on hotels, homes and much more...</h4>
                                <small style={{fontWeight:"bold"}}>From cosy country homes to funky city flats</small>
                                <div className={`${style.flexRowInput}`}>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-outline-secondary" type="button"
                                                    id="button-addon1"><IoIosBed/>
                                            </button>
                                        </div>
                                        <input type="text" className={`form-control ${style.bed}`} placeholder="Where are you going?"
                                               aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-outline-secondary" type="button"
                                                    id="button-addon1"><FaRegCalendarAlt/>
                                            </button>
                                        </div>
                                        <input type="text" className={`form-control ${style.calendar}`} placeholder="Check-in - Check-out"
                                               aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-outline-secondary" type="button"
                                                    id="button-addon1"><FiUser/>
                                            </button>
                                        </div>
                                        <input type="text" className={`form-control ${style.user}`} placeholder=".."
                                               aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                    </div>
                                    <button className={`${style.searchBtn}`}>Search</button>
                                </div>
                                <div className={`${style.flexRow}`}>
                                    <input type="checkbox" style={{marginRight:"7px"}}/>
                                    <p>I'm traveling for work </p>
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
export default Stays