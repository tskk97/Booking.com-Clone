import React from 'react'
import {connect} from 'react-redux'
import style from "./Stays.module.css";
import Navbar from "./Navbar";
import {IoIosBed} from "react-icons/io";
import {FaRegCalendarAlt} from "react-icons/fa";
import {BsPersonFill} from "react-icons/bs";
import { Link } from "react-router-dom";
import "react-dates/initialize";
import {DateRangePicker} from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import {staysSearchData} from '../../redux/Stays/action'

class Stays extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: "",
            checkin_date: "",
            checkin_month: "",
            checkin_year: "",
            checkout_date: "",
            checkout_month: "",
            checkout_year: "",
            num_adults: "",
            num_child: "",
            num_rooms: "",
            startDate: "",
            endDate: "",
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
        // const {city, checkin, checkout, num_child, num_adults, num_rooms} = this.state
        const activePath = this.props.match.url
        // let styles = this.state.modalVisible ? {display: "block"} : {display: "none"};

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
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-outline-secondary px-3 py-1 bg-light border-dark" type="button"
                                                    id="button-addon1"><IoIosBed size="1.4em" />
                                            </button>
                                        </div>
                                        <input type="text" className={`form-control ${style.bed}`}
                                               placeholder="Where are you going?"
                                               aria-label="Example text with button addon"
                                               aria-describedby="button-addon1"
                                               value={this.state.city} name="city" onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="input-group justify-content-center">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-outline-secondary px-3 bg-light" type="button"
                                                    id="button-addon1"><FaRegCalendarAlt className="mb-0" size="1.2em" />
                                            </button>
                                        </div>
                                        <DateRangePicker
                                            className={`form-control ${style.calendar}`}
                                            startDate={this.state.startDate}
                                            startDateId="your_unique_start_date_id"
                                            endDate={this.state.endDate}
                                            endDateId="your_unique_end_date_id"
                                            onDatesChange={({startDate, endDate}) => 
                                                {
                                                    let cal_checkin = String(startDate._d).split(" ")
                                                    let cal_checkout = String(endDate._d).split(" ")
                                                    this.setState({
                                                        startDate,
                                                        endDate,
                                                        checkin_date: cal_checkin[2],
                                                        checkin_month: cal_checkin[1],
                                                        checkin_year: cal_checkin[3],
                                                        checkout_date: cal_checkout[2],
                                                        checkout_month: cal_checkout[1],
                                                        checkout_year: cal_checkout[3]
                                                    })
                                                }
                                            }
                                            focusedInput={this.state.focusedInput}
                                            onFocusChange={(focusedInput) => this.setState({focusedInput})}
                                            startDatePlaceholderText="Check-in"
                                            endDatePlaceholderText="Check-out"
                                        >
                                        </DateRangePicker>
                                    </div>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-outline-secondary px-3 bg-light" type="button"
                                                    id="button-addon1"><BsPersonFill size="1.5em" />
                                            </button>
                                        </div>
                                        <input type="text" className={`form-control ${style.user}`} placeholder="No. of Persons"
                                               aria-label="Example text with button addon"
                                               aria-describedby="button-addon1"
                                               value={this.state.num_rooms} name="num_rooms"
                                               onChange={this.handleChange}
                                        />
                                    </div>
                                    <Link to={!this.state.city ? `/stays` : `/stays/search_results?city=${this.state.city}&checkin_date=${this.state.checkin_date}&checkin_month=${this.state.checkin_month}&checkin_year=${this.state.checkin_year}&checkout_date=${this.state.checkout_date}&checkout_month=${this.state.checkout_month}&checkout_year=${this.state.checkout_year}&num_adults=${this.state.num_adults}&num_child=${this.state.num_child}&num_rooms=${this.state.num_rooms}&page=1`}>
                                        <button className={`${style.searchBtn} ml-1 my-auto`}>Search</button>
                                    </Link>
                                </div>
                                <div className={`${style.flexRow} form-check mt-3`}>
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