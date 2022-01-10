import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import { NotesApp } from './pages/NotesApp';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NotesApp />} />
        {/* <Route path="/" element={<HomePage />} /> */}
      </Routes>
    </Router>
  )
}

export default App;
