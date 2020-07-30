import React, {Component} from 'react';

class MobileInfo extends Component {
    render() {
        return (
            <form className={`p-3`}>

                <div className="form-group">
                    <label htmlFor="inputAddress">Mobile Number</label>
                    <input type="text" className="form-control" id="inputAddress"
                           placeholder="1234 Main St" style={{width:"170px"}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">OTP</label>
                    <input type="text" className="form-control" id="inputAddress"
                           placeholder="1234 Main St" style={{width:"100px"}}/>
                </div>

                <button type="submit" className="btn" style={{backgroundColor:"#0071c2",color:"white"}}>Proceed to Pay</button>
            </form>

        );
    }
}

export default MobileInfo;