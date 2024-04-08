import React, {useState} from "react";
import "../styles/Main.css";
import Cities from "./Cities";
import ChangePeriod from "./ChangePeriod";
import Request from "./Request";

export default function Main() {
    const [city, setCity] = useState("Moscow");
    const [period, setPeriod] = useState("1 day");

    return (
        <main>
            <Cities onChange={setCity} curValue={city}/>
            <ChangePeriod onChange={setPeriod} curValue={period}/>
            <Request city={city} period={period} />
        </main>
    );
}
