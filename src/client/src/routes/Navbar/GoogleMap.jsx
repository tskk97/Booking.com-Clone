import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 12.9344758,
      lng: 77.6192442
    },
    zoom: 11
  };
 
  render() {
      console.log("modal coming")
    return (
      // Important! Always set the container height explicitly
<div>
     {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
      Launch demo modal
    </button> */}
    
     <div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
      <div class="modal-dialog">
        <div class="modal-content"style={{width:1000}}>
          <div class="modal-header">
            {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
            <div style={{ height: '100vh', width: '400%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyCcS0j7hDpSs-F4xDi2q6AkTD_sWqECR9M'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={12.9554467}
            lng={77.6121012}
            text= {<i style = {{color:"red",fontSize:"20px"}} class="fa fa-map-marker" aria-hidden="true">Raddison</i>}
          />
           <AnyReactComponent
            lat={12.9344758}
            lng={77.6192442}
            text= {<i style = {{color:"red",fontSize:"20px"}} class="fa fa-map-marker" aria-hidden="true">Youfeed</i>}
          />
          <AnyReactComponent
             lat={12.7344758}
             lng={77.6192442}
            text= {<i style = {{color:"red",fontSize:"20px"}} class="fa fa-map-marker" aria-hidden="true">Feednation</i>}
          />
          <AnyReactComponent
             lat={12.9344758}
             lng={77.5192442}
            text= {<i style = {{color:"red",fontSize:"20px"}} class="fa fa-map-marker" aria-hidden="true">Cogilith</i>}
          />
        </GoogleMapReact>
    </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
           </div>
        </div>
      </div>
    </div>
    </div>
    );
  }
}
 
export default GoogleMap;