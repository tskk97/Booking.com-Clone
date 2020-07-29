import React, {Component} from 'react';
import style from "./RecommendCard.module.css";

class RecommendCard extends Component {
    render() {
        const {data} = this.props;
        let name = data.property_name;
        let newName;
        if(name.length > 22){
            newName = name.slice(0,22);
            newName += "...";
        }
        else{
            newName = name;
        }
        return (
            <div className={`${style.container}`}>
                <img src={data.img_path_url}/>
                <div style={{fontWeight:"bold",fontSize:"14px",textAlign:"left"}}>{newName}</div>
                <div className={`d-flex flex-row`}>
                    <div className={`mr-2 text-muted`} style={{fontSize:"14px"}}>{data.review_score}</div>
                    <div style={{fontSize:"14px",textAlign:"left"}} className={`text-muted`}>Very Good</div>
                </div>
                <div style={{textAlign:"left"}}>Starting from <span style={{fontWeight:"bold"}}>₹{data.budget}</span></div>
            </div>
        );
    }
}

export default RecommendCard;