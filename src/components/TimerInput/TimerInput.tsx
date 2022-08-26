import React, { useState } from 'react';
import timers from '../../store/timers';
import styles from './TimerInput.module.scss';

function TimerInput() {
  const [text, setText] = useState('');

  const handleFormSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    timers.addTimer({
      id: Math.random(),
      date: text,
      startDate: `${hour}:${minutes}:${seconds}`,
      completed: false
    });
  };

  const handleInput = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setText(event.target.value);
  };

  return (
    <form className={styles['timer-input']} onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder='[hh:mm:ss] || [mm:ss] || [ss]'
        onChange={handleInput}
        className={styles['timer-input__input']}
        maxLength={9}
      />
      <input type="submit" hidden />
    </form>
  );
}

export default TimerInput;
