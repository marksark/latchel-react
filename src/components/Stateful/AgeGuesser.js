import React from 'react';
import axios from 'axios';

class AgeGuesser extends React.Component {
    state = {
        age: 0,
        nameOfPerson: ''
    }

    // keep track of timeout
    timeout = 0;

    // updates the state with any key/value pair passed
    // event is passed in here, so we can deconstruct
    // inputHandler = (event) => {
        // const name = event.target.name;
        // const value = event.target.value;
    inputHandler = ({target: {name, value}}) => {
        this.setState({ [name]: value });
    }

    handleNameChange = (e) => {
        this.inputHandler(e);
        if(this.timeout){
            clearTimeout(this.timeout);
        }

        this.timeout = setTimeout((name) => {
            axios.get(`https://api.agify.io/?name=${e.target.value}`)
                .then(resp => this.setState({ age: resp.data.age}))
                .catch(err => {
                    console.log('something went wrong!');
                    this.setState({ age: 0 });
                })
          }, 1000);
    }
    

    render() {
        const {nameOfPerson} = this.state;
        return (
            <div>
                <h1>Age Guesser</h1>
                <input
                    type='text'
                    name="nameOfPerson"
                    autoComplete='off'
                    placeholder='Enter Name...'
                    defaultValue={nameOfPerson}
                    // trim input value to remove extra spaces
                    onChange={this.handleNameChange}
                    />
                {/* React will render anything string or number so && here won't work */}
                {this.state.age ? <div>
                    <br/>
                    <div>Result for {nameOfPerson}</div>
                    <div>Age: {this.state.age}</div>
                </div> : null}
            </div>
        )
    }
};

export default AgeGuesser;