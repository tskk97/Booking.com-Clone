import React, {Component} from 'react';
import style from "./RecommendCard.module.css";

class RecommendCard extends Component {
    render() {
        const {data} = this.props;
        return (
            <div className={`${style.container}`}>
                <img src={data.img_path_url}/>
                <div style={{fontWeight:"bold",fontSize:"14px"}}>{data.property_name}</div>
                <div className={`d-flex flex-row`}>
                    <div className={`mr-2`}>{data.review_score}</div>
                    <div>Very Good</div>
                </div>
                <div>Starting from <span style={{fontWeight:"bold"}}>₹{data.budget}</span></div>
            </div>
        );
    }
}

export default RecommendCard;