// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/navBar';
import Title from './components/itemListContainer/itemListContainer';

function App() {
  return (
    <div className="App">

        <NavBar />

        <Title title='App en desarrollo' icon="./itemListContainer/iconTitle.png"/>
    </div>
  );
}

export default App;
