import React, {Component} from 'react';
import style from "./ResultCard.module.css";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {staysSearchData} from '../../redux/Stays/action'
import {AiFillStar} from 'react-icons/ai'

class ResultCard extends Component {
    constructor(props) {
        super(props)
        this.state={
        }
    }
    render() {
        const {staysSearchData,searchData} = this.props;
        // console.log(searchData[0],"app");
        // console.log(staysSearchData,"asdfdf")
        return (
            
            <div className={`${style.container}`}>
                <div className={`${style.imageDiv}`}>
                    <img src={searchData.img_path_url}></img>
                </div>
                <div className={`${style.descr}`}>
                    <Link to={`/stays/property/${searchData.id}`}>
                        <h4 style={{color:"#0071c2",fontSize:"20px","fontWeight":"bold",padding:"3px 0"}}>{searchData.property_name}</h4>
                    </Link>
                    <div className={`d-flex flex-row`} style={{textAlign:"left"}}>
                        <p style={{fontSize:"12px",color:"#0071c2"}}>{searchData.city_name}</p>
                        <p style={{fontSize:"12px",color:"#0071c2"}} className={`ml-2`}>Show on Map</p>
                    </div>
                    <div className={`${style.details}`}>
                        {searchData.description}
                    </div>
                </div>
                <div className={`${style.rating}`}>
                    <div className={`d-flex flex-row justify-content-between`}>
                        <div className={`d-flex flex-column`}>
                            <h4 className="mr-2" style={{fontSize:"large"}}>Very good</h4>
                            <p><AiFillStar size="1.2em" color="#e8b923" /> {searchData.rating}</p>
                        </div>
                        <div className={`${style.ratingDiv}`}>{searchData.review_score}</div>
                    </div>
                    <div className={`${style.priceBtn}`}>
                        <button>Show prices</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResultCard;