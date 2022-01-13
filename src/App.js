import './App.css';

import StatefulAgeGuesser from './components/Stateful/AgeGuesser';
import StatefulLaunches from './components/Stateful/Launches';
import AgeGuesser from './components/Functional/AgeGuesser/AgeGuesser';
import Launches from './components/Functional/SpaceX/Launches';

function App() {
  return (
    <div className="App">
      <StatefulAgeGuesser/>
      <hr/>
      <StatefulLaunches />
      <br/>
      <br/>
      <hr/>
      <hr/>
      <br/>
      <br/>
      <AgeGuesser url="https://api.agify.io/?name=" />
      <hr/>
      <Launches url="https://api.spacexdata.com/v3/launches"/>
    </div>
  );
}

export default App;
