import React, {Component} from 'react';
import Navbar from "./Navbar.jsx";
import style from "./Entity.module.css"
import ReviewItem from "./ReviewItem";
import RecommendCard from "./RecommendCard";
import {IoIosBed} from "react-icons/io";
import {BsSearch} from "react-icons/bs";
import {FaRegCalendarPlus} from "react-icons/fa";
import {FiHelpCircle} from "react-icons/fi";
// import data from "./data.json";
import {v4 as uuidv4} from 'uuid';
// import FilterByCards from "./FilterByCards";
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
import arr_id1 from './id1.json'
import ImgsEntity from './ImgsEntity.jsx';
import {connect} from 'react-redux'
import {entityListData} from '../../redux/EntityDetails/action.js';
import {MdPool} from "react-icons/md";
import {GiFamilyHouse} from "react-icons/gi";
import {IoIosRestaurant} from "react-icons/io";
import {BsUnlockFill} from "react-icons/bs";
import {BsInfoCircle} from "react-icons/bs";
// import {DateRangePicker} from "react-dates";
import {SingleDatePicker} from "react-dates/esm";
import {AiOutlineDislike} from "react-icons/ai";
import Carousel from "react-elastic-carousel";
import {bookingSearchData} from '../../redux/Booking/action'
import {Link} from 'react-router-dom'
import BillingPage from './BillingPage.jsx';

class Entity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entityId: "",
            roomBookPage:"",
            adultBookPage:"",
            childrenBookPage:"",
            checkInDate:"",
            checkOutDate:"",
            checkAvailFlag:true
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        const {location, match, entityListData} = this.props
        let obj = {
            prop_id:match.params.prop_id
        }
        entityListData(obj)
        // console.log(match.params)   
    }
    
    handleCheckAvailable=()=>{
        const {roomBookPage,childrenBookPage,adultBookPage} = this.state
        const {entityListData,match,bookingSearchData,checkAvailability} = this.props
        console.log(checkAvailability)
             console.log("arun")
            this.setState({
                checkAvailFlag:false
            })
        let obj = {
            num_rooms:roomBookPage,
            num_adults:adultBookPage,
            num_child:childrenBookPage,
            prop_id:match.params.prop_id
        }

        // bookingSearchData(obj)
        console.log(Object.keys(obj).length)
        entityListData(obj)
    }

    handleChangeNow=()=>{
        const {roomBookPage,childrenBookPage,adultBookPage} = this.state

    }



    render() {
        const {entityData, reviewData, recommendationsData,checkAvailability} = this.props
        const {checkInDate,checkOutDate,roomBookPage,childrenBookPage,adultBookPage} = this.state
        console.log(entityData)
        const adultCount = entityData["adult_budget_per_night"] * adultBookPage
        const childCount = entityData['child_budget_per_night'] * childrenBookPage
        const total = roomBookPage * (adultCount + childCount + 1000 + 500 +50)
        console.log(total)
        let obj = {
            num_rooms:roomBookPage,
            num_adults:adultBookPage,
            num_child:childrenBookPage,
            total:total
        }
        console.log(obj)
        const breakPoints = [
            { width: 1, itemsToShow: 3 },
            { width: 550, itemsToShow: 3 },
            { width: 768, itemsToShow: 4 },
            { width: 1200, itemsToShow: 4 }
        ];
        const roomNum = entityData.available_rooms
        const adultNum = Number(roomNum*2)
        // const childNum = roomNum
        const roomArr =[]
        const adultArr = []
        const childArr = []
        for(var i=1;i<=roomNum;i++){
            roomArr.push(i)
        }
        for(var j=1;j<=adultNum;j++){
            adultArr.push(j)
        }
        for(var i=0;i<=roomNum;i++){
            childArr.push(i)
        }
        const recommendations = [
            {
                "id": 5,
                "property_name": "Radisson Bengaluru City Center",
                "property_type_name": "Hotels",
                "city_name": "Bangalore",
                "img_path_url": "https://cf.bstatic.com/xdata/images/hotel/square600/232847950.webp?k=eaa659d084fca9e43fd6f0f0c40d0c4f72c284a161031e4adc9090cbae63a4b6&o=",
                "budget": "4800",
                "rating": "5",
                "review_score": "8.6"
            },
            {
                "id": 9,
                "property_name": "Taj Yeshwantpur Bengaluru",
                "property_type_name": "Hotels",
                "city_name": "Bangalore",
                "img_path_url": "https://cf.bstatic.com/xdata/images/hotel/square600/17173782.webp?k=2f452278302c012ba3eae7f27386b2cf94c3b6cb18b2135f7ecd2082dd2d2f87&o=",
                "budget": "5300",
                "rating": "5",
                "review_score": "8.8"
            },
            {
                "id": 13,
                "property_name": "The Oberoi Bengaluru Opens in new window",
                "property_type_name": "Hotels",
                "city_name": "Bangalore",
                "img_path_url": "https://cf.bstatic.com/xdata/images/hotel/square600/31211348.webp?k=c469403df80f10e33120c7be42b61d458746716a4e04c62ad4b9afc1c22edc98&o=",
                "budget": "5600",
                "rating": "5",
                "review_score": "9.2"
            },
            {
                "id": 17,
                "property_name": "The Chancery Pavilion",
                "property_type_name": "Hotels",
                "city_name": "Bangalore",
                "img_path_url": "https://cf.bstatic.com/xdata/images/hotel/square600/124204205.jpg?k=9591887684f038b53d392759c54c1e6be698e404d008c7a4566cb7ecae68fe2f&o=",
                "budget": "5300",
                "rating": "4",
                "review_score": "7.1"
            }
        ]
        // console.log("entity data is", entityData)
        // console.log(checkInDate,checkOutDate)
        const reviewArray = [["Rooms are beautiful, staff is amazing, as is breakfast", "Sarah", "USA"]]
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
                                        }}>How to come from Airport
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
                                        <button style={{color: "#0071c2"}}>Show similar hotels</button>
                                    </div>

                                    <div className={`d-flex flex-column ${style.similarDiv}`}
                                         style={{borderBottom: "1px solid #e6e6e6"}}>
                                        <h4 style={{fontWeight: "700", fontSize: "16px", textAlign: "left"}}>Questions
                                            you may have</h4>
                                        <p style={{fontSize: "14px", textAlign: "left"}} className={`text-muted`}>Find
                                            quick answers or ask questions to the property</p>
                                    </div>
                                    <div className={`d-flex flex-column ${style.similarDiv}`}
                                         style={{borderBottom: "1px solid #e6e6e6"}}>
                                        <h4 style={{fontWeight: "700", fontSize: "14px", textAlign: "left"}}>My wife is
                                            disabled we need a room for disabled with enough space next to toilet so
                                            that my wife can move from wheelchair on toilet Please let us know e.g. do
                                            you offer room service? </h4>
                                        <p style={{fontSize: "14px", textAlign: "left"}} className={`text-muted`}>Dear
                                            Guest, We have room as requested, since hotel is operation in phases request
                                            to confirm with us before arriva.Room service will be available. </p>
                                        <div className={`d-flex flex-row justify-content-between`}>
                                            <p style={{color: "#0071c2", fontSize: "14px"}}><AiOutlineLike/> Helpful</p>
                                            <p style={{color: "#0071c2", fontSize: "14px"}}><AiOutlineDislike/> Helpful
                                            </p>
                                        </div>
                                    </div>
                                    <div className={`d-flex flex-column ${style.similarDiv}`}
                                         style={{borderBottom: "1px solid #e6e6e6"}}>
                                        <h4 style={{fontWeight: "700", fontSize: "14px", textAlign: "left"}}>Can the
                                            room be arranged for a honeymoon night.</h4>
                                        <p style={{fontSize: "14px", textAlign: "left"}} className={`text-muted`}>Dear
                                            Guest Our rooms are very well appointed please be informed to maintain the
                                            hygine and standards of our product we dont do any decorations.</p>
                                        <div className={`d-flex flex-row justify-content-between`}>
                                            <p style={{color: "#0071c2", fontSize: "14px"}}><AiOutlineLike/> Helpful</p>
                                            <p style={{color: "#0071c2", fontSize: "14px"}}><AiOutlineDislike/> Helpful
                                            </p>
                                        </div>
                                    </div>
                                    <div className={`d-flex flex-column ${style.similarDiv}`}
                                         style={{borderBottom: "1px solid #e6e6e6"}}>
                                        <h4 style={{fontWeight: "700", fontSize: "14px", textAlign: "left"}}>Can you
                                            bring an extra bed into the room for third person </h4>
                                        <p style={{fontSize: "14px", textAlign: "left"}} className={`text-muted`}>Dear
                                            Guest , Extra bed for third person is available and can be arranged on
                                            request with an additional charge of INR 2500++ Taxes</p>
                                        <div className={`d-flex flex-row justify-content-between`}>
                                            <p style={{color: "#0071c2", fontSize: "14px"}}><AiOutlineLike/> Helpful</p>
                                            <p style={{color: "#0071c2", fontSize: "14px"}}><AiOutlineDislike/> Helpful
                                            </p>
                                        </div>
                                    </div>
                                    <button className={`${style.askQuestion}`}
                                            style={{color: "#0071c2", width: "100%", padding: "7px 16px"}}>Ask a
                                        question
                                    </button>

                                    <div className={`${style.rating}`}>
                                        <div className={`d-flex flex-row`}>
                                            <div className={`${style.ratingDiv}`}>9.1</div>
                                            <div className={`d-flex flex-column ml-3`}>
                                                <h4 style={{fontSize: "large"}}>Very good</h4>
                                                <p style={{fontSize: "small"}}>284 reviews</p>
                                            </div>
                                        </div>
                                    </div>
                                    {reviewData && reviewData.map((item, index) => (
                                        <ReviewItem data={item} index={index} key={uuidv4()}/>
                                    ))}
                                </div>

                                {/*Middle section*/}


                                <div className={`col-9 ${style.Results}`}>
                                    <div className={`${style.flexColRes}`}>
                                        <div className={`${style.topBtnDiv}`}>
                                            <button>Info & prices</button>
                                            <button>Facilities</button>
                                            <button>House Rules</button>
                                            <button>The fine print</button>
                                            <button>Guest reviews {entityData["rating"]}</button>
                                        </div>
                                    </div>
                                    <div className={`${style.titleRow}`}>
                                        <div className={`d-flex flex-row`}>
                                            <div className={`${style.tag}`}>{entityData["property_type_name"]}</div>
                                            <h4 style={{fontWeight: "bold"}}>{entityData["property_name"]}</h4>
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
                                            {arr_id1["arr_id1"] && arr_id1["arr_id1"].map((item, index) =>
                                                <ImgsEntity dataImg={item} indexImg={index} key={item}/>
                                            )}
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

                                    <div className={`row`}>
                                        <div className={`col-8 ${style.middleDiv}`}
                                             style={{fontSize: "18px", fontWeight: "bold", margin: "15px 0"}}>
                                            <h5>Get the celebrity treatment with world-class service
                                                at {entityData["property_name"]}</h5>
                                            <div style={{
                                                color: "#b65800",
                                                fontSize: "14px",
                                                fontWeight: "bold",
                                                textAlign: "left"
                                            }}><MdStars style={{fontSize: "25px"}}/> One of our top picks
                                                in {entityData["city_name"]}.
                                            </div>

                                            <div className={`${style.descr}`}>{entityData["description"]}</div>

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
                                            <div className={`${style.descr}`}>Nam tellus ex, feugiat ut arcu aliquam,
                                                lobortis fringilla ante. Cras
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
                                            <div className={`${style.descr}`}>Nam tellus ex, feugiat ut arcu aliquam,
                                                lobortis fringilla ante. Cras
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
                                                <h4 style={{
                                                    fontSize: "16px",
                                                    textAlign: "left",
                                                    marginTop: "10px"
                                                }}>Most popular facilities </h4>
                                                <div className={`${style.facilityDiv}`}>
                                                    <div className={`d-flex flex-row`}>
                                                        <MdPool style={{color: "green", fontSize: "26px"}}/>
                                                        <p style={{fontWeight: "normal", fontSize: "14px"}}>Swimming
                                                            Pool</p>
                                                    </div>
                                                    <div className={`d-flex flex-row ml-2`}>
                                                        <GiBus style={{color: "green", fontSize: "26px"}}/>
                                                        <p style={{fontWeight: "normal", fontSize: "14px"}}>Airport
                                                            shuttle</p>
                                                    </div>
                                                    <div className={`d-flex flex-row ml-2`}>
                                                        <GiFamilyHouse style={{color: "green", fontSize: "26px"}}/>
                                                        <p style={{fontWeight: "normal", fontSize: "14px"}}>Family
                                                            rooms</p>
                                                    </div>
                                                    <div className={`d-flex flex-row ml-2`}>
                                                        <IoIosRestaurant style={{color: "green", fontSize: "26px"}}/>
                                                        <p style={{
                                                            fontWeight: "normal",
                                                            fontSize: "14px"
                                                        }}>Restaurant</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p style={{fontSize: "14px", fontWeight: "normal", textAlign: "left"}}>
                                                <strong>ATM & Currency Exchange:</strong>
                                                Need cash? There's an ATM and a currency exchange service at this
                                                property.
                                            </p>
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
                                                    <AiOutlineWifi size="2em"/>
                                                    <div className={`${style.greenDiv} text-left`}>
                                                        <div>Free Wifi</div>
                                                        <div>Guests consistently rate the wifi as Excellent</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border border-success text-black mt-4"
                                         style={{backgroundColor: "#ecf3f2"}}>
                                        <div className={`d-flex flex-row`} style={{padding: 15}}>
                                            <div>
                                                <BsUnlockFill style={{color: "green"}} size={`1em`}/>
                                            </div>
                                            <div style={{marginLeft: 10,fontSize:"14px",textAlign:"left"}}>
                                                <h4 style={{fontSize:"18px"}}>
                                                    Lock in a great price for your upcoming stay
                                                </h4>
                                                <div>
                                                    Prices may go up, so secure your reservation today.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br/>
                                    <>
                                        <div className="border border-warning text-black mt-3"
                                             style={{backgroundColor: "#fefbf0"}}>
                                            <div className={`d-flex flex-row`} style={{padding: 15}}>
                                                <div>
                                                    <BsInfoCircle style={{color: "#f0ad4e"}} size={`1em`}/>
                                                </div>
                                                <div style={{marginLeft: 10,fontSize:"14px",textAlign:"left"}}>
                                                    <h4 style={{fontSize:"18px"}}>
                                                        Find a cancellation policy that works for you
                                                    </h4>
                                                    <p>
                                                        From 6 April 2020, your chosen cancellation policy will apply,
                                                        regardless of Coronavirus. We recommend booking a free
                                                        cancellation
                                                        option in case your travel plans need to change.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border border-primary text-black mt-3"
                                             style={{backgroundColor: "#ebf3ff"}}>
                                            <div style={{padding: 15}} className={`d-flex flex-column`}>
                                                <div className={`text-left`}>When would you like to stay at {entityData["property_name"]}? </div>
                                                <div className={`d-flex flex-row justify-content-between`}>
                                                    <div className={`d-flex flex-column mt-2`}>
                                                        <h5 style={{fontSize:"14px",textAlign:"left"}}>Check-in-date</h5>
                                                        <input type="date" value={this.state.checkInDate} name="checkInDate" onChange={this.handleChange} />                                                         
                                                    </div>
                                                    <div className={`d-flex flex-column mt-2`}>
                                                        <h5 style={{fontSize:"14px",textAlign:"left"}}>Check-out-date</h5>
                                                        <input type="date" value={this.state.checkOutDate} name="checkOutDate" onChange={this.handleChange}/>
                                                    </div>
                                                    <div className={`d-flex flex-column mt-2`}>
                                                        <h5 style={{fontSize:"14px",textAlign:"left",visibility:"hidden"}}>&nbsp</h5>
                                                        {/* <Link to="/booking"> */}
                                                        <button type="button" className={checkAvailability==="Available" ? "d-none": "btn"} style={{
                                                            color: "#fff",
                                                            backgroundColor: "#0071c2",
                                                            // this.state.checkAvailFlag? {display:"none"} : {display:"block"}
                                                         }}
                                                        onClick={this.handleCheckAvailable}
                                                        >Check Availability
                                                        </button>
                                                        {/* </Link> */}
                                                    </div>
                                                    <div style={{width:"30%"}}></div>
                                                </div>
                                                    <br/>
                                                <div>
                                                    <div>
                                                        <button type="button" className= {this.state.checkAvailFlag ? "d-none": "btn mr-2"} style={{
                                                            color: "#fff",
                                                            backgroundColor: "#0071c2"
                                                        }}
                                                        onClick={this.handleCheckAvailable}
                                                        >Change Search</button>
                                                        <Link to="/booking">
                                                        <button type="button" className={this.state.checkAvailFlag ? "d-none": "btn"} style={{
                                                            color: "#fff",
                                                            backgroundColor: "#0071c2"
                                                        }} 
                                                        >Book Now</button>
                                                        </Link>
                                                    </div>
                                                    <div>
                                                    </div>
                                                </div>
                                                <br/>
                                                <div className={`d-flex flex-row`}>
                                                    <div className={`mr-3 mt-2`}>
                                                        Rooms
                                                        <select type={`number`} className={`ml-1`} name ="roomBookPage" onChange={this.handleChange}>
                                                            {roomArr && roomArr.map(item =>(
                                                                <option value={item} key={item}>
                                                                    {item}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className={`mr-3 mt-2`}>
                                                        Adults
                                                        <select type={`number`} className={`ml-1`} name ="adultBookPage" onChange={this.handleChange}>
                                                        {adultArr && adultArr.map(item =>(
                                                                <option value={item} key={item}>
                                                                    {item}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className={`mr-3 mt-2`}>
                                                        Children
                                                        <select type={`number`} className={`ml-1`} name ="childrenBookPage" onChange={this.handleChange}>
                                                            {childArr && childArr.map(item =>(
                                                                <option value={item} key={item}>
                                                                    {item}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div>
                                            {/* <div className={`${style.confirmDiv}`} style={{marginTop:"5%"}}> */}
                                                 <BillingPage /> 
                                            {/* </div> */}
                                        </div>  
                                         
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
                                                            <div className={`ml-4`}>{roomBookPage}</div>
                                                        </div>
                                                        <div style={{fontSize:"14px"}} className={`d-flex flex-row mt-2`}>
                                                            <div style={{width:"20%"}}>No.of Adults</div>
                                                            <div className={`ml-4`}>{adultBookPage}</div>
                                                        </div>
                                                        <div style={{fontSize:"14px"}} className={`d-flex flex-row mt-2`}>
                                                            <div style={{width:"20%"}}>No.of Children</div>
                                                            <div className={`ml-4`}>{childrenBookPage}</div>
                                                        </div>
                                                        <div style={{fontSize:"14px"}} className={`d-flex flex-row mt-2`}>
                                                            <div style={{width:"20%"}}>Price per adult</div>
                                                            <div className={`ml-4`}>₹{entityData["adult_budget_per_night"]}</div>
                                                        </div>
                                                        <div style={{fontSize:"14px"}} className={`d-flex flex-row mt-2`}>
                                                            <div style={{width:"20%"}}>Price per child</div>
                                                            <div className={`ml-4`}>₹{entityData["child_budget_per_night"]}</div>
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
                                                            <div className={`ml-4`}>{total}</div>
                                                        </div>
                                                        <Link to="/booking">
                                                            <button className={`btn mt-4 btn-small`} style={{backgroundColor:"#0071c2",color:"white",width:"20%",margin:"0px auto"}}>Proceed to Pay</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>

                                </div>
                            </div>
                            <div className={`${style.recommendDiv}`}>
                                <h4 style={{fontSize: "18px",textAlign:"left",marginLeft:"8%"}}>Popular properties similar
                                    to {entityData["property_name"]}</h4>
                                <Carousel breakPoints={breakPoints} showArrows={true} pagination={false}>
                                    {recommendations && recommendations.map((item, index) => (
                                        <RecommendCard key={uuidv4()} data={item}/>
                                    ))}
                                </Carousel>
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

const mapStateToProps = state => ({
    entityListData: state.entityList.entityListData,
    entityData: state.entityList.entityData,
    reviewData: state.entityList.reviewData,
    recommendationsData: state.entityList.recommendationsData,
    isEntity: state.entityList.isEntity,
    checkAvailability:state.entityList.checkAvailability,
    bookingSearchData:state.bookingList.bookingSearchData
})

const mapDispatchToProps = dispatch => ({
    entityListData: payload => dispatch(entityListData(payload)),
    bookingSearchData:payload => dispatch(bookingSearchData(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Entity);
