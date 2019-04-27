import React from 'react';
import './App.css';
import ControlButtons from './component/ControlButtons/ControlButtons';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ControlButtons/>
      </div>
    </Provider>
  );
}

export default App;
