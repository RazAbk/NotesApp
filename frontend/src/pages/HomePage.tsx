import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { login, signup } from '../store/actions/user.action'

export const HomePage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(true)

    const handleSubmit = async (ev: any) => {
        ev.preventDefault()

        const credentials = {
            userName: ev.target[0].value,
            password: ev.target[1].value
        }
    
        let user: any

        if(!isLogin){
            user = await dispatch(signup(credentials))
        } else {
            user = await dispatch(login(credentials))
        }

        if (user){
            navigate('/notes')
        } else {
            console.log(`Could not ${isLogin ? 'Login' : 'Signup'}!`)
        }
    }

    return (
        <div className="home-page">
            <div className="user-auth-modal">
                <h2>
                    {isLogin ? `Don't have an account? ` : `Have an account? `}
                    <span onClick={() => { setIsLogin(prevState => !prevState) }}>{isLogin ? 'Signup' : 'Login'}</span>
                </h2>
                <h1>NotesApp</h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="userName">username</label>
                    <input type="text" id="userName" />
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" />
                    <button>{isLogin ? 'Login' : 'Signup'}</button>
                </form>
            </div>
        </div>
    )
}


