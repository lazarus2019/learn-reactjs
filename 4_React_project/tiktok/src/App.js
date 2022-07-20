import React from 'react';
import './App.css';

// Components
import LearnUseState from './components/LearnUseState'
import TodoListWithUseState from './components/TodoListWithUseState';
import TwoWaysBinding from './components/TwoWaysBinding';
import LearnUseEffectP1 from './components/LearnUseEffect_p1';
import LearnUseEffectP2 from './components/LearnUseEffect_p2';
import LearnUseEffectP3 from './components/LearnUseEffect_p3';
import LearnUseEffectP4 from './components/LearnUseEffect_p4';
import LearnUseLayoutEffect from './components/LearnUseLayoutEffect';
import LearnUseRef from './components/LearnUseRef';
import ReactMemoHOC from './components/React_memo_HOC/React_memo_HOC'
import LearnUseCallback from './components/LearnUseCallback/LearnUseCallback'
import LearnUseMemo from './components/LearnUseMemo'
import LearnUseReducer from './components/LearnUseReducer/LearnUseReducer'
import TodoAppWithUseReducer from './components/LearnUseReducer/TodoApp/'
import LearnUseContext from './components/LearnUseContext/LearnUseContext'
import UseContextNUseReducer from './components/UseContextNUseReducer/UseContextNUseReducer'
import LearnUseImperativeHandle from './components/LearnUseImperativeHandle/LearnUseImperativeHandle'
import CSS_SCSS_CSSModule from './components/CSS_SCSS_CSSModules'

// Provider
import { ThemeProvider } from './components/LearnUseContext/ThemeContext'
import { StoreProvider } from './components/UseContextNUseReducer/store'


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

      {/* <LearnUseRef /> */}

      {/* <ReactMemoHOC /> */}

      {/* <LearnUseCallback /> */}

      {/* <LearnUseMemo /> */}

      {/* <LearnUseReducer /> */}

      {/* <TodoAppWithUseReducer /> */}

      {/* Bao các component cần sử dụng prop theme */}
      {/* <ThemeProvider>
        <LearnUseContext />
      </ThemeProvider> */}

      {/* <StoreProvider>
        <UseContextNUseReducer />
      </StoreProvider> */}

      {/* <LearnUseImperativeHandle /> */}

      {/* ----CSS/SCSS/CSS Modules----- */}
      <CSS_SCSS_CSSModule />

    </React.Fragment>
  );
}

export default App;