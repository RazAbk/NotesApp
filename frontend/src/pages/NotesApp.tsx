import React, { useEffect, useState } from 'react'
import { INote } from '../interfaces/dataInterfaces'
import { NotePreview } from '../components/NotePreview'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { addNote, getNotes } from '../store/actions/user.action'
import { sessionStorageService } from '../services/session-storage.service'
import { FiPlusCircle } from 'react-icons/fi'
import { RootState } from '../store/store'


export const NotesApp = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loggedInUser = useSelector((state: RootState) => state.userModule.loggedInUser) || sessionStorageService.load('loggedInUser')
    // const [notes, setNotes] = useState<INote[] | null>([])
    const notes = useSelector((state: RootState) => state.userModule.data)

    useEffect(() => {
        (async () => {
            await dispatch(getNotes())
        })()
    }, [])

    const handleNewNote = async () => {
        const newNote = {
            userId: loggedInUser._id,
            title: 'Note title',
            body: 'Note body',
        }

        const newNotes: any = await dispatch(addNote(newNote))
        navigate(`/note/${newNotes[newNotes.length - 1]._id}`)

    }

    return (
        <div className="notes-app">
            <main>
                {notes && notes.map((note: INote) => <NotePreview key={note._id} note={note} />)}
                <div onClick={handleNewNote} className="note-preview add-new">
                    <h2>Add new note</h2>
                    <FiPlusCircle />
                </div>
            </main>
        </div>
    )
}
