import React from 'react';
import styles from './ThemeChanger.module.scss';
import AppStyles from '../../App.module.scss'

function ThemeChanger() {
  const onDarkTheme = () => {
    const app = document.querySelector(`.${AppStyles.App}`) 

    if (app) {
      app.classList.toggle(AppStyles['dark-theme'])
    }
  }

  return (
    <label className={styles['theme-changer']}>
      <input type="checkbox" name="theme-change" onClick={onDarkTheme}/>
      <span></span>
    </label>
  );
}

export default ThemeChanger;
