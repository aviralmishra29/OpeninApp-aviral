import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import UploadFile from './pages/UploadFile';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/uploadFile" element={<UploadFile />} />
        <Route path='/sidebar' element={<Sidebar />} />
      </Routes>
    </div>
  );
}

export default App;
