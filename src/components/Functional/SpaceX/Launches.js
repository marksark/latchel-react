import { useState, useEffect } from 'react';
import ResultCard from './ResultCard/ResultCard';
import axios from 'axios';

const Launches = ({url}) => {

    const [launches, setLaunches] = useState([]);

    useEffect( () => {
        axios.get(url)
            .then(resp => setLaunches(resp.data))
            .catch(err => {
                alert(' something happened while fetching launches!')
            });
    }, [url])

    return (
        <div>
            <h1>Launches</h1>
            {launches.map((each, index) => (
                // only display first 15 for now
                (index < 15) && <ResultCard 
                    // key must be unique for react to properly re-render (you can also use UUID here if you want)
                    key={`${each.mission_name}-${each.flight_number}`}
                    mission_name={each.mission_name} 
                    flight_number={each.flight_number}
                />
            ))}
        </div>
    )
}

export default Launches;