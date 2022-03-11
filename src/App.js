// import logo from './logo.svg';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';
import Compras from './views/Compras/compras';
import Favoritos from './views/Favoritos/favoritos';
import Cart from './views/Cart/cart'
import { ProdProvider } from './Context/CartContext';


const App = () => {

  return (
    <ProdProvider>

      <BrowserRouter>
        <div className="App">

          <div className='row'>
            <NavBar />
          </div>

          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:name' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/compras' element={<Compras/>}/>
            <Route path='/favoritos' element={<Favoritos/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      
    </ProdProvider>
  );
}

export default App;
