import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { sessionStorageService } from '../services/session-storage.service'
import { clearUser, login, signup } from '../store/actions/user.action'

export const HomePage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(true)

    useEffect(() => {
        dispatch(clearUser())
        sessionStorageService.remove('loggedInUser')
    }, [dispatch])

    const handleSubmit = async (ev: any) => {
        ev.preventDefault()

        const credentials = {
            userName: ev.target[0].value,
            password: ev.target[1].value
        }

        if (!isLogin) {
            // First char is a letter, rest can be numbers, letters or symbols, 4-30 length
            const userNameTest = /^[A-Za-z][A-Za-z0-9!@#$%^&*_]{4,30}$/

            // At least on of each: uppercase letter, lowercase letter, digit, symbol, length of at least 8
            const passwordTests = [/^[A-Za-z0-9!@#$%^&*_].{5,}$/, /[A-Z]/, /[a-z]/, /[!@#$%^&*_]/]

            if (!userNameTest.test(credentials.userName)) {
                alert('Bad username, first letter should be a letter, at least 4 characters')
                return
            }

            if (!passwordTests.every(test => test.test(credentials.password))) {
                alert('Weak password, must have upper and lower case letters, at least 1 digit and 1 symbol, at length of at least 5 characters')
                return
            }
        }

        let user: any

        if (!isLogin) {
            user = await dispatch(signup(credentials))
        } else {
            user = await dispatch(login(credentials))
        }

        if (user) {
            navigate('/note')
        } else {
            if(isLogin){
                alert(`Could not Login, wrong username or password`)
            }
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


