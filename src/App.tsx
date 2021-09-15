import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Body from './Components/Body';

function App() {
  return (
    <div className="App">
      <div className="App_header">
        <NavBar/>
      </div>  
      <div className="App_body">
        <Body/>
      </div>
    </div>
  );
}

export default App;
