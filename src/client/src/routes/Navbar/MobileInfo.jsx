import React, {Component} from 'react';
import Payment from "../Navbar/Payment"

class MobileInfo extends Component {
    render() {
        const {cb, match} = this.props
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
                <button type="submit" onClick={()=>cb()} className="btn mr-3" style={{backgroundColor:"#0071c2",color:"white"}}>Back</button>
                {/* <Link to={`${match.url}/payment/getOrderId`}><button type="submit" className="btn mr-3" style={{backgroundColor:"#0071c2",color:"white"}}>Proceed to Pay</button></Link> */}
                <Payment match={match} />
            </form>

        );
    }
}

export default MobileInfo;