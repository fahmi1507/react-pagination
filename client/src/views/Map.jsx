import React from "react";
import ReactMapGL from "react-map-gl";

const Map = () => {
  const [viewport, setViewport] = React.useState({
    latitude: -6.121435,
    longitude: 106.774124,
    zoom: 8,
    bearing: 0,
    pitch: 40,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/dark-v9"
      mapboxApiAccessToken="pk.eyJ1IjoiZmFobWkxNTA3IiwiYSI6ImNrcTBodjhkeTA0enQycG83eG9xbHYxdTgifQ.hydhFAcSE-Cim2N39URBHg"
      {...viewport}
      width="100vw"
      height="100vh"
      onViewportChange={(viewport) => setViewport(viewport)}
    />
  );
};

export default Map;
