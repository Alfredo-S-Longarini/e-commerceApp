// import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar/navBar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';

const App = () => {

  return (
    <div className="App">

        <NavBar />

        <ItemListContainer/>

    </div>
  );
}

export default App;
