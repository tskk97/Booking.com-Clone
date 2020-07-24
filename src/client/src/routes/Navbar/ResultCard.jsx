import React, {Component} from 'react';
import style from "./ResultCard.module.css";

class ResultCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {data} = this.props;
        console.log(data);
        return (
            <div className={`${style.container}`}>
                <div className={`${style.imageDiv}`}>
                    <img src={data.image_url}></img>
                </div>
                <div className={`${style.descr}`}>
                    <h4>{data.name}</h4>
                    <div className={`d-flex flex-row`} style={{textAlign:"left"}}>
                        <p>{data.location}</p>
                        <p className={`ml-2`}>Show on Map</p>
                    </div>
                    <div className={`${style.details}`}>
                        {data.descr}
                    </div>
                </div>
                <div className={`${style.rating}`}>
                    <div className={`d-flex flex-row justify-content-between`}>
                        <div className={`d-flex flex-column`}>
                            <h4 style={{fontSize:"large"}}>Very good</h4>
                            <p style={{fontSize:"small"}}>{data.reviews} reviews</p>
                        </div>
                        <div className={`${style.ratingDiv}`}>{data.rating}</div>
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