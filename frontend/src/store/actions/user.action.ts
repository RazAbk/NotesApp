import { ICredentials, IUser } from "../../interfaces/userInterfaces"
import { notesService } from "../../services/notes.service"
import { userService } from "../../services/user.service"
import { AppDispatch } from "../store"

export const login = (credentials: ICredentials) => {
    return async (dispatch: AppDispatch) => {
        try {
            const user = await userService.login(credentials)
            dispatch({
                type: "SET_USER",
                user
            })
            return user
        } catch (err) {
            console.error(err);
        }
    }
}

export const signup = (credentials: ICredentials) => {
    return async (dispatch: AppDispatch) => {
        try {
            const user = await userService.signup(credentials)
            dispatch({
                type: "SET_USER",
                user
            })
            return user
        } catch (err) {
            console.error(err);
        }
    }
}

export const logout = () => {
    return async (dispatch: AppDispatch) => {
        try {
            await userService.logout()
            dispatch({
                type: "SET_USER",
                user: null
            })
        } catch (err) {
            console.error(err)
        }
    }
}

export const setUser = (user: IUser) => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: "SET_USER",
            user
        })
    }
}

export const clearUser = () => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: "SET_USER",
            user: null
        })
    }
}

export const getNotes = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const notes = await notesService.getNotes()
            dispatch({
                type: "SET_DATA",
                data: notes
            })
            return notes
        } catch (err) {
            console.error(err)
            return null
        }
    }
}