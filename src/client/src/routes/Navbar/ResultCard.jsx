import React, {Component} from 'react';
import style from "./ResultCard.module.css";
import {connect} from 'react-redux'
import {staysSearchData} from '../../redux/Stays/action'

class ResultCard extends Component {
    constructor(props) {
        super(props)
        this.state={
        }
    }
    render() {
        const {staysSearchData,searchData} = this.props;
        // console.log(searchData[0],"app");
        console.log(staysSearchData,"asdfdf")
        return (
            
            <div className={`${style.container}`}>
                <div className={`${style.imageDiv}`}>
                    <img src={searchData.img_path_url}></img>
                </div>
                <div className={`${style.descr}`}>
                    <h4>{searchData.property_name}</h4>
                    <div className={`d-flex flex-row`} style={{textAlign:"left"}}>
                        <p>{searchData.city_name}</p>
                        <p className={`ml-2`}>Show on Map</p>
                    </div>
                    <div className={`${style.details}`}>
                        {searchData.description}
                    </div>
                </div>
                <div className={`${style.rating}`}>
                    <div className={`d-flex flex-row justify-content-between`}>
                        <div className={`d-flex flex-column`}>
                            <h4 style={{fontSize:"large"}}>Very good</h4>
                            <p style={{fontSize:"small"}}>{searchData.review_score} reviews</p>
                        </div>
                        <div className={`${style.ratingDiv}`}>{searchData.rating}</div>
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