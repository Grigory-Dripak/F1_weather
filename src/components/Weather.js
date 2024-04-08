import React from "react";

export default function Weather(props) {
    const now = new Date();
    
    return (
        <tr>
            <td>{ props.period === "5 days" && props.details.dt_txt }
                { props.period !== "5 days" && now.toLocaleDateString() + " " + now.toLocaleTimeString() }
            </td>
            <td>{props.details.main.temp}</td>
            <td>{props.details.main.pressure}</td>
            <td>{props.details.wind.speed}</td>
            <td>{props.details.weather.map(i => i.description + " ")}</td>
        </tr>
    )
};