import React from 'react';

function ResultCard(props) {
    let flights = props.data;

    return (
        <ul className='no-bullets'>{flights.map(flight => (
            <li key={flight.flight_number}>
                {flight.mission_name} - {flight.flight_number}
            </li>
        ))}
    </ul>);
}

export default ResultCard;