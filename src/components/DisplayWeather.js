import React, { useEffect, useState } from "react";
import './DisplayWeather.css'

function DisplayWeather(userLocation) {
    const [location, setLocation] = useState({});
    const [weather, setWeather] = useState({});
    const [weatherInfo, setWeatherInfo] = useState({});
    const [dayOfWeek, setDayOfWeek] = useState('');

    useEffect(() => {

        if (Object.keys(userLocation.userLocation).length !== 0) {
            setWeather(userLocation.userLocation.current)
            setLocation(userLocation.userLocation.location)
            setWeatherInfo(userLocation.userLocation.current.condition)
        } else {
            return
        }

        let weekday = new Array(7);
        weekday[0] = "Monday";
        weekday[1] = "Tuesday";
        weekday[2] = "Wednesday";
        weekday[3] = "Thursday";
        weekday[4] = "Friday";
        weekday[5] = "Saturday";
        weekday[6] = "Sunday";

        setDayOfWeek(weekday[userLocation.userLocation.current.is_day])

        return
    }, [userLocation, location, weather])

    return (
        <div className="display-weather-container">
            <span>{location.name}</span>
            <span>{location.region}</span>
            <img className="weather-icon" alt="img-fail" src={weatherInfo.icon} />
            <span>{weather.temp_c}°</span>
            <span>{weatherInfo.text}</span>
            <div className="weather-details">
                <div className="weather-details-info">
                    <span>Humidity</span>
                    <span>{weather.humidity}°</span>
                </div>
                <div className="weather-details-info">
                    <span>Wind Direction</span>
                    <span>{weather.wind_dir}</span>
                </div>
                <div className="weather-details-info">
                    <span>Wind Speed</span>
                    <span>{weather.wind_kph}kp/h</span>
                </div>
            </div>
            <span className="day-of-week">{dayOfWeek}</span>
        </div>
    );
}

export default DisplayWeather;