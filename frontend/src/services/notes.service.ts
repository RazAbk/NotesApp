import Axios, { AxiosResponse } from "axios"
import { INote } from "../interfaces/dataInterfaces"

const axios = Axios.create({
    withCredentials: true
})

const BASE_URL = process.env.NODE_ENV === 'production' ? '' : '//localhost:3030'

export const notesService = {
    getNotes,
    addNote,
    deleteNote
}

async function getNotes(): Promise<INote[] | null> {
    try {
        const res: AxiosResponse<INote[] | null | undefined> = await axios.get(`${BASE_URL}/api/note/`)
        if(res.data){
            return res.data
        }
        return null
    } catch (err) {
        console.log('Could not fetch notes\n')
        console.error(err)
        return null
    }
}



async function addNote(note: INote): Promise<INote[] | null> {
    try {
        const res: AxiosResponse<INote[] | null | undefined> = await axios.post(`${BASE_URL}/api/note`, note)
        if(res.data){
            return res.data
        }
        return null
    } catch (err) {
        console.log('Could not add note\n')
        console.error(err)
        return null
    }
}

async function deleteNote(noteId: string): Promise<INote[] | null> {
    try {
        const res: AxiosResponse<INote[] | null | undefined> = await axios.delete(`${BASE_URL}/api/note/${noteId}`)
        if(res.data){
            return res.data
        }
        return null
    } catch (err) {
        console.log('Could not delete note\n')
        console.error(err)
        return null
    }
}

