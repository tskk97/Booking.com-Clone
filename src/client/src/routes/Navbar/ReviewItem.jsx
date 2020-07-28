import React, {Component} from 'react';
import style from "./ReviewItem.module.css";

class ReviewItem extends Component {
    render() {
        const {data,index} = this.props;
        return (
            <div className={`${style.container}`}>
                <p className={`${style.para}`}>{`"${data[0]}"`}</p>
                <div className={`${style.profile}`}>
                    <div className={`rounded-circle ${style.pic}`}>{data[1][0].toUpperCase()}</div>
                    <div className={`d-flex flex-column ml-2`}>
                        <div style={{fontSize:"14px"}}>{data[1]}</div>
                        <div style={{fontSize:"14px"}}>{data[2]}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReviewItem;