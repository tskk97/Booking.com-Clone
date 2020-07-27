import React, {Component} from 'react';
import style from "./FilterCards.module.css";

class FilterByCards extends Component {
    render() {
        const {data,reviews} = this.props;
        // console.log(data)
        return (
            <div className={`${style.container}`}>
                <div>
                    {/* {data.name} */}
                </div>
                <div className={`${style.flexCol}`}>                   
                    <div className={`${style.flexRow}`}>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input"
                                   id="customCheck1"/>
                            <label className="custom-control-label" htmlFor="customCheck1">{data}</label>
                        </div>
                        <div className={`text-muted`}>{data.length}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilterByCards;