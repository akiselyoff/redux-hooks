import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/counter/counter-actions';
import { getValue, getStep } from '../redux/counter/counter-selectors';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

export default function Counter() {
  const value = useSelector(getValue); //вместо mapStateToProps
  const step = useSelector(getStep);

  const dispatch = useDispatch(); //вместо mapDispatchToProps

  return (
    <div className="Counter">
      <Value value={value} />

      <Controls
        step={step}
        onIncrement={() => dispatch(actions.increment(step))}
        onDecrement={() => dispatch(actions.decrement(step))}
      />
    </div>
  );
}

//делает map redux state и записывает объект пропсов c state в  компонент Counter
// const mapStateToProps = state => {
//   return {
//     value: state.counter.value,
//     step: state.counter.step,
//   };
// };

//делает map redux dispatch и записывает объект методов как пропсы в  компонент Counter
// const mapDispatchToProps = dispatch => {
//   return {
//     onIncrement: value => dispatch(actions.increment(value)),
//     onDecrement: value => dispatch(actions.decrement(value)),
//   };
// };

//подписывает компонент Counter следить за store
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

//абстракция для понимания каррирующей ф-ции connect:
// function connect(mapStateToProps, mapDispatchToProps) {
//   const stateProps = mapStateToProps(state);
//   const dispatchProps = mapDispatchToProps(dispatch);
//   return <Counter {...stateProps} {...dispatchProps} />
// }

// const add = (a, b) => a + b;//пример каррируемой ф-ции
// const curAdd = a => b => a + b;
// const add10 = curAdd(10);
// add10 возвращает  b => a + b у которой в замыкании а=10 есть
