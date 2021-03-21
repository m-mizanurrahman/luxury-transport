import React from 'react';
import logo from '../../images/images/5 Search result.png';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


const Destination = () => {

    return (
        <div>
            <h1>Let's go</h1>
            <img src={logo} alt="Search Result" />
        </div>
    );


};

export default Destination;

// export default GoogleApiWrapper({
//     apiKey: ("YOUR_GOOGLE_API_KEY_GOES_HERE")
// })(Destination)