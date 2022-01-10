import React from 'react'
import { BiLogOut } from 'react-icons/bi'

export const Header = () => {
    return (
        <header>
            <BiLogOut className="logout-btn" />
            <div className="header-main-content">
                <h1 className="app-logo">NotesApp</h1>
                <h2>Hello User</h2>
            </div>
            <span></span>
        </header>
    )
}
