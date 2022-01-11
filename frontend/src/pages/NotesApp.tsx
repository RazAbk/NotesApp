import React, { useEffect, useState } from 'react'
import { INote } from '../interfaces/dataInterfaces'
import { NotePreview } from '../components/NotePreview'
import { useDispatch } from 'react-redux'
import { clearUser, getNotes } from '../store/actions/user.action'
import { sessionStorageService } from '../services/session-storage.service'


export const NotesApp = () => {

    const dispatch = useDispatch()
    const [notes, setNotes] = useState<INote[] | null>([])

    useEffect(() => {
        (async () => {
            const notes: any = await dispatch(getNotes())
            setNotes(notes)
        })()

        // return () => {
        //     sessionStorageService.remove('loggedInUser')
        //     dispatch(clearUser())
        // }
    }, [dispatch])


    return (
        <div className="notes-app">
            <main>
                {notes && notes.map((note: INote) => <NotePreview key={note._id} note={note}/>)}
                {(notes && notes.length === 0) && <h1>No notes to display</h1>}
            </main>
        </div>
    )
}
