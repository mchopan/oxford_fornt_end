import React from "react";
import GoogleMapReact from "google-map-react";

const GoogleMap = () => {

    const defaultProps = {
        center: {
            lat: 49.496675,
            lng: -102.65625
        },
        zoom: 4
    };

    return (
        <div style={{ width: "400px", height: "400px" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCZAXnLJ4Yffuv_2h4l3c7_O9QSM2Y1Nuw" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            />
        </div>
    );
};

export default GoogleMap;
