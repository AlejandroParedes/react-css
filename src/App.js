import React from 'react';
import './App.scss';
import ControlButtons from './component/ControlButtons/ControlButtons';
import GradientContent from './component/GradientContent/GradientContent';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-6 h-100">
            <ControlButtons/>
          </div>
          <div className="col-6 h-100">
            <GradientContent/>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
