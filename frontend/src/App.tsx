import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import { NotesApp } from './pages/NotesApp';
import { HomePage } from './pages/HomePage';
import { NotesDetailsPage } from './pages/NoteDetailsPage';
import { Header } from './components/Header';
import { sessionStorageService } from './services/session-storage.service';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

function App() {

  const loggedInUser = useSelector((state: RootState) => state.userModule.loggedInUser) || sessionStorageService.load('loggedInUser')

  const [isHeader, setHeader] = useState(true)

  // useEffect(() => {
  //   if(!loggedInUser){
  //     setHeader(false)
  //   } else {
  //     setHeader(true)
  //   }
  // }, [loggedInUser])

  return (
    <Router>
      {isHeader && <Header loggedInUser={loggedInUser} />}
      <Routes>
        <Route path="/note/:noteId" element={<NotesDetailsPage />} />
        <Route path="/note" element={<NotesApp />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App;
