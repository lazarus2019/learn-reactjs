import React from 'react';
import './App.css';

// Import components
import LearnUseState from './components/LearnUseState'
import TodoListWithUseState from './components/TodoListWithUseState';
import TwoWaysBinding from './components/TwoWaysBinding';
import LearnUseEffectP1 from './components/LearnUseEffect_p1';
import LearnUseEffectP2 from './components/LearnUseEffect_p2';
import LearnUseEffectP3 from './components/LearnUseEffect_p3';
import LearnUseEffectP4 from './components/LearnUseEffect_p4';
import LearnUseLayoutEffect from './components/LearnUseLayoutEffect';
import LearnUseRef from './components/LearnUseRef';

function App() {
  return (
    <React.Fragment>
      {/* <LearnUseState /> */}
      {/* <TwoWaysBinding /> */}
      {/* <TodoListWithUseState/> */}
      {/* <LearnUseEffectP1 /> */}
      {/* <LearnUseEffectP2 /> */}
      {/* <LearnUseEffectP3 /> */}
      {/* <LearnUseEffectP4 /> */}
      {/* <LearnUseLayoutEffect /> */}
      <LearnUseRef />

    </React.Fragment>
  );
}

export default App;