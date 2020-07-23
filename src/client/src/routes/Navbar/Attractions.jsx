import React from 'react'
import Navbar from './Navbar'
class Attractions extends React.Component{
    render(){
        console.log(this.props,"Ashok")
        const activePath = this.props.match.url
        return(
            <div>
                <Navbar activePath = {activePath}/>
                <h1>Attractions</h1>
                <h1>Attractions</h1>
                 
            </div>
        )
    }
}

export default Attractions