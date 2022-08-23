import { observer } from 'mobx-react-lite';
import React from 'react';
import timers from '../../store/timers';
import Timer from '../Timer/Timer';
import style from './TimerList.module.scss';

const TimerList = observer(() => {
  return (
    <ul className={style['timer-list']}>
      {timers.timers.map((timer: { id: number; completed: boolean; date: string, startDate: string; }) =>
        <Timer key={timer.id} completed={timer.completed} date={timer.date} id={timer.id} startDate={timer.startDate} />
      )}
    </ul>
  );
})

export default TimerList;
