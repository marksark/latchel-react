// helpful resource for typing w async functions in react
// https://stackoverflow.com/questions/42217121/how-to-start-search-only-when-user-stops-typing
import axios from 'axios';
import { useEffect, useState } from 'react';

const AgeGuesser = ({url}) => {

    const [name, setName] = useState('');
    const [guess, setGuess] = useState({});

    useEffect(() => {
        // delay function to prevent multiple API calls while user types
        const delaySearchName = setTimeout(() => {
            axios.get(`${url}${name}`)
                .then(resp => setGuess(resp.data))
                .catch(err => {
                    console.log('something went wrong!');
                    setGuess({});
                })
          }, 1000)

        // return function cancels the pending setTimeout while user types
        return () => clearTimeout(delaySearchName)
      
    }, [name, url])

    return (
        <div>
            <h1>Age Guesser</h1>
            <input
                type='text'
                autoComplete='off'
                placeholder='Enter Name'
                // trim input value to remove extra spaces
                onChange={(e) => setName(e.target.value.trim())}
            />
            {guess.age && <div>
                <br/>
                <div>Result for {name}</div>
                <div>Age: {guess.age}</div>
            </div>}
        </div>
    )
}

export default AgeGuesser;