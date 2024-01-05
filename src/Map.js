import React, { useState, useEffect } from 'react';
import FinalIn from './FinalIn';
import FinalOut from './FinalOut';

const Map = ({ latitude, longitude }) =>{

  const boylstonCoords = { lat: 42.3523, lng: -71.0652 };

  const endCoords = {
    lat: parseFloat(latitude),
    lng: parseFloat(longitude)
  };


  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBpd_uMR5l-TLEMIJlSUjEpxOlXPy30Y3E&callback=initializeMap&v=weekly";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      initializeMap();
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      delete window.initializeMap;
    };
  });

  const initializeMap = () => {
    const directionsRenderer = new window.google.maps.DirectionsRenderer();
    const directionsService = new window.google.maps.DirectionsService();
    const map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: { lat: 42.3523, lng: -71.0652 },
      disableDefaultUI: true,
    });

    directionsRenderer.setMap(map);
    directionsRenderer.setPanel(document.getElementById('sidebar'));



    calculateAndDisplayRoute(directionsService, directionsRenderer, boylstonCoords, endCoords);

  };

  const calculateAndDisplayRoute = (directionsService, directionsRenderer, startCoords, endCoords) => {
   

    directionsService
      .route({
        origin: startCoords,
        destination: endCoords,
        travelMode: window.google.maps.TravelMode.TRANSIT,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
      });

      console.log(endCoords);
      console.log(longitude)
  };


  const [finalCalled, setFinal] = useState(false);

  const handleEnd = (event) => {
    event.preventDefault();
    setFinal(true);
  };

  if (finalCalled) {
    if (longitude > -71.0652) { //outbound
       return <FinalOut/>;
    } else {
        console.log();
        return <FinalIn/>;    
    }
  }

  return (
    <div className="Map">

      <div id="container">
        <div id="map" style={{ height: '800px', width: '100%' }}></div>
        <div id="sidebar"></div>

        <button type="submit" className='button-final' onClick={handleEnd}>NEXT</button>
      </div>
    </div>
  );
}

export default Map;
