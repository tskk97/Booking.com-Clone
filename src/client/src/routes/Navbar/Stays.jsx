import React from 'react'
import {connect} from 'react-redux'
import style from "./Stays.module.css";
import Navbar from "./Navbar";
import {IoIosBed} from "react-icons/io";
import {FaRegCalendarAlt} from "react-icons/fa";
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
            num_adults: "",
            num_child: "",
            num_rooms: "",
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

    render() {
        // console.log(this.props)  
        const {city, checkin, checkout, num_child, num_adults, num_rooms} = this.state
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
                                        <input type="text" className={`form-control ${style.user}`} placeholder=".."
                                               aria-label="Example text with button addon"
                                               aria-describedby="button-addon1"
                                               value={this.state.num_rooms} name="num_rooms"
                                               onChange={this.handleChange}
                                        />
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
 
 