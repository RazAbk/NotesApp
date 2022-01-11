import React, { useEffect, useState } from 'react'
import { INote } from '../interfaces/dataInterfaces'
import { NotePreview } from '../components/NotePreview'
import { useDispatch } from 'react-redux'
import { getNotes } from '../store/actions/user.action'


export const NotesApp = () => {

    const dispatch = useDispatch()
    const [notes, setNotes] = useState<INote[] | null>([])

    useEffect(() => {
        (async () => {
            const notes: any = await dispatch(getNotes())
            setNotes(notes)
        })()
    }, [])


    return (
        <div className="notes-app">
            
            <main>
                {notes && notes.map((note: INote) => <NotePreview key={note._id} note={note}/>)}
            </main>
        </div>
    )
}
