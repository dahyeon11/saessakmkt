import logo from './logo.svg';
import './App.css';
import Main from './pages/Main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const [isLogin, setIslogin] = useState(false)
  const [info, setInfo] = useState(null)

  return (
    <div className="App">
      <Router basename="/saessakmkt">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login setIslogin={setIslogin} setInfo={setInfo} />} />
          <Route path="/categoty" element={<Login setIslogin={setIslogin} setInfo={setInfo} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
