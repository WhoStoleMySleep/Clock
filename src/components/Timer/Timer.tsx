import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import timers from '../../store/timers';
import styles from './Timer.module.scss';

function Timer(props: {
  id: number,
  date: string,
  startDate: string,
  completed: boolean;
}) {
  const { id, date, startDate, completed } = props

  const dateArray = date.split(/[:,.,/, ]/)
  let seconts = [
    +dateArray[0],
    +dateArray[0] * 60 + +dateArray[1],
    +dateArray[0] * 60 * 60 + +dateArray[1] * 60 + +dateArray[2]
  ][dateArray.length - 1];

  const [time, setTime] = useState(seconts)
  const [range, setRange] = useState(['', ''])

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime(time - 1);
    }, 1000)

    if (time <= 0) {
      window.clearInterval(timerInterval)
      timers.completeTimer(id)
    }

    return () => {
      window.clearInterval(timerInterval)
    }
  }, [id, time])

  const dateRange = (date: string, time: number) => {
    const result: [string, string[] | number[]] = [
      date,
      date.split(':')
    ]
    let steps = time

    while(steps > 0) {
      if (60 - +result[1][2] <= steps) {
        steps -= (60 - +result[1][2])
        result[1][2] = '0'
        result[1][1] = +result[1][1] + 1

        if (+result[1][1] > 59) {
          result[1][1] = '0'
          result[1][0] = +result[1][0] + 1
        }
      } else if (steps > 0) {
        result[1][2] = +result[1][2] + steps
        steps = 0
      }
    }

    return [
      result[0].split(':').map((element) => element.length < 2 ? `0${element}` : element).join(':'),
      result[1].join(':').split(':').map((element) => element.length < 2 ? `0${element}` : element).join(':'),
    ]
  }

  useEffect(() => {
    setRange(dateRange(startDate, time))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <li
      className={classNames(styles.timer, {
        [styles.completed]: completed
      })}
      onClick={() => timers.removeTimer(id)}
    >
      <span className={styles.timer__range}>
        {`${range[0]} - ${range[1]}`}
      </span>
      <span>
        :
      </span>
      <span className={styles.timer__timer}>
        {time ? time : 'done'}
      </span>
    </li>
  );
}

export default Timer;
