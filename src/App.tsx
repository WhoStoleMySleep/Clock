import React from 'react';
import styles from './App.module.scss';
import Clock from './components/Counter/Clock';
import TimerInput from './components/TimerInput/TimerInput';
import TimerList from './components/TimerList/TimerList';

function App() {
  return (
    <div className={styles.App}>
      <Clock />
      <TimerInput />
      <TimerList />
    </div>
  );
}

export default App;
