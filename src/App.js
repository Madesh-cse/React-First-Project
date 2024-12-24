
import './App.css';

import {Fragment} from 'react';  // any function which define with a "use"word  is know as react hook


import Header from './Header/Header.jsx';

import CoreConcepts from './components/CoreConcept.jsx'
import Example from './components/Example.jsx';





// html form

// props

// jsx form
function App() {

  // {let TabContent = "click a button"}


  return (
    <Fragment>
      <Header/>
      <main>
          <CoreConcepts/>
          <Example/>
      </main>
    </Fragment>
  );
}

export default App;
