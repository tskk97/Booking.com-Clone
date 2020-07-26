import React, {Component} from 'react';
import Navbar from "./Navbar.jsx";
import style from "./ListResults.module.css"
import {BsSearch} from "react-icons/bs";
import {FaRegCalendarPlus} from "react-icons/fa";
import {FiHelpCircle} from "react-icons/fi";
import ResultCard from "./ResultCard";
import Pagination from "./Pagination"
import {v4 as uuidv4} from 'uuid';
import FilterByCards from "./FilterByCards";
import {connect} from 'react-redux'
import {staysSearchData} from '../../redux/Stays/action'


class ListResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adults: "1 Adult",
            children: "No Children",
            room: "1 room",
            searchName: "",
            filterData: [],
            travelWorkCheckBox: false,
            renderOnce:true,
            property_type: [],
            star_rating: [],
            review_score: [],
            facility: [],
            room_facility: []
        }
    }

    handleAdults = () => {

    }
    handleChildren = () => {

    }
    handleRooms = () => {

    }

    handleUrlChange = (query) => {

        const url = new URLSearchParams(query)
        const {staysSearchData} = this.props
        // console.log(url.get('page'))
        // console.log(url.get('property_type'))

        this.setState({
            searchName: url.get('city'),
            page: url.get('page') || 1,
            per_page: 10,
        })

        const obj = {
            city: url.get('city'),
            checkin: url.get('checkin'),
            num_rooms: url.get('num_rooms'),
            page: url.get('page') || 1
        }
        // console.log(obj)
        staysSearchData(obj)
        
    }

    componentDidMount() {
        const {location} = this.props
        // console.log(location)
        this.handleUrlChange(location.search)
    }

    handleChecked = (res) => {
        console.log(res)
    }

    render() {
        const {allData, searchData, location} = this.props;
        const {filterData, travelWorkCheckBox,renderOnce} = this.state;
       
        let objArray;
        if (allData) {
            objArray = Object.keys(allData)
        } else {
            objArray = [];
        }
        
        if(filterData.length === 0){
            renderOnce && objArray.forEach(item => {
                if (item !== "msg" && item !== "data" && item !== "page" && item !== "per_page" && item !== "total_pages" && item !== "total_found") {
                    filterData.push([item, [...allData[item]]]);
                }
            })
            let filter_headings = ["Star Rating", "Property Type", "Review Score", "Facility", "Room Facility"]
            filterData && filterData.map((item, index) => {
                item[0] = filter_headings[index]
            })
            
        }
        console.log(this.state.Property_Type_Hostels)
        let capitalisedSearchName = this.state.searchName.charAt(0).toUpperCase() + this.state.searchName.slice(1);
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
                                    <div className={`${style.filterBy} mb-5`} style={{textAlign: "left"}}>
                                        <div style={{
                                            "textAlign": "left",
                                            "fontWeight": "700",
                                            "borderBottom": "1px solid #c6c6c6"
                                        }} className={`${style.baseFilter}`}>
                                            Filter By:
                                        </div>
                                        <div>
                                            {filterData && filterData.map(item =>
                                                <FilterByCards key={uuidv4()} data={item} check={this.handleChecked}/>
                                            )}
                                        </div>

                                    </div>
                                </div>

                                {/*Middle section*/}

                                <div className={`col-9 ${style.Results}`}>
                                    <div className={`${style.flexColRes}`}>
                                        <div style={{fontWeight: "bold", fontSize: "20px"}}>{capitalisedSearchName}: {allData.total_found} Properties Found</div>
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
                                        {searchData && searchData.map(item =>
                                            <ResultCard key={uuidv4()} searchData={item}/>
                                        )}
                                    </div>
                                    <Pagination page={allData.page} total_pages={allData.total_pages} url={location.path+location.search} />
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

const mapStateToProps = state => ({
    staysSearchData: state.staysSearch.staysSearchData,
    searchData: state.staysSearch.searchData,
    allData: state.staysSearch.allData,
    isSearch: state.staysSearch.isSearch
})

const mapDispatchToProps = dispatch => ({
    staysSearchData: payload => dispatch(staysSearchData(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListResults);