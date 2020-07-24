import React, {Component} from 'react';
import style from "./FilterCards.module.css";

class FilterByCards extends Component {
    render() {
        const {data} = this.props;
        return (
            <div className={`${style.container}`}>
                <div>
                    {data.name}
                </div>
                <div className={`${style.flexCol}`}>
                    {data.filterData.map(item =>(
                        <div className={`${style.flexRow}`}>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                       id="customCheck1"/>
                                <label className="custom-control-label" htmlFor="customCheck1">{item[0]}</label>
                            </div>
                            <div className={`text-muted`}>{item[1]}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default FilterByCards;