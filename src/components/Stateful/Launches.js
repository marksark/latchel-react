import React from 'react';
import axios from 'axios';

class Launches extends React.Component {
    state = {
        launches: [],
        showingLaunches: false
    }

    componentDidMount(){
        this.getLaunches();
    }

    getLaunches = () => {
        axios.get("https://api.spacexdata.com/v3/launches")
            .then(resp => this.setState({launches: resp.data, showingLaunches: true}))
            .catch(err => {
                alert(' something happened while fetching launches!')
            });
    }

    clearLaunches = () => {
        this.setState({ launches: [], showingLaunches: false });
    }

    render() {
        const { showingLaunches, launches } = this.state;
        return (
            <div>
                <h1>Launches</h1>
                {launches?.map((launch, index) => (
                // only display first 15 for now
                (index < 15) && (
                    <div key={`${launch.mission_name}-${launch.flight_number}`}>
                        {launch.mission_name} - {launch.flight_number}
                    </div>
                )
            ))}
            {showingLaunches ? <div>
                <button onClick={this.clearLaunches}>Clear Launches</button>
            </div> : <div>
                <button onClick={this.getLaunches}>Fetch Launches</button>
            </div>}
            </div>
        )
    }
};

export default Launches;