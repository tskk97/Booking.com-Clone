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
import { Redirect } from 'react-router-dom';

class ListResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adults: "",
            children: "",
            room: "",
            searchName: "",
            filterData: [],
            travelWorkCheckBox: false,
            renderOnce:true,
            property_type: [],
            star_rating: [],
            review_score: [],
            facility: [],
            room_facility: [],
            checkin_date: "",
            checkin_month: "",
            checkin_year: "",
            checkout_date: "",
            checkout_month: "",
            checkout_year: "",
            propertiesArr: [],
            filterTitles:"",
            filterResults:"",
            testFlag:false
        }
    }

    handleAdults = () => {

    }
    handleChildren = () => {

    }
    handleRooms = () => {

    }

    handleUrlChange = (query,baseURL) => {

        const url = new URLSearchParams(query)
        const {staysSearchData} = this.props
        // console.log(url.get('page'))
        // console.log(url.get('property_type'))
        this.setState({
            searchName: url.get('city'),
            page: url.get('page') || 1,
            per_page: 10,
            checkin_date:url.get('chekin_date'),
            checkin_month:url.get('checkin_month'),
            checkin_year:url.get('checkin_year'),
            checkout_date: url.get('checkout_date'),
            checkout_month: url.get('checkout_month'),
            checkout_year: url.get('checkout_year'),
            adults:url.get('num_adults'),
            children:url.get('num_child'),
            room:url.get('num_rooms') 
        })

        const obj = {
            city: url.get('city'),
            checkin: url.get('checkin'),
            num_rooms: url.get('num_rooms'),    
            page: url.get('page') || 1
        }
        // console.log(obj)
        console.log(query,baseURL)
        staysSearchData(baseURL+query)

    }

    componentDidMount() {
        const {location} = this.props
        let url =  new URL(window.location.href)
        console.log(url.search)
        let baseUrl = url.search.toString().slice(1)
        let propertiesArr = baseUrl.split("&")
        
        // console.log(propertiesArr)
        //  this.setState({
        //       propertiesArr:propertiesArr
        //  })
        // const newPropertiesArr = propertiesArr.map(item=>{
        //     item.split("=")
        // })
        let obj = {}
        // for(var i=0;i<propertiesArr.length;i++){
        //     propertiesArr[i] = propertiesArr[i].split("=")
        // }
        // console.log(propertiesArr)

        for(var j=0;j<propertiesArr.length;j++){
            propertiesArr[j] = propertiesArr[j].split("=")
            // console.log(propertiesArr[j][0])
            
            if(!obj[propertiesArr[j][0]]){
                obj[propertiesArr[j][0]] = []
                obj[propertiesArr[j][0]].push(propertiesArr[j][1])
            }
            else{
                obj[propertiesArr[j][0]].push(propertiesArr[j][1])
            }
        }
        console.log(obj)
        // let filterTitles = Object.keys(obj)
        let filterTitles = []
        let filterResults = []
        for(var key in obj){
            if(key!=="page"){
                filterTitles.push(key)
                filterResults.push(obj[key])
            }
        }

        console.log(filterTitles)
        // console.log(filterResults)
        this.setState({
            filterTitles:filterTitles,
            filterResults:filterResults,
            oldUrl:url.search,
            newUrl:url.search
        })
        // console.log(baseUrl,"loc")
        // console.log(location)
        this.handleUrlChange(location.search,location.pathname)
         
    }

 
    handleChecked = (res) => {
        console.log(res)
        const {filterTitles,filterResults} = this.state
        console.log(filterResults,filterTitles)
        let newCity = this.state.searchName
        let newCheckInDate = this.state.checkin_date
        let newCheckInMonth = this.state.checkin_month
        let newCheckInYear = this.state.checkin_year
        let newCheckOutDate = this.state.checkout_date
        let newCheckOutMonth = this.state.checkout_month
        let newCheckOutYear = this.state.checkout_year
        let newAdults = this.state.adults
        let newChildrens = this.state.children
        let newRooms = this.state.room
        let newPage = this.state.page
        
        let newUrl = `/stays/search_results?city=${newCity}&checkin_date=${newCheckInDate}&checkin_month=${newCheckInMonth}&checkin_year=${newCheckInYear}&checkout_date=${newCheckOutDate}&checkout_month=${newCheckInMonth}&checkout_year=${newCheckOutYear}&num_adults=${newAdults}&num_child=${newChildrens}&num_rooms=${newRooms}`
        // let newUrl = `/stays/search_results?`
        // console.log(res[filterTitles])
        let flag = false

        for(var i=10;i<filterTitles.length;i++){
            console.log("befpre")
            if(res.compareFilter === filterTitles[i]){
                console.log(filterTitles.length,"after")
                flag = true
                if(filterResults[i].length<res[filterTitles[i]].length){
                    for(var j=0;j<res[filterTitles[i]].length;j++){
                        newUrl += "&"+filterTitles[i]+"="+res[filterTitles[i]][j]
                    }
                }
                else if(filterResults[i].length > res[filterTitles[i]].length) {
                    console.log("asdf")
                    for(var k=0;k<filterResults[i].length;k++){
                        for(var l=0;l<res[filterTitles[i]].length;l++){
                            if(filterResults[i][k] === res[filterTitles[i]][l]){
                                newUrl += "&"+filterTitles[i]+"="+filterResults[i][k]
                                console.log(newUrl)
                            }
                        }
                    }
                }
            }
            else{
                if(filterResults[i].length!==0){
                    for(var m=0;m<filterResults[i].length;m++){
                        newUrl += "&"+filterTitles[i]+"="+filterResults[i][m]    
                    }
                }
            }
        }
        if(flag === false){
            let compareFilter=res.compareFilter
            newUrl += "&"+res.compareFilter+"="+res[compareFilter][0]

        }
        newUrl += "&page="+newPage
        console.log(newUrl)
        this.setState({
            newUrl:newUrl
        })
        window.location.href= newUrl;
        // this.props.history.push(newUrl)
        // this.forceUpdate()
        // return (<Redirect to='/stays' />)
        // this.setState({
        //     testFlag:!this.state.testFlag
        // })

        // let newPropertyType = res.property_type
        // let newStarRating = res.star_rating
        // let newReviewScore = res.review_score
        // let newFacility = res.facility
        // let newRoomFacility = res.room_facility
        // let stateArray = this.state.propertiesArr
        // console.log(stateArray)

        // for(var i=0;i<stateArray.length;i++){
        //     newUrl += stateArray[i]
        // }
        // newPropertyType && newPropertyType.forEach(item => {
        //     // newUrl +=  "&"+"property_type"+"="+item
        //     var productFlag = true
        //     for(var i=0;i<stateArray.length;i++){
        //         if(stateArray[i] === `property_type=${item}`){
        //             productFlag = false
        //             break
        //         }               
        //     }
        //     if(productFlag){
        //         newUrl += "&"+"property_type"+"="+item            
        //     }
        // })
        // // console.log(newPropertyType)

        // newStarRating && newStarRating.forEach(item => {
        //     var starFlag = true
        //     for(var i=0;i<stateArray.length;i++){
        //         if(stateArray[i] === `star_rating=${item}`){
        //             starFlag = false
        //             break
        //         }               
        //     }
        //     if(starFlag){
        //          newUrl += "&"+"star_rating"+"="+item
        //     }
        // })

        
        // // console.log(newStarRating)

        // newReviewScore&&newReviewScore.forEach(item => {
        //     var reviewFlag = true
        //     for(var i=0;i<stateArray.length;i++){
        //         if(stateArray[i] === `review_score=${item}`){
        //             reviewFlag = false
        //             break
        //         }               
        //     }
        //     if(reviewFlag){
        //           newUrl += "&"+"review_score"+"="+item
        //     }
        // })
        // newFacility&&newFacility.forEach(item => {
        //     var facilityFlag = true
        //     for(var i=0;i<stateArray.length;i++){
        //         if(stateArray[i] === `facility=${item}`){
        //             facilityFlag = false
        //             break
        //         }               
        //     }
        //     if(facilityFlag){
        //         newUrl += "&"+"facility"+"="+item
        //     }
        // })
        // newRoomFacility&&newRoomFacility.forEach(item => {
        //     var facilityRoomFlag = true
        //     for(var i=0;i<stateArray.length;i++){
        //         if(stateArray[i] === `room_facility=${item}`){
        //             facilityRoomFlag = false
        //             break
        //         }               
        //     }
        //     if(facilityRoomFlag){
        //          newUrl += "&"+"room_facility"+"="+item
        //     }
        // })
         
        

        // let newUrl = {`/stays/search_results?city=${newCity}&checkin_date=${this.state.checkin_date}&checkin_month=${this.state.checkin_month}&checkin_year=${this.state.checkin_year}&checkout_date=${this.state.checkout_date}&checkout_month=${this.state.checkout_month}&checkout_year=${this.state.checkout_year}&num_adults=${this.state.num_adults}&num_child=${this.state.num_child}&num_rooms=${this.state.num_rooms}&page=1`}
        // console.log(res)
        
        // this.props.history.push(newUrl)
    }
    
    // componentWillReceiveProps(newProps){
    //     const { location } = newProps
    //     console.log(newProps)
    //     console.log(location.search !== this.props.location.search )
    //     if( location.search !== this.props.location.search ){
    //         this.handleUrlChange(location.search)
    //     }
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.color !== nextProps.color) {
    //       return true;
    //     }
    //     if (this.state.count !== nextState.count) {
    //       return true;
    //     }
    //     return false;
    //   }

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
            let x =filter_headings[0].toLowerCase()
            console.log(x)
            filterData && filterData.map((item, index) => {
                item[0] = filter_headings[index]
            })

        }


        let capitalisedSearchName = this.state.searchName.charAt(0).toUpperCase() + this.state.searchName.slice(1);
        // if(this.state.testFlag){
        //     return (
        //         <Redirect to={this.state.newUrl}/> 
        //     )
        // }
        // else{
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
                                                    <FilterByCards key={uuidv4()} data={item} filterTitles={this.state.filterTitles} filterResults={this.state.filterResults} check={this.handleChecked}/>
                                                )}
                                            </div>
                                        </div>
    
                                        <div className={`${style.filterBy}`} style={{textAlign:"left"}}>
                                            <div style={{textAlign:"left","fontWeight":"700","borderBottom":"1px solid black"}} className={`${style.baseFilter}`}>
                                                 ReviewScore:
                                            </div>
                                            {/* <div>
                                                {reviewData&& reviewData.map(item =>
                                                    <FilterByCards  reviews= {item}/>
                                                 )} 
                                            </div> */}
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
       // }
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