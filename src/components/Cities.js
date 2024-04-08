import React, {useState} from "react";

import JsonFile from './cities_list/city.list.json';
import Form from "react-bootstrap/Form";
import "../styles/Cities.css";


function Cities(props) {
    const [cities, setCities] = useState([]);
    
    if(!cities.length) {
        const ruCities = JsonFile.filter(ru => ru.country == "RU").sort((a, b) => (a.name < b.name) ? -1 : 1);
        setCities(ruCities.filter(c => c.name.length > 1));
    }

    const cityChange = (event) => {
        props.onChange(event.target.value)
    }

    return (
        <>
            <p> Select city below: </p>
            <Form.Select aria-label="Select city" defaultValue={props.curValue} onChange={cityChange}>
                {cities.map(city => <option key={city.id} value={city.name}>{city.name}</option>)}
            </Form.Select>
        </>
    )
}

export default Cities;