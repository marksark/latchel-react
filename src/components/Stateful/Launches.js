import React from 'react';
import axios from 'axios';

class Launches extends React.Component {
    state = {
        launches: []
    }

    componentDidMount(){
        axios.get("https://api.spacexdata.com/v3/launches")
            .then(resp => this.setState({launches: resp.data}))
            .catch(err => {
                alert(' something happened while fetching launches!')
            });
    }

    render() {
        return (
            <div>
                <h1>Launches</h1>
                {this.state.launches?.map((launch, index) => (
                // only display first 15 for now
                (index < 15) && (
                    <div key={`${launch.mission_name}-${launch.flight_number}`}>
                        {launch.mission_name} - {launch.flight_number}
                    </div>
                )
            ))}
            </div>
        )
    }
};

export default Launches;