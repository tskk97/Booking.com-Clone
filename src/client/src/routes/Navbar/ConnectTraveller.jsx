import React from 'react'
import style from "./RecommendCard.module.css";

class ConnectTraveller extends React.Component{
    render(){
        const {data} = this.props;
        return(
            
            <div className={`${style.container}`}>
                <img src={data.address} alt="notfound" style={{height:"100%",width:"100%"}}/>
                <br/>
                <div style={{fontWeight:"bold",fontSize:"14px",textAlign:"left"}}> <h5>{data.name}</h5></div>
                <div className={`d-flex flex-row`}>
                    <div className={`mr-2 text-muted`} style={{fontSize:"14px"}}>{data.total}</div>
                 </div>
            </div>
        )
    }
}

export default ConnectTraveller