import React from 'react';
import './TimerInput.module.scss';

function TimerInput() {
  const preventDefault = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
  }

  return (
    <form className='timer-input' onSubmit={preventDefault}>
      <input type="text" />
      <input type="submit" hidden />
    </form>
  );
}

export default TimerInput;
