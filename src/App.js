import Launches from './components/SpaceX/Launches';
import './App.css';
import AgeGuesser from './components/AgeGuesser/AgeGuesser';

function App() {
  return (
    <div className="App">
      <AgeGuesser url="https://api.agify.io/?name=" />
      <hr/>
      <Launches url="https://api.spacexdata.com/v3/launches"/>
    </div>
  );
}

export default App;
