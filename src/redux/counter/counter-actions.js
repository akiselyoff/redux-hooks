import { createAction } from '@reduxjs/toolkit';
// import actionTypes from './counter-types';

export const increment = createAction('counter/Increment'); //передаем аргументом то что было в type в старом виде, payload передаем через вызов increment(...). Переменные константы уже не нужны, объявляем один раз тип.

// export const increment = value => ({
//   type: actionTypes.INCREMENT,
//   payload: value,
// });

export const decrement = createAction('counter/Decrement'); // для вложенных обьектов используем второй параметр createAction(type, prepareAction)

// export const decrement = value => ({
//   type: actionTypes.DECREMENT,
//   payload: value,
// });
