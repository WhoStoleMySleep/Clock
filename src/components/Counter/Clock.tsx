import React, { useEffect, useState } from 'react';
import styles from './Clock.module.scss';

function Clock() {
  const [date, setDate] = useState(new Date())
  
  const {hour, minutes, second} = {
    hour: date.getHours().toString().length > 1 ? date.getHours() : `0${date.getHours()}`,
    minutes: date.getMinutes().toString().length > 1 ? date.getMinutes() : `0${date.getMinutes()}`,
    second: date.getSeconds().toString().length > 1 ? date.getSeconds() : `0${date.getSeconds()}`,
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date())
    }, 500)

    return () => {
      window.clearInterval(interval)
    }
  })

  return (
    <h1 className={styles.clock}>
      {hour}:{minutes}:{second}
    </h1>
  );
}

export default Clock;
