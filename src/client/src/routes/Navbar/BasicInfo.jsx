import React, {Component} from 'react';

class BasicInfo extends Component {
    constructor(props){
        super(props)
        this.state={
          isModal:true,
          firstName:"",
          lastName:"",
          address:"",
          address2:""
        }
    }

    handleChange =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        const {cb} = this.props;
        return (
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">First Name</label>
                        <input type="email" className="form-control" id="inputEmail4" value={this.state.firstName} name="firstname" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Last Name</label>
                        <input type="password" className="form-control"
                               id="inputPassword4"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress"
                           placeholder="1234 Main St"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2"
                           placeholder="Apartment, studio, or floor"/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity"/>
                    </div>

                    <div className="form-group col-md-2">
                        <label htmlFor="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip"/>
                    </div>
                </div>

                <button type="submit" className="btn" onClick={()=>cb()} style={{backgroundColor:"#0071c2",color:"white"}}>Proceed to Final Details</button>
            </form>

        );
    }
}

export default BasicInfo;