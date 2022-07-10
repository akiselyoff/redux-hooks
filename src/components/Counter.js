import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/counter/counter-actions';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

const Counter = ({ value, step, onIncrement, onDecrement }) => {
  return (
    <div className="Counter">
      <Value value={value} />

      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
};

//делает map redux state и записывает объект пропсов c state в  компонент Counter
const mapStateToProps = state => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};

//делает map redux dispatch и записывает объект методов как пропсы в  компонент Counter
const mapDispatchToProps = dispatch => {
  return {
    onIncrement: value => dispatch(actions.increment(value)),
    onDecrement: value => dispatch(actions.decrement(value)),
  };
};

//подписывает компонент Counter следить за store
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
