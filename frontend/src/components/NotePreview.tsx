import React from 'react'
import { INote } from '../interfaces/dataInterfaces'
import { utilService } from '../services/util.service'

interface IProps {
    note: INote
}

export const NotePreview = ({note}: IProps) => {
    return (
        <div className="note-preview">
            <h2>{note.title}</h2>
            <p>{utilService.longTxt(note.body, 150)}</p>
        </div>
    )
}
