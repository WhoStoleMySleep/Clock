import { makeAutoObservable } from 'mobx';

class Timers {
  timers: { id: number, date: string, startDate: string, completed: boolean; }[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTimer(timer: { id: number, date: string, startDate: string, completed: boolean; }) {
    this.timers.push(timer);
  }
  removeTimer(id: number) {
    this.timers = this.timers.filter((timer: { id: number; }) => timer.id !== id);
  }
  completeTimer(id: number) {
    this.timers = this.timers.map(
      (timer: { id: number, date: string, startDate: string, completed: boolean; }) => {
        return timer.id === id
          ? { ...timer, completed: true }
          : timer;
      }
    );
  }
}

const timers = new Timers();

export default timers;