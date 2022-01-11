import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { sessionStorageService } from '../services/session-storage.service'
import { logout } from '../store/actions/user.action'
import { RootState } from '../store/store'


export const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loggedInUser = useSelector((state: RootState) => state.userModule.loggedInUser) || sessionStorageService.load('loggedInUser')

    const handleLogout = async () => {
        await dispatch(logout())
        sessionStorageService.remove('loggedInUser')
        navigate('/')
    }

    if(!loggedInUser) return null

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
