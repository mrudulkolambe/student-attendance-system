import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthenticationContext } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <Router>
        <AuthenticationContext>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/" element={<Home />} /> */}
          </Routes>
        </AuthenticationContext>
      </Router>
    </>
  );
}

export default App;
