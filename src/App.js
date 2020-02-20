import React from 'react';
import './App.css';
import Superhero from './components/Chucknorris';

function App() {
  return (
  <div>
    <header className="App-header">
      <h1 className="chuck">Chuck Norris</h1>
    
    <div>
      <Superhero />
    </div>
    </header>
  </div> 
  );
}

export default App;
