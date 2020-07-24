import React from 'react'
 
class StaysList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            sortByPrice:""
        }
    }

    handleUrlChange = (query)=>{
        
        const url = new URLSearchParams(query)

        console.log(url.get('country'))

        this.setState({
            sortByPrice: url.get('country')
        })
    }

    componentDidMount(){
        const {location} = this.props
          this.handleUrlChange(location.search)
       }
    
    render(){
        console.log("ashok")
        console.log(this.props)
        return(
            <>     
            <div className="my-5">
                <h1 >Flights</h1>
                <h1>Flights</h1>
            </div>
            <div>LIST</div>
            <div>LIST</div>
            <div>LIST</div>
            <div>LIST</div>
            <div>LIST</div>
            <div>LIST</div>
            <div>LIST</div>
            <div>LIST</div>
            <div>
                {this.state.sortByPrice}
            </div>
            </>
        )
    }
}
export default StaysList