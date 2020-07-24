import React, {Component} from 'react';
import style from "./FilterCards.module.css";

class FilterByCards extends Component {
    render() {
        const {data} = this.props;
        console.log("data in card Filter is",data)
        return (
            <div className={`${style.container}`}>
                <div>
                    {data[0]}
                </div>
                <div className={`${style.flexCol}`}>
                    {data[1].map(item =>(
                        <div className={`${style.flexRow}`}>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                       id="customCheck1"/>
                                <label className="custom-control-label" htmlFor="customCheck1">{item}</label>
                            </div>
                            <div className={`text-muted`}>{data.length}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default FilterByCards;