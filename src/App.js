import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import UploadFile from './pages/UploadFile';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/uploadFile" element={<UploadFile />} />
      </Routes>
    </div>
  );
}

export default App;
