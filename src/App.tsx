import React from 'react';
import './App.css';
import Clock from './components/Counter/Clock';
import TimerInput from './components/TimerInput/TimerInput';
import TimerList from './components/TimerList/TimerList';

function App() {
  return (
    <div className="App">
      <Clock />
      <TimerInput />
      <TimerList />
    </div>
  );
}

export default App;
