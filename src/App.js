import React from 'react';
import './App.css';
import SetTheme from './Components/SetTheme/SetTheme';
import MainField from './Components/MainField/MainField';
import Dev from './Components/Dev/dev';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>Weather Application</p> */}
        <SetTheme/>
        <MainField/>
        <Dev/>
      </header>
    </div>
  );
}

export default App;
