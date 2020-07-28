import React from 'react'

class ImgsEntity extends React.Component{
    
    render(){
        const {dataImg,indexImg} = this.props
          return(
            <div className={indexImg === 0 ? "carousel-item active": "carousel-item" }  data-interval="900000">
                <img src={dataImg} className="d-block w-100" alt="..."/>
            </div>
            // <div>
            //     <img src={dataImg} className="d-block w-100" alt="..."/>
            // </div>
        )
    }
}

export default ImgsEntity