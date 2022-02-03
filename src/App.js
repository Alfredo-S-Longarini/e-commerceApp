// import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar/navBar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';

const App = () => {

  return (
    <div className="App">

        <NavBar />

        <ItemListContainer/>

        <ItemDetailContainer/>

    </div>
  );
}

export default App;
