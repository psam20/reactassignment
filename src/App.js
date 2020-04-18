import React from 'react';
import Assignment1 from './Components/assignment1';
import Assignment3 from './Components/assignment3';
import Main from './Components/Assignment4&5/main';
import PropsMain from './Components/Assignment6_props/props_main';
import PropsValidationMain from './Components/Assignment7/props_validation_main';
import Multiplication from './Components/Assignment8/mul_table';
import LifecycleDemo from './Components/Assignment9/lifecycleAssignment';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
      “Happy
Learning-React” 
      </h1>
      <Assignment1 />
      <Assignment3 />
      <Main />
      <PropsMain />
      <PropsValidationMain />
      <Multiplication />
      <LifecycleDemo />
    </div>
  );
}

export default App;
