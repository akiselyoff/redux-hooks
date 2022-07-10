// import { composeWithDevTools } from 'redux-devtools-extension';//не нужен делается под капотом
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from './counter/counter-reducer';

// const rootReducer = combineReducers({// перенесли готовый объект в configureStore
//   counter: counterReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());//было

const middleware = [...getDefaultMiddleware(), logger]; //прослойка между тем как action dispach и попаданием в reducer. logger для выведения в консоли инфо

const store = configureStore({
  //под капотом обернет обьект reducer в combineReducers и сделает rootRducer
  reducer: {
    counter: counterReducer,
  },
  middleware,

  devTools: process.env.NODE_ENV === 'development', // production вместо development скроет devTools в браузере
}); //стало

export default store;

// const counterReducer = (state = counterInitialState, { type, payload }) => {
//   switch (type) {
//     case 'counter/Increment':
//       return {
//         //вариант для влоеженного стейта выше.
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value + payload,
//         },
//       };
//     case 'counter/Decrement':
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value - payload,
//         },
//       };
//     default:
//       return state;
//   }
// };
