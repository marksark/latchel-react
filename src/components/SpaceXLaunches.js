import React, { useEffect, useState } from 'react';
import ResultCard from "./ResultCard";
import axios from "axios";

function SpaceXLaunches() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/launches')
            .then(
                res => {
                    setItems(res.data);
                    setIsLoaded(true);
                },
                error => {
                    setError(error);
                }
            );
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <ResultCard data={items} />
            </div>
        );
    }
}

export default SpaceXLaunches;