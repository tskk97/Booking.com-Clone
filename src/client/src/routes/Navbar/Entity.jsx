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
import {GiBus} from "react-icons/gi";
import {AiFillTag} from "react-icons/ai";
import {MdLocationOn} from "react-icons/md";
import {GiMedicalPack} from "react-icons/gi";
import {FaSprayCan} from "react-icons/fa";
import {FaPeopleCarry} from "react-icons/fa";
import {GiFoodChain} from "react-icons/gi";
import {MdStars} from "react-icons/md";
import {FaCarAlt} from "react-icons/fa";
import {AiOutlineWifi} from "react-icons/ai";
import {MdPool} from "react-icons/md";
import {GiFamilyHouse} from "react-icons/gi";
import {IoIosRestaurant} from "react-icons/io";


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
                                    <div className={`${style.googleMapDiv}`}>(#Google Map Section)</div>
                                    <div className={`${style.modeOfTransport}`}>
                                        <div style={{
                                            backgroundColor: "#ebf3ff",
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            padding: "10px",
                                            border: "1px solid #ebf3ff"
                                        }}>How to get to The Leela Palace Bangalore from Kempegowda International
                                            Airport
                                        </div>
                                        <div className={`d-flex flex-row justify-content-between`}
                                             style={{borderBottom: "1px solid #ebf3ff"}}>
                                            <div><FaCarAlt/><span
                                                style={{marginTop: "4px", marginLeft: "4px"}}>Car</span></div>
                                            <div style={{fontSize: "14px"}}>45 minutes</div>
                                        </div>

                                    </div>
                                    <div className={`d-flex flex-column ${style.similarDiv}`}>
                                        <div style={{marginTop: "3px", marginBottom: "12px", fontSize: "14px"}}>Like
                                            this one but not totally sure yet?
                                        </div>
                                        <button>Show similar hotels</button>
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
                                            <GiRoyalLove style={{
                                                color: "#0071c2",
                                                border: "1px solid #fff",
                                                fontSize: "22px",
                                                marginTop: "7px"
                                            }}/>
                                            <FcShare style={{marginTop: "7px"}}/>
                                            <button>Reserve</button>
                                        </div>

                                    </div>
                                    <div className={`${style.priceMatchDiv}`}>
                                        <div className={`${style.showCards}`} style={{marginTop: "1%"}}>
                                            <div className={`d-flex flex-row ${style.threeFigures}`}
                                                 style={{marginLeft: "0%"}}>
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
                                        </div>
                                        <div style={{marginTop: "4px", fontWeight: "bold", fontSize: "88%"}}>
                                            <AiFillTag/>We Price Match
                                        </div>
                                    </div>
                                    <div className={`${style.locationDetailsDiv}`} style={{fontSize: "small"}}>
                                        <MdLocationOn style={{color: "#0071c2", fontSize: "22px"}}/>23 Old Airport Road,
                                        560008 Bangalore, India – Great location - show map
                                    </div>
                                    <div style={{border: "1px solid #dae9ff", marginTop: "1%"}}/>

                                    {/*Carousel*/}


                                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active" data-interval="900000">
                                                <img
                                                    src="https://cf.bstatic.com/images/hotel/max1280x900/255/255549892.jpg"
                                                    className="d-block w-100" alt="..."/>
                                            </div>
                                            <div className="carousel-item" data-interval="9000000">
                                                <img
                                                    src="https://cf.bstatic.com/images/hotel/max1280x900/482/48254908.jpg"
                                                    className="d-block w-100" alt="..."/>
                                            </div>
                                            <div className="carousel-item" data-interval="900000">
                                                <img
                                                    src="https://cf.bstatic.com/images/hotel/max1280x900/341/34138027.jpg"
                                                    className="d-block w-100" alt="..."/>
                                            </div>
                                            <div className="carousel-item" data-interval="900000">
                                                <img
                                                    src="https://cf.bstatic.com/images/hotel/max1280x900/341/34137970.jpg"
                                                    className="d-block w-100" alt="..."/>
                                            </div>
                                            <div className="carousel-item" data-interval="900000">
                                                <img
                                                    src="https://cf.bstatic.com/images/hotel/max1280x900/341/34137960.jpg"
                                                    className="d-block w-100" alt="..."/>
                                            </div>
                                            <div className="carousel-item" data-interval="900000">
                                                <img
                                                    src="https://cf.bstatic.com/images/hotel/max1280x900/341/34138033.jpg"
                                                    className="d-block w-100" alt="..."/>
                                            </div>
                                            <div className="carousel-item" data-interval="900000">
                                                <img
                                                    src="https://cf.bstatic.com/images/hotel/max1280x900/341/34138017.jpg"
                                                    className="d-block w-100" alt="..."/>
                                            </div>
                                            <div className="carousel-item" data-interval="900000">
                                                <img
                                                    src="https://cf.bstatic.com/images/hotel/max1280x900/341/34137955.jpg"
                                                    className="d-block w-100" alt="..."/>
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleControls"
                                           role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleControls"
                                           role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                    <div className={`${style.imgPreviewDiv}`}>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                    </div>
                                    <div className={`${style.imgPreviewDiv}`}>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                        <a></a>
                                    </div>

                                    {/*Accordion*/}

                                    {/*<div className="accordion" id="accordionExample">*/}
                                    {/*    <div className="card">*/}
                                    {/*        <div className="card-header" id="headingOne">*/}
                                    {/*            <h2 className="mb-0">*/}
                                    {/*                <button className="btn btn-link btn-block text-left" type="button"*/}
                                    {/*                        data-toggle="collapse" data-target="#collapseOne"*/}
                                    {/*                        aria-expanded="true" aria-controls="collapseOne">*/}
                                    {/*                    Collapsible Group Item #1*/}
                                    {/*                </button>*/}
                                    {/*            </h2>*/}
                                    {/*        </div>*/}

                                    {/*        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"*/}
                                    {/*             data-parent="#accordionExample">*/}
                                    {/*            <div className="card-body">*/}
                                    {/*                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus*/}
                                    {/*                terry richardson ad squid. 3 wolf moon officia aute, non cupidatat*/}
                                    {/*                skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.*/}
                                    {/*                Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid*/}
                                    {/*                single-origin coffee nulla assumenda shoreditch et. Nihil anim*/}
                                    {/*                keffiyeh helvetica, craft beer labore wes anderson cred nesciunt*/}
                                    {/*                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings*/}
                                    {/*                occaecat craft beer farm-to-table, raw denim aesthetic synth*/}
                                    {/*                nesciunt you probably haven't heard of them accusamus labore*/}
                                    {/*                sustainable VHS.*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}

                                    {/* */}
                                    {/*</div>*/}


                                    <div className={`row`}>
                                        <div className={`col-8 ${style.middleDiv}`}
                                             style={{fontSize: "18px", fontWeight: "bold", margin: "15px 0"}}>
                                            <h5>Get the celebrity treatment with world-class service at (#Hotel
                                                Name)</h5>
                                            <div style={{
                                                color: "#b65800",
                                                fontSize: "14px",
                                                fontWeight: "bold",
                                                textAlign: "left"
                                            }}><MdStars style={{fontSize: "25px"}}/> One of our top picks in (#Filler
                                                Location).
                                            </div>

                                            <div className={`${style.descr}`}>(#filler content)</div>

                                            <div className={`${style.descr}`}>Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Ut et volutpat
                                                diam. Pellentesque in consectetur tellus, vitae dignissim felis.
                                                Vestibulum et laoreet eros, in blandit dui. Pellentesque tempus
                                                ullamcorper mi et auctor. Morbi a eros eget tellus imperdiet ullamcorper
                                                vitae ac est. Mauris posuere quam non hendrerit blandit. Fusce vel
                                                congue felis. Mauris dapibus enim arcu, non varius nunc laoreet vitae.
                                                Proin ullamcorper erat quam, sit amet condimentum velit tincidunt quis.
                                                Proin et mi mattis, pretium metus vel, pellentesque justo.
                                            </div>
                                            <div className={`${style.descr}`}>Nam tellus ex, feugiat ut arcu aliquam, lobortis fringilla ante. Cras
                                                metus turpis, sagittis eget mi eget, dapibus sodales ex. Mauris mollis
                                                turpis sollicitudin velit scelerisque, eu commodo dui blandit. Maecenas
                                                vel lorem sit amet dolor accumsan varius rutrum id mauris. Etiam
                                                dignissim urna sit amet velit volutpat, quis tincidunt mi dictum. In vel
                                                sapien sit amet velit imperdiet maximus in vel nibh. Duis accumsan
                                                gravida dolor, vel vehicula mauris condimentum id. Curabitur rutrum
                                                tortor vestibulum tincidunt varius. Integer in pharetra odio, et rutrum
                                                enim. Orci varius natoque penatibus et magnis dis parturient montes,
                                                nascetur ridiculus mus.
                                            </div>
                                            <div className={`${style.descr}`}>Nam tellus ex, feugiat ut arcu aliquam, lobortis fringilla ante. Cras
                                                metus turpis, sagittis eget mi eget, dapibus sodales ex. Mauris mollis
                                                turpis sollicitudin velit scelerisque, eu commodo dui blandit. Maecenas
                                                vel lorem sit amet dolor accumsan varius rutrum id mauris. Etiam
                                                dignissim urna sit amet velit volutpat, quis tincidunt mi dictum. In vel
                                                sapien sit amet velit imperdiet maximus in vel nibh. Duis accumsan
                                                gravida dolor, vel vehicula mauris condimentum id. Curabitur rutrum
                                                tortor vestibulum tincidunt varius. Integer in pharetra odio, et rutrum
                                                enim. Orci varius natoque penatibus et magnis dis parturient montes,
                                                nascetur ridiculus mus.
                                            </div>

                                            <div>
                                                <h4 style={{fontSize:"16px",textAlign:"left",marginTop:"10px"}}>Most popular facilities </h4>
                                                <div className={`${style.facilityDiv}`}>
                                                    <div className={`d-flex flex-row`}>
                                                        <MdPool style={{color:"green",fontSize:"26px"}}/>
                                                        <p style={{fontWeight:"normal",fontSize:"14px"}}>Swimming Pool</p>
                                                    </div>
                                                    <div className={`d-flex flex-row ml-2`}>
                                                        <GiBus style={{color:"green",fontSize:"26px"}}/>
                                                        <p style={{fontWeight:"normal",fontSize:"14px"}}>Airport shuttle</p>
                                                    </div>
                                                    <div className={`d-flex flex-row ml-2`}>
                                                        <GiFamilyHouse style={{color:"green",fontSize:"26px"}}/>
                                                        <p style={{fontWeight:"normal",fontSize:"14px"}}>Family rooms</p>
                                                    </div>
                                                    <div className={`d-flex flex-row ml-2`}>
                                                        <IoIosRestaurant style={{color:"green",fontSize:"26px"}}/>
                                                        <p style={{fontWeight:"normal",fontSize:"14px"}}>Restaurant</p>
                                                    </div>


                                                </div>
                                                <div className={`${style.facilityDiv}`}>

                                                </div>
                                            </div>
                                        </div>
                                        <div className={`col-4 ${style.rightSubDiv}`}>
                                            <div className={`${style.healthAndSafetyDiv}`}>
                                                <h4 style={{fontWeight: "700", fontSize: "16px"}}>Health & safety </h4>
                                                <p style={{fontSize: "12px"}}><span
                                                    style={{color: "#0071c2", fontSize: "12px", fontWeight: "400"}}>Cleanliness rated 9.7</span> by
                                                    guests </p>
                                                <div className={`${style.healthFeaturesDiv}`}>
                                                    <div style={{
                                                        marginRight: "8px",
                                                        fontSize: "22px",
                                                        verticalAlign: "middle"
                                                    }}>
                                                        <GiMedicalPack/>
                                                    </div>
                                                    <div className={`d-flex flex-column`}
                                                         style={{width: "85%", textAlign: "left"}}>
                                                        <div style={{fontSize: "14px", fontWeight: "700"}}>Safety
                                                            features
                                                        </div>
                                                        <div>(#No) measures</div>
                                                    </div>
                                                </div>
                                                <div className={`${style.healthFeaturesDiv}`}>
                                                    <div style={{
                                                        marginRight: "8px",
                                                        fontSize: "22px",
                                                        verticalAlign: "middle"
                                                    }}>
                                                        <FaSprayCan/>
                                                    </div>
                                                    <div className={`d-flex flex-column`}
                                                         style={{width: "85%", textAlign: "left"}}>
                                                        <div style={{fontSize: "14px", fontWeight: "700"}}>Cleanliness &
                                                            disinfection
                                                        </div>
                                                        <div>(#No) measures</div>
                                                    </div>
                                                </div>
                                                <div className={`${style.healthFeaturesDiv}`}>
                                                    <div style={{
                                                        marginRight: "8px",
                                                        fontSize: "22px",
                                                        verticalAlign: "middle"
                                                    }}>
                                                        <FaPeopleCarry/>
                                                    </div>
                                                    <div className={`d-flex flex-column`}
                                                         style={{width: "85%", textAlign: "left"}}>
                                                        <div style={{fontSize: "14px", fontWeight: "700"}}>Physical
                                                            distancing
                                                        </div>
                                                        <div>(#No) measures</div>
                                                    </div>
                                                </div>
                                                <div className={`${style.healthFeaturesDiv}`}>
                                                    <div style={{
                                                        marginRight: "8px",
                                                        fontSize: "22px",
                                                        verticalAlign: "middle"
                                                    }}>
                                                        <GiFoodChain/>
                                                    </div>
                                                    <div className={`d-flex flex-column`}
                                                         style={{width: "85%", textAlign: "left"}}>
                                                        <div style={{fontSize: "14px", fontWeight: "700"}}>Food & drink
                                                            safety
                                                        </div>
                                                        <div>(#No) measures</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${style.guestsLove}`}>
                                                <h5>Guests Love...</h5>
                                                <div className={`${style.healthFeaturesDiv}`}>
                                                    <div style={{
                                                        marginRight: "8px",
                                                        fontSize: "20px",
                                                        verticalAlign: "middle"
                                                    }}>
                                                        <MdStars/>
                                                    </div>
                                                    <div className={`d-flex flex-column`}
                                                         style={{width: "85%", textAlign: "left"}}>
                                                        <div style={{fontSize: "14px", fontWeight: "700"}}>"friendly
                                                            staff"
                                                        </div>
                                                        <div style={{fontSize: "14px"}}>(#No) measures</div>
                                                    </div>
                                                </div>
                                                <div className={`${style.healthFeaturesDiv}`}>
                                                    <div style={{
                                                        marginRight: "8px",
                                                        fontSize: "20px",
                                                        verticalAlign: "middle"
                                                    }}>
                                                        <MdStars/>
                                                    </div>
                                                    <div className={`d-flex flex-column`}
                                                         style={{width: "85%", textAlign: "left"}}>
                                                        <div style={{fontSize: "14px", fontWeight: "700"}}>"excellent
                                                            breakfast"
                                                        </div>
                                                        <div style={{fontSize: "14px"}}>(#No) measures</div>
                                                    </div>
                                                </div>
                                                <div className={`${style.healthFeaturesDiv}`}>
                                                    <div style={{
                                                        marginRight: "8px",
                                                        fontSize: "20px",
                                                        verticalAlign: "middle"
                                                    }}>
                                                        <MdStars/>
                                                    </div>
                                                    <div className={`d-flex flex-column`}
                                                         style={{width: "85%", textAlign: "left"}}>
                                                        <div style={{fontSize: "14px", fontWeight: "700"}}>breakfast
                                                            buffet
                                                        </div>
                                                        <div style={{fontSize: "14px"}}>(#No) measures</div>
                                                    </div>
                                                </div>
                                                <div className={`${style.healthFeaturesDiv}`}>
                                                    <div style={{
                                                        marginRight: "8px",
                                                        fontSize: "20px",
                                                        verticalAlign: "middle"
                                                    }}>
                                                        <MdLocationOn/>
                                                    </div>
                                                    <div className={`d-flex flex-column`}
                                                         style={{width: "85%", textAlign: "left"}}>
                                                        <div style={{fontSize: "14px"}}>Top Location: Highly rated by
                                                            recent guests (8.7)
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={`${style.healthFeaturesDiv}`}>
                                                    <div style={{
                                                        marginRight: "8px",
                                                        fontSize: "20px",
                                                        verticalAlign: "middle"
                                                    }}>
                                                        <IoIosBed/>
                                                    </div>
                                                    <div className={`d-flex flex-column`}
                                                         style={{width: "85%", textAlign: "left"}}>
                                                        <div style={{fontSize: "14px"}}>Want a great night's sleep? This
                                                            hotel was highly-rated for its very comfy beds.
                                                        </div>
                                                    </div>
                                                </div>
                                                <h4 style={{
                                                    color: "#838383",
                                                    fontSize: "15px",
                                                    padding: "0 0 5px 0",
                                                    textAlign: "left"
                                                }}>Breakfast Info</h4>
                                                <div style={{fontSize: "14px"}}>Continental, Italian, Vegetarian, Vegan,
                                                    Halal, Gluten-free, Asian, American, Buffet
                                                </div>
                                                <div className={`d-flex flex-row justify-content-between`}>
                                                    <AiOutlineWifi style={{fontSize: "22px", padding: "2px"}}/>
                                                    <div className={`${style.greenDiv}`}>
                                                        <p>Free Wifi</p>
                                                        <p>Guests consistently rate the wifi as Excellent</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

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