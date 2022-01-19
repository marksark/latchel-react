import './App.css';
import React from "react";
import SpaceXLaunches from "./components/SpaceXLaunches";
import AgeGuesserClass from "./components/AgeGuesserClass";

function App() {
    return (
        <div className="App">
            <div>
                <h1>Agify</h1>
                <AgeGuesserClass />
            </div>
            <br />
            <div className='flights'>
                <h1>Flight List</h1>
                <SpaceXLaunches />
            </div>
        </div>
    );
}

export default App;
