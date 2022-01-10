import React from 'react'
import { useNavigate } from 'react-router'
import { INote } from '../interfaces/dataInterfaces'
import { utilService } from '../services/util.service'

interface IProps {
    note: INote
}

export const NotePreview = ({note}: IProps) => {

    const navigate = useNavigate()

    const noteClicked = () => {
        navigate(`/note/${note._id}`)
    }

    return (
        <div className="note-preview" onClick={noteClicked}>
            <h2>{note.title}</h2>
            <p>{utilService.longTxt(note.body, 150)}</p>
        </div>
    )
}
