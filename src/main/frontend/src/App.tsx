import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SignUp2 from './pages/SignUp2';
import SignUp3 from './pages/SignUp3';
import FindID from './pages/FindID';
import FindPW from './pages/FindPW';
import FindPW2 from './pages/FindPW2';
import FindPW3 from './pages/FindPW3';
import FindPW4 from './pages/FindPW4';
import QR from './pages/QR';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup2" element={<SignUp2 />} />
        <Route path="/signup3" element={<SignUp3 />} />
        <Route path="/find" element={<FindID />} />
        <Route path="/findPW" element={<FindPW />} />
        <Route path="/findPW2" element={<FindPW2 />} />
        <Route path="/findPW3" element={<FindPW3 />} />
        <Route path="/findPW4" element={<FindPW4 />} />
        <Route path="/qr" element={<QR />} />

      </Routes>
    </Router>
  );
}

export default App;
