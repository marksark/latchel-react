import React, { useEffect, useState } from 'react';
import axios from "axios";

function AgeGuesser(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState([]);

    useEffect(() => {
        if (props.name) {
            axios.get('https://api.agify.io/', {params: {name: props.name}})
                .then(
                    res => {
                        setItem(res.data);
                        setIsLoaded(true);
                    },
                    error => {
                        setError(error)
                    }
                );
        }
    }, [props.name])

    if (error) {
        return (
            <div>Error: {error.message}</div>
        );
    } else if (!isLoaded) {
        return (
            <div>...Loading</div>
        );
    } else {
        return (
            <div>
                <h5>{item.name}</h5>
                <h6>{item.age}</h6>
                <h6>{item.count}</h6>
            </div>
        );
    }
}

export default AgeGuesser;