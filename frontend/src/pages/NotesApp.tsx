import React from 'react'
import { INote } from '../interfaces/dataInterfaces'
import { BiLogOut } from 'react-icons/bi'
import { NotePreview } from '../components/NotePreview'

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
        _id: 'asda5sd',
        title: 'do that',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, tempora at! Earum pariatur blanditiis dolores nostrum illo dolorum repellendus consequatur?'
    },
]


export const NotesApp = () => {
    return (
        <div className="notes-app">
            <header>
                <BiLogOut className="logout-btn" />
                <div className="header-main-content">
                    <h1 className="app-logo">NotesApp</h1>
                    <h2>Hello User</h2>
                </div>
                <span></span>
            </header>
            <main>
                {notesData.map((note: INote) => <NotePreview key={note._id} note={note}/>)}
            </main>
        </div>
    )
}
