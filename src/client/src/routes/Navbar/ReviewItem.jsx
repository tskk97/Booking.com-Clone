import React, {Component} from 'react';
import style from "./ReviewItem.module.css";

class ReviewItem extends Component {
    render() {
        const {data,index} = this.props;
        // console.log(data)
        return (
            <div className="py-3 border-bottom border-dark">
                <p className={`${style.para}`}>{`"${data["user_review"]}"`}</p>
                <div className="row">
                    <div className={`col-2`}>
                        <div className={`rounded-circle ${style.pic}`}>{data["email"][0].toUpperCase()}</div>
                    </div>
                    <div className={`col-10 text-left`}>
                        <div style={{fontSize:"14px"}}>{data["email"]}</div>
                        <div style={{fontSize:"14px"}}><img src="https://www.countryflags.io/in/flat/24.png" alt="" /> {data["country_name"]}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReviewItem;