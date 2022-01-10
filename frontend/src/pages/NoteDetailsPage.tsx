import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { INote } from '../interfaces/dataInterfaces'

const notesData: INote[] = [
    {
        _id: 'asdasd',
        title: 'do that',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, tempora at! Earum pariatur blanditiis dolores nostrum illo dolorum repellendus consequatur?'
    },
    {
        _id: 'as1dasd',
        title: 'do that',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, tempora at! Earum pariatur blanditiis dolores nostrum illo dolorum repellendus consequatur?'
    },
    {
        _id: 'asd2asd',
        title: 'do that',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, tempora at! Earum pariatur blanditiis dolores nostrum illo dolorum repellendus consequatur?'
    },
    {
        _id: 'asda3sd',
        title: 'do that',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, tempora at! Earum pariatur blanditiis dolores nostrum illo dolorum repellendus consequatur?'
    },
    {
        _id: 'asda4sd',
        title: 'do that',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, tempora at! Earum pariatur blanditiis dolores nostrum illo dolorum repellendus consequatur?'
    },
    {
        _id: 'asda15sd',
        title: 'do that',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, tempora at! Earum pariatur blanditiis dolores nostrum illo dolorum repellendus consequatur?'
    },
    {
        _id: 'asda5sd',
        title: 'do that',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, tempora at! Earum pariatur blanditiis dolores nostrum illo dolorum repellendus consequatur?'
    },
    {
        _id: 'asda6sd',
        title: 'do that',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, tempora at! Earum pariatur blanditiis dolores nostrum illo dolorum repellendus consequatur?'
    },
    {
        _id: 'asda7sd',
        title: 'do that',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, tempora at! Earum pariatur blanditiis dolores nostrum illo dolorum repellendus consequatur?'
    },
    {
        _id: 'asda8sd',
        title: 'do that',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, tempora at! Earum pariatur blanditiis dolores nostrum illo dolorum repellendus consequatur?'
    },
    {
        _id: 'asda9sd',
        title: 'do that',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, tempora at! Earum pariatur blanditiis dolores nostrum illo dolorum repellendus consequatur?'
    },
]


export const NotesDetailsPage = () => {

    const { noteId } = useParams()
    const navigate = useNavigate()

    const [note, setNote] = useState<INote | null>(null)
    const [isEditMode, setEditMode] = useState(false)

    useEffect(() => {
        if (noteId) {
            // Todo: Fetch data of the note by id
            const findNote = notesData.find((note: INote) => note._id === noteId) || null
            setNote(findNote)
        }
    }, [noteId])

    const onDeleteNote = () => {
        // Todo: Delete note logic
        navigate('/')
    }

    const handleSubmit = (ev: any) => {
        ev.preventDefault()
        if(!note) return

        const noteCopy = {...note}
        noteCopy.title = ev.target[0].value
        noteCopy.body = ev.target[1].value

        console.log('new note')
        console.log(noteCopy)

        // Todo: Update note logic
    }

    if (!note) return <h1>Loading note...</h1>

    return (
        <div className="note-details-page">
            <div className="note-details">
                <div className="action-btns">
                    <button onClick={() => { setEditMode(prevMode => !prevMode) }}>{isEditMode ? 'Cancel Edit' : 'Edit'}</button>
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
                            <input type="text" name="title" defaultValue={note.title} />
                            <textarea name="body" defaultValue={note.body} />
                            <button>Submit</button>
                        </form>
                    </>
                }
            </div>
        </div>
    )
}
