import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import actionTypes from './counter-types';
import * as actions from './counter-actions'; //для того что бы исп. type из action что и будет типом

const initialValue = 0;

const valueReducer = createReducer(initialValue, {
  [actions.increment.type]: (state, { payload }) => state + payload,
  [actions.decrement.type]: (state, { payload }) => state - payload,
});

// const valueReducer = (state = initialValue, { type, payload }) => {//было
//   switch (type) {
//     case actionTypes.INCREMENT:
//       return state + payload;

//     case actionTypes.DECREMENT:
//       return state - payload;

//     default:
//       return state;
//   }
// };

const stepReducer = (state = 2) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
