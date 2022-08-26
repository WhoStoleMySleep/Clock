import React from 'react';
import styles from './App.module.scss';
import Clock from './components/Counter/Clock';
import ThemeChanger from './components/ThemeChanger/ThemeChanger';
import TimerInput from './components/TimerInput/TimerInput';
import TimerList from './components/TimerList/TimerList';

function App() {
  return (
    <div className={styles.App}>
      <ThemeChanger />
      <Clock />
      <TimerInput />
      <TimerList />
    </div>
  );
}

export default App;
