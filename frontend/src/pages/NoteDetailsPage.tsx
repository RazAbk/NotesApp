import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { INote } from '../interfaces/dataInterfaces'
import { RootState } from '../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { addNote, deleteNote, getNotes } from '../store/actions/user.action'

export const NotesDetailsPage = () => {

    const { noteId } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const notes = useSelector((state: RootState) => state.userModule.data)
    const [note, setNote] = useState<INote | null>(null)
    const [isEditMode, setEditMode] = useState(false)

    useEffect(() => {
        if (noteId && notes) {
            const findNote = notes.find((note: INote) => note._id === noteId) || null
            setNote(findNote)
        }
    }, [noteId, notes])

    const onDeleteNote = async () => {
        if(noteId){
            await dispatch(deleteNote(noteId))
            navigate('/note')
        }
    }

    const handleSubmit = async (ev: any) => {
        ev.preventDefault()
        if(!note) return

        const noteCopy = {...note}
        noteCopy.title = ev.target[0].value
        noteCopy.body = ev.target[1].value

        await dispatch(addNote(noteCopy))
        setEditMode(false)
    }

    if (!note){
        (async () => {
            await dispatch(getNotes())
        })()
        return null
    }

    return (
        <div className="note-details-page">
            <div className="note-details">
                <div className="action-btns">
                    <button onClick={() => { setEditMode(prevMode => !prevMode) }}>{isEditMode ? 'Cancel' : 'Edit'}</button>
                    <button onClick={onDeleteNote}>Delete</button>
                </div>
                {!isEditMode &&
                    <>
                        <h2>{note.title}</h2>
                        <p>{note.body}</p>
                    </>
                }
                {isEditMode &&
                    <>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="title" placeholder="Note title" defaultValue={note.title} />
                            <textarea name="body" placeholder="Note body" defaultValue={note.body} />
                            <button>Submit</button>
                        </form>
                    </>
                }
            </div>
        </div>
    )
}
