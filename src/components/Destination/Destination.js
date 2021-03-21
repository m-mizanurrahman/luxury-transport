import React from 'react';
import logo from '../../images/images/Map.png';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


const Destination = () => {
    return (
        <div>
            {/* <Map google={this.props.google} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    
                </InfoWindow>
            </Map> */}
            <img src={logo} alt="Search Result" />
        </div>
    );
};

export default Destination;

// export default GoogleApiWrapper({
//     apiKey: ("YOUR_GOOGLE_API_KEY_GOES_HERE")
// })(Destination)