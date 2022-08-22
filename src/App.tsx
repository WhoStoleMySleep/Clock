import React from 'react';
import './App.css';
import Clock from './components/Counter/Clock';
import TimerInput from './components/TimerInput/TimerInput';

function App() {
  return (
    <div className="App">
      <Clock />
      <TimerInput />
    </div>
  );
}

export default App;
