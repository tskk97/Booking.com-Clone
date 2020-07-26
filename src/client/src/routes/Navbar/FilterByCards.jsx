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
        const {data} = this.props;
        let cat =  data[0].toLowerCase().split(" ").join("_")

        let val = e.target.value
        let new_cat = this.state[cat]

        var flag = false
        for(var i = 0; i < new_cat.length; i++){
            if(new_cat[i] === val)
                flag = true
        }

        if(flag){
            new_cat = this.state[cat] && this.state[cat].filter(item => {
                return item !== val
            })
        }
        else{
            new_cat.push(val)
        }

        this.setState({
            [e.target.name]: !this.state[e.target.name],
            [cat] : new_cat
        }, () => {
            let checked = this.state
            this.props.check(checked)
        })
    }

    componentDidMount(){
        const {data} = this.props

        let cat =  data[0].toLowerCase().split(" ").join("_")

        if(this.state[cat] === undefined){
            this.setState({
                [cat]: []
            })
        }
    }

    render() {
        const {data} = this.props;
        // console.log(this.state)
        return (
            <div className={`${style.container}`}>
                <div className="mb-2">
                    {data[0]}
                </div>
                <div className={`${style.flexCol}`}>
                    {data[1].map((item) =>(
                        <div key={uuidv4()} className={`${style.flexRow}`}>
                            <div>
                                <input className={data[0].toLowerCase().split(" ").join("_")} type="checkbox" onChange={this.handleChange} name={data[0].split(" ").join("_")+"_"+item} value={item} checked={this.state[data[0].split(" ").join("_")+"_"+item] ? "checked" : ""} />
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