import React from 'react'
import Navbar from './Navbar'
// import Register from '../Registration/register'

class Stays extends React.Component{
    render(){
        console.log(this.props)
        const activePath = this.props.match.url
        return(
            <div>
                <Navbar activePath = {activePath}/>
                <h1>Ashok</h1>
                {/* <Register/> */}
            </div>
        )
    }
}

export default Stays