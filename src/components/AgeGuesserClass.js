import React from "react";
import AgeGuesser from "./AgeGuesser";

class AgeGuesserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <label>
                    Name: <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <div><AgeGuesser name={this.state.value} /></div>
            </div>
        );
    }
}

export default AgeGuesserClass;