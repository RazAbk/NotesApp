import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import { NotesApp } from './pages/NotesApp';
import { HomePage } from './pages/HomePage';
import { NotesDetailsPage } from './pages/NoteDetailsPage';
import { Header } from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<NotesApp />} />
        <Route path="/note/:noteId" element={<NotesDetailsPage />} />
        {/* <Route path="/" element={<HomePage />} /> */}
      </Routes>
    </Router>
  )
}

export default App;
