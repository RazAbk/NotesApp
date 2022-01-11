import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../interfaces/userInterfaces'
import { logout } from '../store/actions/user.action'

interface IProps {
    loggedInUser: IUser | null
}

export const Header = ({loggedInUser}: IProps) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = async () => {
        await dispatch(logout())
        navigate('/')
    }

    return (
        <header>
            <BiLogOut onClick={handleLogout} className="logout-btn" />
            <div className="header-main-content">
                <h1 onClick={() => {navigate('/note')}} className="app-logo">NotesApp</h1>
                <h2>Hello {loggedInUser?.userName}</h2>
            </div>
            <span></span>
        </header>
    )
}
