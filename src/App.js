import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayWeather from '../src/components/DisplayWeather'

function App() {
  const [currentLocation, setCurrentLocation] = useState({});

  useEffect(() => {
    const baseUrl = ' https://api.weatherapi.com/v1/current.json?key=d09180696dff4bb0ad9135044240912&q='

    navigator.geolocation.getCurrentPosition((postion) => {
      axios.get(baseUrl + postion.coords.latitude + ',' + postion.coords.longitude)
        .then(response => setCurrentLocation(response.data))
    })

    return
  }, [])

  return (
    <div className="App">
      <DisplayWeather userLocation={currentLocation} /> </div>
  );
}

export default App;