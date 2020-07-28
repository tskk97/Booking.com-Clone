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
            [cat] : new_cat,
            compareFilter:data[0].toLowerCase().split(" ").join("_")
        }, () => {
            let checked = this.state
            this.props.check(checked)
        })
    }
    
    handleIncomingChange = () => {
        const {data, filterTitles, filterResults} = this.props
        for(var i = 0; i < filterTitles.length; i++){
            if(data[0].toLowerCase().split(" ").join("_") === filterTitles[i]){
                console.log(filterTitles, filterResults)
                for(var j = 0; j < filterResults[i].length; j++){
                    let val = filterResults[i][j]
                    let new_cat = this.state[filterTitles[i]] || []            
                    var flag = false
                    for(var k = 0; k < new_cat.length; k++){
                        if(new_cat[k] === val)
                            flag = true
                    }
            
                    if(flag){
                        new_cat = this.state[filterTitles[i]] && this.state[filterTitles[i]].filter(item => {
                            return item !== val
                        })
                    }
                    else{
                        new_cat.push(val)
                    }
            
                    this.setState({
                        [filterTitles[i]+"_"+filterResults[i][j]]: !this.state[filterTitles[i]+"_"+filterResults[i][j]],
                        [filterTitles[i]] : new_cat,
                    },() => {})
                }
            }
        }
    }
    componentDidMount(){
        const {data} = this.props
        // const {location} = this.props
        // console.log(location,"loc")
         
        // this.handleUrlChange(location.search,"filter")
        let cat =  data[0].toLowerCase().split(" ").join("_")

        if(this.state[cat] === undefined){
            this.setState({
                [cat]: []
            })
        }
        this.handleIncomingChange()
    }

    render() {
        const {data} = this.props;
        console.log(this.state)
        return (
            <div className={`${style.container}`}>
                <div className={`${style.titleColor} mb-2`}>
                    {data[0]}:
                </div>
                <div className={`${style.flexCol}`}>
                    {data[1].map((item) =>(
                        <div key={uuidv4()} className={`${style.flexRow}`}>
                            <div>
                                <input className={data[0].toLowerCase().split(" ").join("_")} type="checkbox" onChange={this.handleChange} name={data[0].toLowerCase().split(" ").join("_")+"_"+item} value={item} checked={this.state[data[0].toLowerCase().split(" ").join("_")+"_"+item] ? "checked" : ""} />                                
                                <label className={data[0] === "Review Score" ? "ml-2" : "d-none"}>{item} +</label>
                                <label className={data[0] !== "Review Score" ? "ml-2" : "d-none"}>{item}</label>
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