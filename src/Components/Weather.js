import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Weather = () => {
    const [weather, setWeather] = useState();
    let display = useSelector(selectDisplay);
    let latitude = display.capitalInfo.latlng[0];
    let longitude = display.capitalInfo.latlng[1];

    useEffect(() => {
        const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://dark-sky.p.rapidapi.com/-77,38.9',
  params: {units: 'auto', lang: 'en'},
  headers: {
    'X-RapidAPI-Key': '6840ce79f9msh6fa2c8e2511e276p11ed5fjsn7efac4b035e0',
    'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
    }, []);

    return (
        <div>
            <table className="overview-table">
                <tr>
                    <td>Conditions: </td>
                    <td>{weather?.current?.condition?.text}</td>
                </tr>
                <tr>
                    <td>Temperature: </td>
                    <td>{weather?.current.temp_f} degrees Fahrenheit</td>
                </tr>
                <tr>
                    <td>Feels Like: </td>
                    <td>{weather?.current?.feelslike_f} degrees Fahrenheit</td>
                </tr>
                <tr>
                    <td>Humidity: </td>
                    <td>{weather?.current?.humidity}%</td>
                </tr>
                <tr>
                    <td>Wind Speed: </td>
                    <td>
                        {weather?.current?.wind_mph} mph{" "}
                        {weather?.current?.wind_dir}
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default Weather;
