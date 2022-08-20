import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import Signup from './Components/Shared/Signup';
import Header from './Components/Shared/Header';
import Login from './Components/Shared/Login';
import Footer from './Components/Shared/Footer';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<Login />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
