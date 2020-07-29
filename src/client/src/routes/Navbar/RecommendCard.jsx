import React, {Component} from 'react';
import style from "./RecommendCard.module.css";

class RecommendCard extends Component {
    render() {
        const {data} = this.props;
        return (
            <div className={`${style.container}`}>
                <img src={data.img_path_url}/>
                <div style={{fontWeight:"bold",fontSize:"14px",textAlign:"left"}}>{data.property_name}</div>
                <div className={`d-flex flex-row`}>
                    <div className={`mr-2`} style={{fontSize:"14px"}}>{data.review_score}</div>
                    <div style={{fontWeight:"bold",fontSize:"14px",textAlign:"left"}}>Very Good</div>
                </div>
                <div style={{textAlign:"left"}}>Starting from <span style={{fontWeight:"bold"}}>₹{data.budget}</span></div>
            </div>
        );
    }
}

export default RecommendCard;