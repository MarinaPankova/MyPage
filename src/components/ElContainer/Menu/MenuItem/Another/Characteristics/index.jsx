import React from 'react';
import characteristics from './data/characteristics';
import style from '../style.css';

// TODO: Сделать красиво (иконки и прочее)
export default function Characteristics() {
  const characteristic = characteristics.map(element => (
    <li key={element.id} className={style.listitem}>{element.item}</li>
  ));

  return (
    <div className={style.block}>
      <div className={style.container}>{characteristic}</div>
    </div>
  );
}