import React, {Component} from 'react';
import style from "./FilterCards.module.css";
import { v4 as uuidv4 } from 'uuid';

class FilterByCards extends Component {
    constructor(props) {
        super(props);
        this.state={
            displayFlag:false
        }
    }
    handleClick = ()=>{
        this.setState({
            displayFlag:!this.state.displayFlag
        })
    }
    render() {
        const {data,cb} = this.props;
        console.log("data in card Filter is",data);
        console.log("callback is",cb);
        return (
            <div className={`${style.container}`}>
                <div>
                    {data[0]}
                </div>
                <div className={`${style.flexCol}`}>
                    {data[1].map((item,index) =>(
                        <div key={uuidv4()} className={`${style.flexRow}`}>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox"  onChange={e=>cb(e)} name={data[0] + item} className="custom-control-input"
                                       id={`customCheck${index * 100}`} />
                                <label className="custom-control-label" htmlFor={`customCheck${index * 100}`}>{item}</label>
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