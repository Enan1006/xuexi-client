import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import Signup from './Components/Shared/Signup';
import Header from './Components/Shared/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
