// import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';

const App = () => {

  return (
    <div className="App">

        <NavBar />

        <ItemListContainer title='App en desarrollo'/>
    </div>
  );
}

export default App;
