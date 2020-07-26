import React, {Component} from 'react';
import style from "./FilterCards.module.css";
import { v4 as uuidv4 } from 'uuid';

class FilterByCards extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: !this.state[e.target.name]
        })
    }

    render() {
        const {data} = this.props;
        console.log(this.state)
        return (
            <div className={`${style.container}`}>
                <div className="mb-2">
                    {data[0]}
                </div>
                <div className={`${style.flexCol}`}>
                    {data[1].map((item,index) =>(
                        <div key={uuidv4()} className={`${style.flexRow}`}>
                            <div>
                                <input type="checkbox" onChange={this.handleChange} name={data[0]+"_"+item} checked={this.state[data[0]+"_"+item] ? "checked" : ""} />
                                <label className="ml-2">{item}</label>
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