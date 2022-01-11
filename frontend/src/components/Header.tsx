import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { IUser } from '../interfaces/userInterfaces'

interface IProps {
    loggedInUser: IUser | null
}

export const Header = ({loggedInUser}: IProps) => {
    return (
        <header>
            <BiLogOut className="logout-btn" />
            <div className="header-main-content">
                <h1 className="app-logo">NotesApp</h1>
                <h2>Hello {loggedInUser?.userName}</h2>
            </div>
            <span></span>
        </header>
    )
}
