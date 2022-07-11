import React from 'react';
import './App.css';

// Import components
import LearnUseState from './components/LearnUseState.js'
import TodoListWithUseState from './components/TodoListWithUseState';
import TwoWaysBinding from './components/TwoWaysBinding.js';

function App() {
  return (
    <React.Fragment>
      <LearnUseState />
      <TwoWaysBinding />
      <TodoListWithUseState/>
    </React.Fragment>
  );
}

export default App;