import Axios from "axios"
import { ICredentials } from "../interfaces/userInterfaces"
import { sessionStorageService } from "./session-storage.service"

const axios = Axios.create({
    withCredentials: true
})

const BASE_URL = process.env.NODE_ENV === 'production' ? '' : '//localhost:3030'

export const userService = {
    login,
    signup,
    logout
}


async function login(credentials: ICredentials) {
    try {
        const res = await axios.post(`${BASE_URL}/api/auth/login`, credentials)
        if (res.data) {
            sessionStorageService.save('loggedInUser', res.data)
            return res.data
        }
        return null
    } catch (err) {
        console.log('Could not login\n')
        console.error(err)
        return null
    }
}

async function signup(credentials: ICredentials) {
    try {
        const res = await axios.post(`${BASE_URL}/api/auth/signup`, credentials)
        if (res.data) {
            sessionStorageService.save('loggedInUser', res.data)
            return res.data
        }
        return null
    } catch (err) {
        console.log('Could not signup\n')
        console.error(err)
        return null
    }
}

async function logout() {
    try {
        await axios.post(`${BASE_URL}/api/auth/logout`)
        sessionStorageService.remove('loggedInUser')
    } catch (err) {
        console.log('Could not logout\n')
        console.error(err)
    }
}
