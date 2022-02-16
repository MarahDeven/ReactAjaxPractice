import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  return <h1>The weather in {props.city} is 26°C</h1>;
}
