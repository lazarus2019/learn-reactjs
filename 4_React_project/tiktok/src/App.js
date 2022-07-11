import React from 'react';
import './App.css';

// Import components
import LearnUseState from './components/LearnUseState.js'
import TwoWaysBinding from './components/TwoWaysBinding.js';

function App() {
  return (
    <React.Fragment>
      <LearnUseState />
      <TwoWaysBinding />
    </React.Fragment>
  );
}

export default App;