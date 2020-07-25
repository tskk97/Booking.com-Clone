import React from 'react'
import {connect} from 'react-redux'
import style from "./Stays.module.css";
import Navbar from "./Navbar";
import {IoIosBed} from "react-icons/io";
import {FaRegCalendarAlt, FaDivide} from "react-icons/fa";
import {FiUser} from "react-icons/fi";
import {Redirect, Link} from "react-router-dom";
import "react-dates/initialize";
import {DateRangePicker} from "react-dates";
import "react-dates/lib/css/_datepicker.css";
// import {connect} from 'react-redux'
import {staysSearchData} from '../../redux/Stays/action'
// import { registerUserData } from '../../redux/Registration/action';
// import {loginUserData} from '../../redux/Login/action';

class Stays extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: "",
            checkin: "",
            checkout: "",
            num_adults: 1,
            num_child: 0,
            num_rooms: 1,
            modalVisible: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                modalVisible: !this.state.modalVisible
            })
        }, 1000)
    }

    toggleModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }

    handleAdultIncrement=()=>{ 
        this.setState({
            num_adults:this.state.num_adults+1
        })
    }
    handleAdultDecrement=()=>{
        const num_adults = this.state.num_adults
        console.log(num_adults,"dec")
        if(num_adults>1){
            this.setState({
                num_adults:this.state.num_adults-1
            })
        }
    }
    handleChildIncrement=()=>{
        this.setState({
            num_child:this.state.num_child+1
        })
    }

    handleChildDecrement=()=>{
        const num_child = this.state.num_child
        if(num_child>0){
            this.setState({
                num_child:this.state.num_child-1
            })
        }
    }

    handleRoomIncrement=()=>{
        this.setState({
            num_rooms:this.state.num_rooms+1
        })
    }

    handleRoomDecrement=()=>{
        const num_rooms = this.state.num_rooms
        if(num_rooms>1){
            this.setState({
                num_rooms:this.state.num_rooms-1
            })
        }
    }
    render() {
        // console.log(this.props) 
         const {city, checkin, checkout, num_child, num_adults, num_rooms} = this.state
        console.log(num_adults,"data")
        const activePath = this.props.match.url
        let styles = this.state.modalVisible ? {display: "block"} : {display: "none"};
        return (
            <>
                <Navbar activePath={activePath}/>
                <div className={`${style.body} container-fluid`}>
                    <div className={`row ${style.row}`}>
                        <div className={`col-1`}></div>
                        <div className={`col-10`}>
                            <div className={`${style.flexCol} mt-5`}>
                                <h4 style={{fontWeight: "bold", marginTop: "7px"}}>Find deals on hotels, homes and much
                                    more...</h4>
                                <small>From cosy country homes to funky city flats</small>
                                <div className={`${style.flexRowInput}`}>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-outline-secondary" type="button"
                                                    id="button-addon1"><IoIosBed/>
                                            </button>
                                        </div>
                                        <input type="text" className={`form-control ${style.bed}`}
                                               placeholder="Where are you going?"
                                               aria-label="Example text with button addon"
                                               aria-describedby="button-addon1"
                                               value={this.state.city} name="city" onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-outline-secondary" type="button"
                                                    id="button-addon1"><FaRegCalendarAlt/>
                                            </button>
                                        </div>
                                        {/* <input type="date" className={`form-control ${style.calendar}`} placeholder="Check-in - Check-out"
                                               aria-label="Example text with button addon" aria-describedby="button-addon1" 
                                               value={this.state.checkin} name="checkin" onChange={this.handleChange}
                                               /> */}
                                        <DateRangePicker
                                            className={`form-control ${style.calendar}`}
                                            startDate={this.state.startDate}
                                            startDateId="your_unique_start_date_id"
                                            endDate={this.state.endDate}
                                            endDateId="your_unique_end_date_id"
                                            onDatesChange={({startDate, endDate}) => this.setState({
                                                startDate,
                                                endDate
                                            })}
                                            focusedInput={this.state.focusedInput}
                                            onFocusChange={(focusedInput) => this.setState({focusedInput})}
                                            startDatePlaceholderText="Check-in"
                                            endDatePlaceholderText="Check-out"
                                        >
                                        </DateRangePicker>
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-outline-secondary" type="button"
                                                    id="button-addon1"><FiUser/>
                                            </button>
                                        </div>
                    
                                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" className={`form-control ${style.user}`}>
                                                {this.state.num_adults} adult . {this.state.num_child} children . {this.state.num_rooms} room
                                        </button>

                                        <div class="modal fade md-5 mt-5" id="exampleModal" tabindex="-10" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                          <div class="modal-dialog modal-dialog-centered mt-5 mr-5 " role="document">
                                            <div class="modal-content">  
                                              <div class="modal-header">   
                                                     <h5>Adults</h5>
                                              <div class="modal-footer md-5">
                                                    <button type="button" class="btn btn-primary"  onClick={this.handleAdultDecrement} >-</button>
                                                        {this.state.num_adults}
                                                    <button type="button" class="btn btn-primary"  onClick={this.handleAdultIncrement}>+</button>
                                              </div>
                                              </div>
                                              <div class="modal-header">
                                                  <h5>Childrens</h5>
                                              <div class="modal-footer">
                                                    <button type="button" class="btn btn-primary"  onClick={this.handleChildDecrement} >-</button>
                                                    {this.state.num_child}
                                                    <button type="button" class="btn btn-primary"  onClick={this.handleChildIncrement}>+</button>
                                              </div>
                                              </div>
                                              <div class="modal-header">
                                                  <h5>Rooms</h5>
                                              <div class="modal-footer">
                                                    <button type="button" class="btn btn-primary"  onClick={this.handleRoomDecrement} >-</button>
                                                        {this.state.num_rooms}
                                                    <button type="button" class="btn btn-primary"  onClick={this.handleRoomIncrement}>+</button>
                                              </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                         {/* <input type="text" className={`form-control ${style.user}`} placeholder=".."
                                               aria-label="Example text with button addon"
                                               aria-describedby="button-addon1"
                                               value={this.state.num_rooms} name="num_rooms"
                                               onChange={this.handleChange}
                                        /> */}
                                    </div>

                                    {/* // http://ngrok.io/stays/search_results?city=Bangalore&checkin_date=25&checkin_month=07&checkin_year=2020&checkout_date=30&checkout_month=07&checkout_year=2020&num_adults=2&num_child=1&num_rooms=2 */}

                                    <Link style={{height:"54px"}} to={`/stays/search_results?city=${this.state.city}`}>
                                        <button className={`${style.searchBtn}`}>Search</button>
                                    </Link>
                                </div>
                                <div className={`${style.flexRow} form-check`}>
                                    <input className="form-check-input" type="checkbox" style={{marginRight: "7px"}}/>
                                    <label className="form-check-label">I'm traveling for work </label>
                                </div>

                            </div>
                        </div>
                        <div className={`col-1`}></div>
                    </div>
                </div>
                {/* <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div id="myModal" className="modal fade in" role="dialog" style={styles} >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" onClick={this.toggleModal} className="close" > &times; </button>
                                <h4 className="modal-title">Modal Header</h4>
                            </div>
                            <div className="modal-body">
                                <p>Some text in the modal.</p>
                            </div>
                            <div className="modal-footer">
                                <button onClick={this.toggleModal} type="button" className="btn btn-default" > Close </button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </>
        )
    }
}

const mapStateToProps = state => ({
    isRegister: state.register.isRegister,
    r_message: state.register.message,
    r_isAuth: state.register.isAuth,
    r_userEmail: state.register.userEmail,
    r_userToken: state.register.userToken,
    r_userData: state.register.userData,
    r_userName: state.register.userName,

    isLogin: state.login.isLogin,
    l_message: state.login.message,
    l_isAuth: state.login.isAuth,
    l_userEmail: state.login.userEmail,
    l_userToken: state.login.userToken,
    l_userData: state.login.userData,
    l_userName: state.login.userName,

    staysSearchData: state.staysSearch.staysSearchData,
    isSearch: state.staysSearch.isSearch

})

const mapDispatchToProps = dispatch => ({
    staysSearchData: payload => dispatch(staysSearchData(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(Stays);
// export default Stays
 
 