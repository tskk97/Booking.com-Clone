import React from 'react'
// import Register from '../Registration/register'
import style from "./Stays.module.css";
import Navbar from "./Navbar";
import {IoIosBed} from "react-icons/io";
import {FaRegCalendarAlt} from  "react-icons/fa";
import {FiUser} from "react-icons/fi";
import {Redirect, Link} from "react-router-dom"
import {connect} from 'react-redux'
import {staysSearchData} from '../../redux/Stays/action'

class Stays extends React.Component{
    constructor(props){
        super(props)
        this.state={
            city:"",
            checkin:"",
            checkout:"",
            num_adults:"",
            num_child:"",
            num_rooms:""
        }
    }
    // http://ngrok.io/stays/search_results?city=Bangalore&checkin_date=25&checkin_month=07&checkin_year=2020&checkout_date=30&checkout_month=07&checkout_year=2020&num_adults=2&num_child=1&num_rooms=2
    handleChange =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit=()=>{
        console.log(this.state)
        const {staysSearchData} = this.props
        const obj ={
            city:this.state.city,
            checkin:this.state.checkin,
            num_rooms:this.state.num_rooms
        }
        console.log(obj)
        staysSearchData(obj)
        // console.log(this.props.url)
        // console.log(this.props.params)
        // const {city,checkin,num_rooms} = this.state
        // let  x= this.props.history.push('?:/stays/staysList='+place+date+rooms)
        // console.log(x)

        // this.setState({
        //     web: '?:/stays/staysList='+place+date+rooms
        // })
        //  return(
        //     <Redirect to= "/login/password"/>
        //  )  

    }
    render(){
        // console.log(this.props)    
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
                                               aria-label="Example text with button addon" aria-describedby="button-addon1" 
                                               value={this.state.city} name="city" onChange={this.handleChange}
                                               />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-outline-secondary" type="button"
                                                    id="button-addon1"><FaRegCalendarAlt/>
                                            </button>
                                        </div>
                                        <input type="date" className={`form-control ${style.calendar}`} placeholder="Check-in - Check-out"
                                               aria-label="Example text with button addon" aria-describedby="button-addon1" 
                                               value={this.state.checkin} name="checkin" onChange={this.handleChange}
                                               />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-outline-secondary" type="button"
                                                    id="button-addon1"><FiUser/>
                                            </button>
                                        </div>
                                        <input type="text" className={`form-control ${style.user}`} placeholder=".."
                                               aria-label="Example text with button addon" aria-describedby="button-addon1" 
                                               value={this.state.num_rooms} name="num_rooms" onChange={this.handleChange}
                                               />
                                    </div>
                                    <Link to= "/stays/staysList">
                                        <button className={`${style.searchBtn}`} onClick={this.handleSubmit}>Search</button>
                                    </Link>
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

const mapStateToProps = state => ({
    staysSearchData: state.staysSearch.staysSearchData,
    isSearch: state.staysSearch.isSearch
    
})

const mapDispatchToProps = dispatch => ({
    staysSearchData: payload => dispatch(staysSearchData(payload))   
})
export default connect(mapStateToProps, mapDispatchToProps)(Stays);
// export default Stays