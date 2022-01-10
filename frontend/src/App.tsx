import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import { NotesApp } from './pages/NotesApp';
import { HomePage } from './pages/HomePage';
import { NotesDetailsPage } from './pages/NoteDetailsPage';
import { Header } from './components/Header';
import { sessionStorageService } from './services/session-storage.service';

function App() {

  const loggedInUser = sessionStorageService.load('loggedInUser')

  return (
    <Router>
      {loggedInUser && <Header />}
      <Routes>
        <Route path="/note/:noteId" element={<NotesDetailsPage />} />
        <Route path="/notes" element={<NotesApp />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App;
