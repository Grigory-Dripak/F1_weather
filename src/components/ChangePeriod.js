import React from "react";
import Form from "react-bootstrap/Form";
import "../styles/Period.css";

export default function ChangePeriod(props) {

    return (
        <>
            <p> Select period: </p>
            <Form.Select aria-label="Select period" defaultValue={props.curValue} onChange={e => props.onChange(e.target.value)}>
                <option value="1 day">1 day forecast</option>
                <option value="5 days">5 days forecast</option>
            </Form.Select>
        </>
    )
};
