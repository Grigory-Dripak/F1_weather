import React, {useState} from "react";
import axios from "axios";
import Weather from "./Weather";
import "../styles/Request.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";


export default function Request(props)  {

    const [weathers, setWeathers] = useState([]);
    const [fixPeriod, setFixPeriod] = useState(props.period);
    const Api_key = "17d4ea840208f6609c79eb6b262f4782";
    
    function sendRequest() {
        if (props.period === "5 days") {
            const OpenWeatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=metric&APPID=${Api_key}`;
            axios.get(OpenWeatherUrl).then(res => { setWeathers(res.data.list) });
        } else {
            const OpenWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&APPID=${Api_key}`;
            axios.get(OpenWeatherUrl).then(res => { setWeathers([res.data]) });
        };
        setFixPeriod(props.period);
    };

    return (
        <>
            <Button variant="primary" className="btn-request" onClick={ sendRequest }>
                Запрос прогноза погоды
            </Button>
            <p>{console.log(weathers)}</p>
            <Table striped bodered="true" className="response">
                <thead><tr><th>Date & Time</th><th>Temperature, C</th><th>Pressure, kPa</th><th>Wind, m/s</th><th>Clouds</th></tr></thead>
                <tbody>
                    {weathers.map((weather, index) => <Weather key={index} period={fixPeriod} details={weather}/>)}
                </tbody>
            </Table>
        </>
    );
};