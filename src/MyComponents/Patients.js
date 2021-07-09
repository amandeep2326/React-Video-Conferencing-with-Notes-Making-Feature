import React from 'react'
import './Patients.css';
export const Patients = () => {
    const data = require("./data.json");
    return (
        <div className="drop-down">
            <button type="button">
                Patients
            </button>

            <select> 
                {data.map(item => (
                    <option key={item.id} value={item.name}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    )
}
