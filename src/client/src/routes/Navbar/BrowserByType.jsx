import React from 'react'
import style from "./RecommendCard.module.css";

class BrowserByType extends React.Component{
    render(){
        // console.log(this.props,"Ashok")
        // const activePath = this.props.match.url
        const {data} = this.props;
        return(
            
            <div className={`${style.container}`}>
                <img src={data.address} alt="notfound"/>
                <br/>
                <div style={{fontWeight:"bold",fontSize:"14px",textAlign:"left"}}> <h5>{data.name}</h5></div>
                <div className={`d-flex flex-row`}>
                    <div className={`mr-2 text-muted`} style={{fontSize:"14px"}}>{data.total}</div>
                 </div>
            </div>
            
            // <div class="card" style={{width:"18rem"}}>
            //   <img class="card-img-top" src={data.address} alt="Card image cap" />
            //   <div class="card-body">
            //   <h5>{data.name}</h5>
            //     <p class="card-text"> </p>
            //   </div>
            // </div>
 
        )
    }
}

export default BrowserByType