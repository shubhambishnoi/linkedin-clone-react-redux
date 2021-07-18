import React from 'react';
import './App.css';
import Header from './Header.js'
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      {/*Header */}
      <Header/>
      {/* App Body*/}
      <div className="app_body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
