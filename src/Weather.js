import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);
  function displayTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  let apiKey = "4af869c2b16527dd3b375c7f352dada0";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;
  axios.get(url).then(displayTemperature);

  if (temperature) {
    return (
      <h1>
        The weather in {props.city} is {Math.round(temperature)}°F
      </h1>
    );
  } else {
    return <p>Loading...</p>;
  }
}
