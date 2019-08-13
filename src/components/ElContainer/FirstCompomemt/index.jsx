import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import style from './style.css';

export default function Header(props) {
  const { setShowInfo } = props;
  return (
    <div className={style.header}>
      <h1 className={[style.h1, style.one].join(' ')}>Добро пожаловать на мою страницу!</h1>
      <h1 className={[style.h1, style.two].join(' ')}>Меня зовут Сергей!</h1>
      <h1 className={[style.h1, style.three].join(' ')}>Жми, чтобы узнать обо мне подробнее!</h1>
      <Button className={style.button} variant="contained" onClick={() => setShowInfo(true)}>Подробнее</Button>
    </div>
  );
}

Header.propTypes = {
  setShowInfo: PropTypes.func.isRequired,
};